-- Apply once to a Supabase PostgreSQL project. No public read or write policies.
create table if not exists public.website_previews (
  id uuid primary key,
  request_key uuid not null unique,
  content_hash text not null,
  config jsonb not null,
  created_at timestamptz not null default now(),
  email_status text not null default 'pending',
  email_ids jsonb
);
alter table public.website_previews enable row level security;
revoke all on public.website_previews from anon, authenticated;
create table if not exists public.preview_request_limits (bucket text primary key, attempts integer not null);
alter table public.preview_request_limits enable row level security;
revoke all on public.preview_request_limits from anon, authenticated;
create or replace function public.allow_preview_request(bucket_key text) returns boolean
language plpgsql security definer set search_path = public as $$
declare n integer;
begin
 insert into preview_request_limits values (bucket_key,1)
 on conflict (bucket) do update set attempts=preview_request_limits.attempts+1
 returning attempts into n;
 return n <= 20;
end; $$;
revoke all on function public.allow_preview_request(text) from public, anon, authenticated;
grant execute on function public.allow_preview_request(text) to service_role;
