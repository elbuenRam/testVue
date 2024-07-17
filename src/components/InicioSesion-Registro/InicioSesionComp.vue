<template>
  <div class="loginContainer">
    <h1 class="ruda">INICIO DE SESIÓN</h1>
    <form action="">
      <input class="tinput ruda" type="text" placeholder="CORREO ELECTRÓNICO" v-model="mail" />
      <input class="tinput ruda" type="password" placeholder="CONTRASEÑA" v-model="password" />
      <P class="forgetPassw">¿Olvidaste tu contraseña?</P>
    </form>
    <div class="containerbuttons">
      <button class="currentb ruda">INICIAR SESION</button>
      <button class="nocurrentb ruda">NO TENGO CUENTA</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.loginContainer {
  margin: 2%;
  padding: 3%;
  border-radius: 15px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
}
.tinput {
  width: 100%;
  font-size: 110%;
  border-radius: 15px;
  border-color: #d9d9d9;
  outline: none;
  border: 1px solid #d9d9d9;
  margin: 2% 0%;
  line-height: 300%;
  text-indent: 8px;
}
.forgetPassw {
  font-size: 90%;
  margin-top: 0;
  padding-left: 5px;
}
.containerbuttons {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.currentb,
.nocurrentb {
  margin: 0 1%;
  border-radius: 15px;
  border: 0px;
  width: 110%;
  height: 4rem;
  transition: all 200ms ease-in-out;
}
.currentb:hover {
  background-color: #fba974;
}
.nocurrentb:hover {
  background-color: #fba974;
}

@media (max-width: 550px) {
  .loginContainer {
    margin: 5%;
    padding: 3%;
    border-radius: 15px;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    width: 75%;
    align-items: center;
  }
}
</style>
