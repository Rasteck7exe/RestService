<template>
  <div class="AppLayout">
    <AppSidebar />
    <AppMain />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Sidebar from "./Sidebar.vue";
import Main from "./Main.vue";
export default defineComponent({
  components: { AppSidebar: Sidebar, AppMain: Main },
  name: "AppLayout",
});
</script>

<style>
.AppLayout {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
}

@media (min-width: 768px) {
  .AppLayout {
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
