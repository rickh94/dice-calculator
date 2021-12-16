// import {createApp} from 'vue'
import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './index.css'

export const createApp = ViteSSG(App)
// createApp(App).mount('#app')
