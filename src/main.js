import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(createPinia()).use(VueAxios, axios).use(router).mount('#app')
