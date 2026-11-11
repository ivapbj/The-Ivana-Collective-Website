create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.schedule('retry-website-preview-notifications', '*/5 * * * *', $job$
  select net.http_post(
    url := 'https://theivanacollective.com/api/preview-notifications',
    headers := jsonb_build_object('Content-Type', 'application/json',
      'Authorization', 'Bearer ' || secret.decrypted_secret),
    body := '{}'::jsonb,
    timeout_milliseconds := 20000
  )
  from vault.decrypted_secrets secret
  where secret.name = 'preview_retry_secret';
$job$);
