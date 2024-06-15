<template>
  <div>
    <h1>Catálogo:</h1>
    <Product-card v-for="beer in beers" :beer="beer" :key="beer.id"></Product-card>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import axios from 'axios'
export default {
  data() {
    return { beers: [] }
  },
  components: { ProductCard },
  mounted() {
    axios.get('https://testvueproject-f585d-default-rtdb.firebaseio.com/beer.json').then((resp) => {
      this.beers = resp.data
    })
  }
}
</script>
