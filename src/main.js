import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import DisplayAllProduct from './components/Product Display/DisplayAllProduct.vue'
import App from './App.vue'
import InicioComponent from './components/Inicio/InicioComponent.vue'
import MembresiasComponent from './components/Inicio/MembresiasComponent.vue'
import InicioSesionComp from './components/InicioSesion-Registro/InicioSesionComp.vue'

const routes = [
  { path: '/', component: InicioComponent, redirect: '/inicio' },
  { path: '/catalogo', component: DisplayAllProduct },
  { path: '/inicio', component: InicioComponent },
  { path: '/membresias', component: MembresiasComponent },
  { path: '/login', component: InicioSesionComp }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
