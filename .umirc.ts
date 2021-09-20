import { defineConfig } from 'umi';

import products from './src/config/products.json';

const productsRoutes = products.map((item) => ({
  path: `/product/${item.code}`,
  component: '@/pages/products/product/index',
  title: item.title,
}));

export default defineConfig({
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: '/docs',
  publicPath: './',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/home/index', title: 'holdoormedical' },
        {
          path: '/products',
          component: '@/pages/products/index',
          title: 'products',
        },
        {
          path: '/contact_us',
          component: '@/pages/contact/index',
          title: 'contact us',
        },
        ...productsRoutes,
      ],
    },
  ],
  fastRefresh: {},
});
