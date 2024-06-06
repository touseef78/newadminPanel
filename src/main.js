import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import store from './store'
import "./axios";
import router from './router'
import App from './App.vue'

// Bootstrap
import { BootstrapVueIcons, PopoverPlugin, ToastPlugin, ModalPlugin, SidebarPlugin, TooltipPlugin, TabsPlugin,IconsPlugin  } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Highlightjs
import VueHighlightJS from 'vue-highlightjs';
// import 'highlight.js/styles/mono-blue.css';

// Apexcharts
import VueApexCharts from 'vue-apexcharts'

// Bootstrap Plugin
Vue.use(TabsPlugin)
Vue.use(TooltipPlugin)
Vue.use(SidebarPlugin)
Vue.use(PopoverPlugin)
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin);

// Highlight
Vue.use(VueHighlightJS)

// Apexchart
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

// Style
require('@/assets/icons/iconly/index.min.css')
require('@/assets/icons/remix-icon/index.min.css')
require('@/assets/scss/app.scss')

// Composition Api
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
