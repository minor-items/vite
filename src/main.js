import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { createRouter, createWebHistory } from 'vue-router';
import route from "./router"
import store from "./store"
import API from './api'
import App from './App.vue'

const { __POWERED_BY_QIANKUN__ } = qiankunWindow
const { routes, beforeEach, afterEach } = route
let router = null;
let instance = null;
let history = null;

function render(props = {}) {
  const { container, name } = props;
  const historyAddress = __POWERED_BY_QIANKUN__
    ? name
    : '/'
  history = createWebHistory(historyAddress);
  router = createRouter({
    history,
    routes
  })
  router.beforeEach((to, from, next) => {
    beforeEach(to, from, next)
  })
  router.afterEach(() => {
    afterEach()
  })

  instance = createApp(App);
  instance.use(API);
  instance.use(router);
  instance.use(store)
  instance.mount(container
    ? container.querySelector('#app')
    :document.getElementById("app"))
}

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props) {
    instance.unmount()
    instance._container.innerHTML = ''
    history.destroy()
    router = null
    instance = null
  },
})

if (!__POWERED_BY_QIANKUN__) {
  render()
}
