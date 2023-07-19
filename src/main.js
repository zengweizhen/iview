/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'
// import { Button, Icon, Image, Layout } from 'view-ui-plus'

import ViewUIPlus from 'view-ui-plus'
createApp(App).use(store).use(router).use(ViewUIPlus).mount('#app')

// const vue = createApp(App)
// vue.use(store).use(router).mount('#app')
// vue.component('Layout', Layout)
// vue.component('Button', Button)
// vue.component('Icon', Icon)
// vue.component('Image', Image)
