alter table public.website_previews
  add column if not exists notification_due timestamptz,
  add column if not exists notification_attempts integer not null default 0;
create index if not exists website_previews_notification_due
  on public.website_previews (notification_due) where notification_due is not null;

create or replace function public.claim_preview_notifications(preview_id uuid default null)
returns table (id uuid, config jsonb, created_at timestamptz, email_ids jsonb, notification_attempts integer)
language plpgsql set search_path = ''
as $$
begin
  update public.website_previews p
    set notification_due = null, email_status = 'retry_exhausted'
    where p.notification_due <= now() and p.created_at <= now() - interval '23 hours'
      and (preview_id is null or p.id = preview_id);

  return query
    with candidates as (
      select p.id from public.website_previews p
        where p.notification_due <= now()
          and p.created_at > now() - interval '23 hours'
          and (preview_id is null or p.id = preview_id)
        order by p.notification_due
        limit 3
        for update skip locked
    )
    update public.website_previews p
      set notification_due = now() + interval '5 minutes',
          notification_attempts = p.notification_attempts + 1
      from candidates c where p.id = c.id
      returning p.id, p.config, p.created_at, p.email_ids, p.notification_attempts;
end;
$$;
revoke all on function public.claim_preview_notifications(uuid) from public, anon, authenticated;
grant execute on function public.claim_preview_notifications(uuid) to service_role;
