<template>
  <div class="componentContainer">
    <div class="priceContainer">
      <p class="normalPrice ruda">Normal: ${{ normalPrice }} p/u</p>
      <h2 class="memberPrice ruda">Socio: ${{ socioPrice }} p/u</h2>
    </div>
    <div class="quantity">
      <button class="signButtom" @click="testFuntion">{{ addtoCard }}</button>
      <img v-if="this.csat > 4" class="imgCSat" :src="imageCsat" alt="" />
    </div>
  </div>
</template>

<script>
import CsatImg5 from '@/components/icons/img/CustomerSat/csat_5.png'

export default {
  props: { normalPrice: Number, socioPrice: Number, id: Number, csat: Number },
  data() {
    return {
      toCard: true,
      CsatImg5
    }
  },
  methods: {
    testFuntion() {
      this.$emit('testEmit', this.id)
      this.toCard = !this.toCard
    }
  },
  computed: {
    addtoCard() {
      return this.toCard ? 'AL CARRITO' : 'EN CARRITO'
    },
    imageCsat() {
      switch (Math.floor(this.csat)) {
        case 4:
          return this.CsatImg5
        case 5:
          return this.CsatImg5
        default:
          return this.CsatImg5
      }
    }
  }
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Ruda&display=swap');

.componentContainer {
  width: 80%;
  display: flex;
  flex-direction: column;
}

.starContainer > p {
  text-align: start;
}
.imgCSat {
  aspect-ratio: 1/1;

  width: 15%;
  height: 15%;
  margin: 0;
  margin-left: 5%;
  padding: 0;
  filter: grayscale(70%);
}

.productNumber {
  background-color: white;
  width: 30%;
  border-radius: 15px;
}
.ruda {
  font-family: 'Ruda', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 10%;
}

.quantity > button {
  font-size: 1.5rem;
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 1vh;
  background-color: #fba974;
  cursor: pointer;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 300;
  font-style: normal;
}

.quantity > button:hover {
  background-color: #e99a65;
}

.priceContainer {
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 1vh;
}

.memberPrice {
  margin-bottom: 3%;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 500;
  font-style: bold;
}

.inputBox {
  border: none;
}

.normalPrice {
  text-decoration: line-through;
  margin-top: 5%;
  margin-bottom: 0;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 300;
  font-style: normal;
}

.memberPrice {
  margin-top: 2%;
}

.numberP {
  margin-top: 3%;
  margin-bottom: 1%;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 500;
}
</style>
