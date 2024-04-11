/** @type {import('waku/config').Config} */
export default {
  middleware: () => [
    import('./src/middleware/cloudflareBindings.js'),
    // Not needed waku/middleware/dev-server because this app is supposed to run using by wrangler
    import('waku/middleware/ssr'),
    import('waku/middleware/rsc'),
  ],
  // Those are the default values. You have to apply same values in wrangler.toml
  // distDir: 'dist',
  // serverJs: 'serve.js',
  // publicDir: 'public',
};
