# Waku with Cloudflare Bindings

This repo is to aim to be able to use Cloudflare Bindings on Waku app.

## Preparation
- Make a wrangler.jsonc based on template.wrangler.jsonc
  - Set your account_id and kv_namespaces's id

## How it works
We can follow https://github.com/wakujs/waku/tree/main/examples/07_cloudflare and https://waku.gg/guides/cloudflare

- If you will need to use remote KV data, run with `--remote`, like `wrangler dev --remote`

See: https://developers.cloudflare.com/workers/local-development/
