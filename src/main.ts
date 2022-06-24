import 'tailwindcss/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { createPinia } from 'pinia'
import { setupNaive } from '@/plugins'
const app = createApp(App)

setupNaive(app)
// 挂载路由
setupRouter(app)

app.use(createPinia())

app.mount('#app')
