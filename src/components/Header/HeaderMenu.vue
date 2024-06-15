<template>
  <div class="headerContainer">
    <h1 class="russo logoHeader">WAD</h1>
    <div class="menuContainer">
      <p class="russo menuInicio">Inicio</p>
      <router-link to="/product"><p class="russo menuCatalog">Catálogo</p></router-link>
      <p class="russo menuMembr">Membresias</p>
    </div>
    <p class="russo usericon">U</p>
  </div>
</template>

<script>
export default {
  props: { normalPrice: String, socioPrice: String, id: Number },
  data() {
    return {}
  },
  methods: {
    testfun() {
      console.log('SVG pressed')
    }
  }
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Sarpanch:wght@400;500;600;700;800;900&display=swap');

div.headerContainer {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.1px;
}
.russo {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
}
.headerIcon {
  font-size: 36px;
}
.svgContainer {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.menuContainer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

.headerIcon {
  cursor: pointer;
}
a {
  text-decoration: none;
}

.usericon {
  margin-right: 5%;
}
</style>
