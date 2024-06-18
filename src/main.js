import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import DisplayAllProduct from './components/Product Display/DisplayAllProduct.vue'
import App from './App.vue'
import InicioComponent from './components/Inicio/InicioComponent.vue'

const routes = [
  { path: '/', component: InicioComponent, alias: '/inicio' },
  { path: '/catalogo', component: DisplayAllProduct },
  { path: '/inicio', component: InicioComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
