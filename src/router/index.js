import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/frontdesk/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/frontdesk/Index.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/frontdesk/About.vue'),
      },
      {
        path: 'paybill',
        component: () => import('../views/frontdesk/Paybill.vue'),
      },
      {
        path: 'payedbill/:id',
        component: () => import('../views/frontdesk/Payedbill.vue'),
      },
      {
        path: 'checkouts',
        component: () => import('../views/frontdesk/Checkouts.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/frontdesk/Product.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/frontdesk/Products.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/frontdesk/Cart.vue'),
      },
      {
        path: 'coffeebaking',
        component: () => import('../views/frontdesk/Coffeebaking.vue'),
      },
      {
        path: 'coffeekind',
        component: () => import('../views/frontdesk/Coffeekind.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/dashboard/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'boardproducts',
        component: () => import('../views/dashboard/Boardproducts.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'depositimage',
        component: () => import('../views/dashboard/Depositimage.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/Order.vue'),
      },
    ],
  },
  {
    // 輸入錯誤網址跳回到首頁
    path: '*',
    redirect: '/',
  },
];
const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
