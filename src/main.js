import Vue from 'nativescript-vue';

import router from './router';
import store from './store';
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import './styles.scss';
import animate from 'animate.css'
import { CardView } from 'nativescript-cardview';
require("nativescript-vue").registerElement('CardView', () => CardView);
// import { Video } from 'nativescript-videoplayer';
// registerElement("VideoPlayer", () => Video);

require("nativescript-vue").registerElement("RadSideDrawer", () => require("nativescript-ui-sidedrawer").RadSideDrawer);
Vue.use(animate);
Vue.registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);
// require("nativescript-vue").registerElement("VideoPlayer", () => Video);

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
