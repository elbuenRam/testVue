<template>
  <div class="productcontainer">
    <div className="imgcontainer">
      <img src="../icons/img/beer-demo.png" alt="" />
    </div>
    <div class="beerinfo">
      <h1 id="priceHeader" class="ruda">{{ beer.name_beer }}</h1>
      <div class="beerinfogrid">
        <p class="ruda">ORIGEN:</p>
        <p class="ruda">{{ beer.origen }}</p>
        <p class="ruda">CONTENIDO:</p>
        <p class="ruda">{{ beer.contenido }}</p>
        <p class="ruda">% ALCOHOL</p>
        <p class="ruda">{{ beer.p_alcohol }}</p>
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
        <h1 class="ruda" style="color: white">- {{ beer.desc_details.percentaje }}</h1>
      </div>
      <div v-if="temporada" class="SeassonBanner">
        <h1 class="ruda" style="color: white">Temp</h1>
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
@import url('https://fonts.googleapis.com/css2?family=Ruda&display=swap');

div.productcontainer {
  background-color: #eaeaea;
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
  transform: scale(103%);
}

.ruda {
  font-family: 'Ruda', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
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

@media (max-width: 550px) {
  div.productcontainer {
    display: grid;
    align-items: self-start;
    grid-template-rows: 1fr 0.7fr;
    grid-template-columns: 1fr 1fr;
    gap: 1%;
  }
  div.productcontainer:hover {
    transform: scale(101%);
  }
  img {
    margin-left: 30%;
    margin-top: 20%;
    margin-bottom: 0%;
    width: 60%;
    padding-top: 0%;
    aspect-ratio: 1/4;
  }
  .promotionBanner {
    top: 5%;
    font-size: 45%;
  }
  .SeassonBanner {
    top: 5%;
    font-size: 45%;
  }

  div.beerinfo {
    display: flex;
    flex-direction: column;
    font-size: 90%;
    margin-right: 5%;
    padding-right: 10%;
  }

  div.beerinfogrid {
    margin-bottom: 0%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .imgcontainer {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }
  .priceratediv {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    margin-left: 20%;
  }
  h1#priceHeader.ruda {
    margin-top: 25%;
  }
  .priceratediv {
    height: 150%;
  }
}
</style>
