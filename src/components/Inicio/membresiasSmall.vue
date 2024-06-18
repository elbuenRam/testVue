<template>
  <div class="containerSmallMemb">
    <div class="headerSmallMemb">
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
.containerSmallMemb {
  padding: 0 2%;
  background-color: #d2d2d2;
  width: 20%;
  border-radius: 15px;
  margin: 2% 0;
  transition: transform 200ms ease-in-out;
  box-shadow: 0px 5px 5px #1e1e1e;
}

.containerSmallMemb:hover {
  transform: scale(105%);
}
h2.membTitle,
.beneficiosMembValue {
  text-align: center;
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
