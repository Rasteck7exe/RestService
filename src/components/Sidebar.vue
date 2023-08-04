<template>
  <div class="AsideLeft">
    <h1>Métodos HTTPS</h1>
    <router-link class="Option" to="/Get" v-slot="{ navigate }"
      ><button class="ButtonMenu" @click="navigate">GET</button></router-link
    >
    <router-link class="Option" to="/Post" v-slot="{ navigate }"
      ><button class="ButtonMenu" @click="navigate">POST</button></router-link
    >
  </div>
</template>
<script>
export default {
  name: "AsideLeft",
};
</script>
<style lang="scss">
.AsideLeft {
  background: $primary;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px repeat(2, 40px);
  gap: 10px;
  list-style: none;
}
.Option,
.ButtonMenu {
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: medium;
  height: 100%;
  text-decoration: none;
}
.ButtonMenu:hover {
  background: $secondary;
  border: 1px solid $primary;
  color: map-get($text-gray, 200);
  width: 80%;
}
</style>
