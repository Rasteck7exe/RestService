<template>
  <div class="MainRight">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "MainRight",
};
</script>
<style lang="scss">
.MainRight {
  background: $primary;
  color: map-get($text-gray, 800) !important;
  margin: 50px;
  padding: 20px 100px;
}
@media screen and (max-width: 768px) {
  .MainRight {
    margin: 10px;
    padding: 10px 20px;
  }
}
.TitleMain {
  font-size: 30px !important;
  font-weight: bold;
  text-align: left;
}
.MiddleMain {
  font-size: 16px !important;
  font-weight: bold;
  text-align: left;
}
.CardView {
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 50px repeat(2, 1fr) 50px;
}
.Code {
  display: grid;
  background: $secondary;
  color: map-get($text-gray, 100) !important;
  border-radius: 5px;
  text-align: center;
  align-content: center;
}
.TitleCard {
  font-size: 20px !important;
  font-weight: bold;
  text-align: right;
}
.BodyCard {
  display: grid;
  grid-column: 2;
  text-align: center;
  align-content: center;
}
.Imagen {
  display: grid;
  text-align: center;
  align-content: center;
  object-fit: cover;
  max-width: 100px;
  height: 50px;
}
.InpuntStyles {
  width: 300px;
  height: 40px;
  border: none;
  border-bottom: 2px solid $primary;
  background: map-get($text-gray, 300) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: $secondary;
  padding: 10px;
}
.InpuntStyles:hover {
  color: map-get($text-gray, 500) !important;
}
.InpuntStyles::selection {
  background: $secondary;
  color: $primary;
}
</style>
