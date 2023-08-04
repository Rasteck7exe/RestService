<template>
  <div class="RestView">
    <h1 class="TitleMain">GET</h1>
    <div class="container">
      <div class="row">
        <p class="MiddleMain">
          Selecciona la categoria que deseas obtener con el metodo GET obtener
          (posts, comments, albums, etc.) y pulsa el botón "Obtener".
        </p>
        <form @submit.prevent="get">
          <div>
            <input
              type="text"
              id="resource"
              v-model="resource"
              class="InpuntStyles"
              placeholder="Ejemplo: posts"
              list="Options"
              required
            />
            <datalist id="Options">
              <option value="posts" />
              <option value="comments" />
              <option value="albums" />
              <option value="photos" />
              <option value="todos" />
            </datalist>
          </div>
          <button type="submit">Obtener</button>
        </form>
        <div v-if="getData">
          <h3>Datos obtenidos</h3>
          <div class="LayoutCards" v-for="data in getData" :key="data.id">
            <div class="CardView">
              <div class="Code">#{{ data.id }}</div>
              <div class="TitleCard">{{ data.title }}</div>
              <div class="BodyCard">{{ data.body }}</div>
              <img v-bind:src="data.url" alt="Imagen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "GetHttps",
  data() {
    return {
      resource: "",
      title: "",
      body: "",
      getData: null,
      postData: null,
      deleteData: null,
    };
  },
  methods: {
    get() {
      axios
        .get(`https://jsonplaceholder.typicode.com/${this.resource}`)
        .then((response) => {
          this.getData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    post() {
      axios
        .post(`https://jsonplaceholder.typicode.com/${this.resource}`, {
          title: this.title,
          body: this.body,
        })
        .then((response) => {
          this.postData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    delete() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/${this.resource}`)
        .then((response) => {
          this.deleteData = response;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style>
.LayoutCards {
  margin-inline: 10%;
}
</style>
