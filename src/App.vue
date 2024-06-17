<template>
  <div class="header">
    <Header-menu></Header-menu>
  </div>
  <router-view></router-view>
  <inicio-component></inicio-component>
</template>

<script setup>
import HeaderMenu from './components/Header/HeaderMenu.vue'
import InicioComponent from './components/Inicio/InicioComponent.vue'
</script>

<script>
export default {
  components: { InicioComponent }
}
</script>

<style>
.header {
  width: 70%;
}
</style>
