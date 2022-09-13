import 'es6-promise/auto' //ie9 대응 polyfill - 의문
import 'babel-polyfill' // ie10 SecurityError 대응 - 의문

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Axios from 'axios'
import Routes from './routes'
import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueMeta);
// Vue.use(Axios);
Vue.prototype.$http = Axios

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: Routes,
  mode: 'history',
  linkActiveClass: "active",
  linkExactActiveClass: "exact_active",
});

// 라우터에서 타이틀 설정 head title change
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next();
// });

// 라우터에서 타이틀 및 메타태그 설정This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  //컴파일 시 오류로 막음 const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));
  next();
});

router.beforeResolve((to, from, next) => {
  // if (to.name) {
    NProgress.start();
    NProgress.done();
  // }
  next();
});
// router.afterEach((to, from) => {
//   NProgress.done();
// });
NProgress.configure({ easing: 'ease', speed: 600 });

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
