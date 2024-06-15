<template>
  <div class="header">
    <Header-menu @catalogoSet="funcionCagada"></Header-menu>
  </div>
  <router-view></router-view>
</template>

<script setup>
import HeaderMenu from './components/Header/HeaderMenu.vue'
</script>
