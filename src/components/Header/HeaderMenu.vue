<template>
  <div class="headerContainer">
    <router-link to="/"><h1 class="russo">W<span>A</span>D</h1></router-link>
    <router-link @click="logicInicio" v-if="this.$route.path === '/catalogo'" to="/inicio"
      ><h3 class="ruda">Inicio</h3>
    </router-link>
    <router-link @click="logicInicio" v-if="this.$route.path === '/inicio'" to="/catalogo"
      ><h3 class="ruda">Catalogo</h3>
    </router-link>
    <router-link to="/"> <h3 class="ruda">Membresias</h3></router-link>
    <div class="loginbutton" v-if="isLogging">
      <router-link to="/"> <h3 class="ruda">User</h3></router-link>
    </div>
    <div class="loginbutton" v-if="!isLogging">
      <router-link to="/"><h3 class="ruda">Iniciar Session</h3></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogging: true,
      onInicio: false
    }
  },
  computed: {
    checkLogging() {
      return this.isLogging
    }
  },
  methods: {
    logicInicio() {
      this.onInicio = !this.onInicio
      console.log(this.$route.path)
    }
  }
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Sarpanch:wght@400;500;600;700;800;900&display=swap');

a {
  text-decoration: none;
  cursor: pointer;
}
.headerContainer {
  padding: 2% 0;
  display: flex;
  text-align: center;
  border-style: none none solid none;
  border-width: 0.5px;
}

.headerContainer {
  justify-content: space-evenly;
  align-items: center;
}

span {
  color: #fba974;
}
.russo {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
}
.ruda {
  color: black;
  font-family: 'Ruda', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.loginbutton {
  background-color: #fba974;
  padding: 0 1%;
  border-radius: 3vh;
}
</style>
