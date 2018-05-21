import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Drawer from '../components/Drawer';
import ListView from '../components/ListView';
import Rhyme from '../components/Rhyme';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/Drawer',
      component: Drawer,
      meta: {
        title: 'Drawer',
      },
    },
    {
      path: '/List',
      component: ListView,
      meta: {
        title: 'ListView',
      },
    },
    {
      path: '/Rhyme/:id/:title/:imgurl/:rhyme',
      name:'Rhyme',
      component: Rhyme,
      meta: {
        title: 'Rhyme',
      },
    },
    {path: '*', redirect: '/Drawer'},
  ],
});

router.replace('/Drawer');

module.exports = router;
