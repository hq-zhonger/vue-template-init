import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from "./router/router.js"
import pinia from "./store/store.js";
import 'virtual:svg-icons-register'
import svgIcon from './components/svgIcon/index.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)
app.use(pinia)
for (const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}
app.use(ElementPlus)
app.component('svg-icon',svgIcon)
app.mount('#app')
