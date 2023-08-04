<template>
  <div class="rest-view">
    <h1 class="title">GET</h1>
    <div class="container">
      <div class="row">
        <p class="description">
          Selecciona la categoria que deseas obtener con el metodo GET obtener
          (posts, comments, albums, etc.) y pulsa el botón "Obtener".
        </p>
        <form @submit.prevent="get">
          <div class="form-group">
            <label for="resource">Recurso</label><br />
            <input
              type="text"
              id="resource"
              v-model="resource"
              class="input"
              placeholder="Ejemplo: posts"
              list="options"
              required
            />
            <datalist id="options">
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
          <div class="layout-cards" v-for="data in getData" :key="data.id">
            <div class="card-view">
              <div class="card__code">#{{ data.id }}</div>
              <div class="card__title">{{ data.title }}</div>
              <div class="card__body">{{ data.body }}</div>
              <img
                class="card__image"
                v-show="data.url"
                v-bind:src="data.url"
                alt="Imagen"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <h3>No hay datos</h3>
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
  },
};
</script>
