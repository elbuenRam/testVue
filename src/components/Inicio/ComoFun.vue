<template>
  <div class="ComoFuncontainer">
    <div class="agregarCarrito">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-basket"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
        />
      </svg>
      <h2 class="russo">AGREGA AL CARRITO</h2>
      <p class="ruda comoFun">
        Echale un ojo a nuestro catálogo y agrega al carrito las cervezas que más te llamen la
        atención.
      </p>
    </div>
    <div class="procedePago">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-credit-card"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
        />
        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
      </svg>
      <h2 class="russo">PROCEDE AL PAGO</h2>
      <p class="ruda comoFun">
        Procede al pago, si es que tienes una membresía ¡Disfruta del descuento!
      </p>
    </div>
    <div class="EnCamino">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-truck-flatbed"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5M3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1.732 0h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4a2 2 0 0 1 1.732 1"
        />
      </svg>
      <h2 class="russo">EN CAMINO</h2>
      <p class="ruda comoFun">Te contactaremos para coordinar la entrega.</p>
    </div>
  </div>
</template>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Sarpanch:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ruda&display=swap');

.ruda {
  color: black;
  font-family: 'Ruda', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

p.comoFun {
  font-size: 150%;
  width: 70%;
}

.ComoFuncontainer {
  display: flex;
  justify-content: space-between;
}
.agregarCarrito,
.procedePago,
.EnCamino {
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 5px 15px #1e1e1e;
  margin: 0 1%;
  width: 100%;
}

.russo {
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
}
svg {
  margin-top: 5%;
}
</style>
