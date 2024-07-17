<template>
  <div class="containerBiglMemb">
    <div class="headerBigMemb">
      <h2 class="russo membTitle">MEMBRESÍA</h2>
      <h2 class="russo membTitle">{{ membName }}</h2>
    </div>
    <h3 class="russo">BENEFICIOS:</h3>
    <div class="beneficiosContainer">
      <p class="ruda">meses de Servicio</p>
      <p class="ruda beneficiosMembValue">{{ monthsOfService }}</p>
      <p class="ruda">Descuento de Socio</p>
      <p class="ruda beneficiosMembValue">{{ memDiscount }}</p>
    </div>
    <h1 class="ruda beneficiosMembValue">Precio:{{ '$' + membPrice }}</h1>
  </div>
</template>

<style>
.containerBiglMemb {
  padding: 0 2%;
  background-color: #fba974;
  width: 25%;
  border-radius: 15px;
  transition: transform 200ms ease-in-out;
  box-shadow: 0px 5px 8px #1e1e1e;
}

.containerBiglMemb:hover {
  transform: scale(110%);
}

.beneficiosContainer {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
}
@media (max-width: 550px) {
  .containerBiglMemb {
    box-shadow: 0px 2px 3px #1e1e1e;
    width: 100%;
  }
  .containerBiglMemb:hover {
    transform: scale(100%);
  }
}
</style>

<script>
export default {
  props: { membName: String, monthsOfService: String, memDiscount: String, membPrice: String },
  data() {
    return {}
  }
}
</script>
