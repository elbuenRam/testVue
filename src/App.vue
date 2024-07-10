<template>
  <div class="header">
    <Header-menu></Header-menu>
  </div>
  <router-view></router-view>
</template>

<script setup>
import HeaderMenu from './components/Header/HeaderMenu.vue'
</script>

<script>
export default {}
</script>

<style>
.header {
  width: 70%;
}

@media (max-width: 550px) {
  .header {
    width: 90%;
  }
}
</style>
