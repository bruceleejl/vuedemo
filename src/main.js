import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vant from 'vant'
import 'vant/lib/index.css'
import $ from 'jquery'
import { Toast } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Popup } from 'vant';
import { Area } from 'vant';
import { Collapse, CollapseItem } from 'vant';
Vue.use($)
Vue.use(Collapse);
Vue.use(CollapseItem)
Vue.use(Area);
Vue.use(Popup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Toast);
Vue.use(Vant)
Vue.use(VueRouter)
Vue.config.productionTip=false
import router from './assets/js/my.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
