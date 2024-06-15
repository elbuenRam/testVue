<template>
  <div class="productcontainer">
    <div className="imgcontainer">
      <img src="../icons/img/beer-demo.png" alt="" />
    </div>
    <div class="beerinfo">
      <h1 class="indielower-regular">{{ beer.name_beer }}</h1>
      <div class="beerinfogrid">
        <p class="russo">ORIGEN:</p>
        <p class="russo">{{ beer.origen }}</p>
        <p class="russo">CONTENIDO:</p>
        <p class="russo">{{ beer.contenido }}</p>
        <p class="russo">% ALCOHOL</p>
        <p class="russo">{{ beer.p_alcohol }}</p>
      </div>
    </div>
    <div className="priceratediv">
      <price-rate-part
        @test-emit="printbeerID"
        :normalPrice="beer.normal_price"
        :socioPrice="beer.member_price"
        :id="beer.id"
        :csat="beer.stars"
      ></price-rate-part>
      <div v-if="beer.desc_details.descuento" class="promotionBanner">
        <h1>- {{ beer.desc_details.percentaje }}</h1>
      </div>
      <div v-if="temporada" class="SeassonBanner">
        <h1>Temp</h1>
      </div>
    </div>
  </div>
</template>

<script>
import PriceRatePart from './PriceRatePart.vue'
export default {
  props: {
    beer: Object
  },
  components: { PriceRatePart },
  data() {
    return { temporada: this.beer.temporada }
  },
  methods: {
    printbeerID(id) {
      console.log(id)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Sarpanch:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Coiny&family=Indie+Flower&family=Russo+One&display=swap');

div.productcontainer {
  background-color: #eef7ff;
  margin-top: 2.5%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 3fr 4fr;
  grid-template-rows: auto 0.1fr;
  gap: 3%;
  border-radius: 15px;
  box-shadow: 0px 5px 15px #1e1e1e;
  transition: transform 200ms ease-in-out;
  position: relative;
  max-width: 960px;
}

div.productcontainer:hover {
  transform: translatex(10px);
}

h1.indielower-regular {
  margin-bottom: 0;
  font-family: 'Indie Flower', cursive;
  font-weight: 400;
  font-style: normal;
}

.russo {
  margin-top: 1%;
  margin-bottom: 1%;
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #4f4f4f;
}

img {
  margin-left: 50%;
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  padding-top: 2%;
  aspect-ratio: 1/4;
}

div.beerinfo {
  display: flex;
  flex-direction: column;
}

div.beerinfogrid {
  margin-top: 5%;
  margin-bottom: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

div.priceratediv > * {
  text-align: center;
}

.starcontainer {
  margin-bottom: 20%;
}

.promotionBanner {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
  position: absolute;
  width: 10%;
  top: 7%;
  right: 0;
  border-radius: 1.5vh 0 0 1.5vh;
  background-color: #ec2835;
  color: #eef7ff;
  font-size: 60%;
}
.SeassonBanner {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-left: 0;
  position: absolute;
  width: 10%;
  top: 7%;
  right: 0;
  border-radius: 1.5vh 0 0 1.5vh;
  background-color: #0a6847;
  color: #eef7ff;
  font-size: 60%;
}
</style>
