import './public-path';
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

Vue.config.productionTip = false

let instance = null;
let router = null;

function render(props = {}) {
  const { container } = props;
  router = createRouter(window.__POWERED_BY_QIANKUN__ ? '/app2' : '/');
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log(`[vue] vue app bootstrap`);
}

export async function mount(props) {
  console.log(`[vue] props from framework`, props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
