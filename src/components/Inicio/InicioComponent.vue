<template>
  <div class="containmentInicio">
    <div class="brandLogoName">
      <div class="nameContainer">
        <h1 class="companyName russo">WHAT</h1>
        <span class="companySpan russo" style="color: #fba974">A</span>
        <h1 class="companyName russo">DAY</h1>
        <h1 class="companyName russo">COMPANY</h1>
      </div>
      <img class="logoImg" src="../icons/img/logo.jpg" alt="" />
    </div>
  </div>

  <div class="containerQS">
    <div class="quienesSomosText">
      <h2 class="ruda">¿Quienes somos?</h2>
      <p class="ruda pwr">
        Somos grupo de personas que busca dar felicidad a este mundo por medio de cervezas.
        Ofreciendo cervezas artesanales nacionales e internacionales.
      </p>
    </div>
    <div class="quienesSomosText">
      <h2 class="ruda">¿Que buscamos?</h2>
      <p class="ruda pwr">
        Darte una salida de lo tradicional, la idea es que después de un día pesado vayas a tu
        refrigerador, abras una cerveza y digas “What A Day”.
      </p>
    </div>
  </div>

  <div class="containerWAD">
    <h1 class="russo">¿Cómo funciona "WAD"?</h1>
    <Como-fun></Como-fun>
  </div>
  <div class="containerMembresias">
    <h1 class="russo">¿Cómo funcionan las membresías?</h1>
    <p class="ruda textInicio">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem atque dicta pariatur vel est
      repellendus quae minus delectus laudantium voluptas quo illum, soluta recusandae, ipsam
      perferendis natus, necessitatibus itaque deleniti.
    </p>
    <div class="containerMembComponent">
      <Membresias-component></Membresias-component>
    </div>
  </div>
</template>

<script>
import ComoFun from './ComoFun.vue'
import MembresiasComponent from './MembresiasComponent.vue'

export default {
  components: { ComoFun, MembresiasComponent }
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Sarpanch:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ruda&display=swap');

.textInicio {
  text-align: justify;
  width: 75%;
  margin: auto;
  font-size: 150%;
}
.containerQS {
  margin: 0% 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10%;
  align-items: center;
  justify-items: center;
}
.containerWAD {
  margin: 0% 0;
  width: 80%;
}

.containerMembComponent {
  display: flex;
  justify-content: center;
}
.containerMembresias > h1 {
  font-size: 3rem;
  text-align: center;
}

.containerWAD > h1 {
  font-size: 3rem;
  text-align: center;
}

h2.ruda {
  font-size: 3rem;
  margin-bottom: 3%;
}

p.pwr {
  font-size: 65%;
}
.ruda {
  color: black;
  font-family: 'Ruda', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.quienesSomos {
  margin: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

img.sunsetImg {
  margin-left: 30%;
  margin: 0;
  padding: 0;
  aspect-ratio: 2/1;
  width: 65%;
  border-radius: 15px;
}

.quienesSomosText {
  margin: 0 15%;
  width: 70%;
  text-align: center;
  font-size: xx-large;
}

.brandLogoName {
  display: flex;
  justify-content: space-between;
}
.logoImg {
  aspect-ratio: 1/1.5;
  width: 40%;
  padding: 0;
  margin: 0%;
  height: 40%;
  border-radius: 20px;
}
.containmentInicio {
  margin: 10% 0%;
  width: 80%;
}
h1.companyName,
span.companySpan {
  margin: 3% 0;
  font-size: 8rem;
}
.nameContainer {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.russo {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
}
@media (max-width: 550px) {
  h2.ruda {
    font-size: 2rem;
    margin-bottom: 0%;
  }

  .brandLogoName {
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  h1.companyName,
  span.companySpan {
    margin: 3% 0;
    font-size: 3.5rem;
  }
  .containmentInicio {
    margin: 10% 0;
    width: 70%;
  }
  .logoImg {
    margin: 10% 0%;
    aspect-ratio: 1/1.5;
    width: 80%;
    height: 80%;
    border-radius: 20px;
  }
  .containerQS {
    margin: 5% 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-items: center;
  }
  .containerWAD > h1 {
    font-size: 2rem;
    text-align: center;
  }
  .containerMembresias > h1 {
    font-size: 2rem;
    text-align: center;
  }
  .textInicio {
    text-align: justify;
    width: 70%;
    margin: auto;
    font-size: 110%;
  }
}
</style>
