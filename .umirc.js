export default {
  base: '/',
  publicPath: '/',
  treeShaking: true,
  history: 'hash',
  hash: true,
  proxy: {
    '/api': {
      target: 'https://keju.jiker.info',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  plugins: [
    // https://www.npmjs.com/package/umi-plugin-nprogress
    'umi-plugin-nprogress',
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        dll: false,
        title: '科举系统',

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
