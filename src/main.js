import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'

import './untils/flexible'
import './css/normailze.css'

createApp(App).use(router).mount('#app')
