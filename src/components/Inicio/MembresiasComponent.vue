<template>
  <div class="containerMemb">
    <membresias-small
      membName="Defín"
      monthsOfService="1"
      memDiscount="3%"
      membPrice="50"
    ></membresias-small>
    <membresia-big
      membName="Mantequilla"
      monthsOfService="6"
      memDiscount="9%"
      membPrice="50"
    ></membresia-big>
    <membresias-small
      membName="Mono Capuchino"
      monthsOfService="3"
      memDiscount="5%"
      membPrice="50"
    ></membresias-small>
  </div>

  <!-- membName: String, monthsOfService: String, memDiscount: String, membPrice: String -->
</template>

<script>
import membresiaBig from './membresiaBig.vue'
import membresiasSmall from './membresiasSmall.vue'

export default {
  components: { membresiaBig, membresiasSmall }
}
</script>

<style scope>
.containerMemb {
  margin: 5% 0;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
}
</style>
