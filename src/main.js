import { createSSRApp } from 'vue'
import { createRouter } from './router'

import App from './App.vue'

import "./styles/tailwind.css"

//createApp(App).mount('#app')

export function createApp() {
    const app = createSSRApp(App)
    const router = createRouter()
    app.use(router)
    return { app, router }
}