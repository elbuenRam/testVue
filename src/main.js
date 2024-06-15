import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import DisplayAllProduct from './components/Product Display/DisplayAllProduct.vue'
import App from './App.vue'

const routes = [{ path: '/', component: DisplayAllProduct }]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
