import type { Middleware } from 'waku/config';

declare global {
  type Bindings =
    | {
        WAKU_SAMPLE?: KVNamespace;
      }
    | undefined; // At the build time, context is blank({})
}

const cloudflareBindingsMiddleware: Middleware = (options) => {
  const { env, cmd } = options;
  if (cmd === 'dev') {
    throw new Error('Cloudflare bindings are not supported in development mode');
  }
  if (!env) {
    throw new Error('Unexpected missing environment variables');
  }
  return async (ctx, next) => {
    ctx.context.bindings = { WAKU_SAMPLE: env.WAKU_SAMPLE } as unknown as Bindings;
    await next();
  };
};

export default cloudflareBindingsMiddleware;
