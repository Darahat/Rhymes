import Vue from 'nativescript-vue';

import router from './router';
import store from './store';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';


import './styles.scss';
require("nativescript-vue").registerElement("RadSideDrawer", () => require("nativescript-ui-sidedrawer").RadSideDrawer);
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './font-awesome.css',
  'ion': './ionicons.css'
};
TNSFontIcon.loadCss();
function openDrawer() {
  this.$refs.drawer.nativeView.showDrawer();
};
function onCloseDrawerTap() {
  this.$refs.drawer.nativeView.closeDrawer();
}

Vue.filter('fonticon', fonticon);
// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
