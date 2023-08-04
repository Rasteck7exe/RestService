<template>
  <div class="RestView">
    <h1 class="title">POST</h1>
    <p class="MiddleMain">
      Para hacer una petición POST, introduce el recurso al que quieres enviar
      los datos (posts, comments, albums, etc.), el título y el cuerpo del
      mensaje y pulsa el botón "Enviar".
    </p>
    <form @submit.prevent="post">
      <div>
        <label for="resource">Recurso</label><br />
        <input
          type="text"
          id="resource"
          v-model="resource"
          class="input"
          placeholder="Ejemplo: posts"
          List="Options"
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
      <div>
        <label for="title">Título</label><br />
        <input
          type="text"
          id="title"
          v-model="title"
          class="input"
          placeholder="Ejemplo: Mi primer post"
          required
        />
      </div>
      <div class="form-group">
        <label for="body">Cuerpo</label><br />
        <textarea
          id="body"
          v-model="body"
          class="input"
          placeholder="Ejemplo: Este es el contenido de mi primer post"
          required
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
    <div v-if="postData">
      <h3>Datos enviados</h3>
      <div class="LayoutCards">
        <div class="CardView">
          <div class="Code">#{{ postData.id }}</div>
          <div class="TitleCard">{{ postData.title }}</div>
          <div class="BodyCard">{{ postData.body }}</div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="deleteData">
    <h3>Respuesta de la petición DELETE</h3>

    <div
      class="alert"
      :class="deleteData.status === 200 ? 'alert-success' : 'alert-danger'"
      role="alert"
    >
      {{ deleteData.status }} - {{ deleteData.statusText }}
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PostHttps",
  data() {
    return {
      resource: "",
      title: "",
      body: "",
      postData: null,
    };
  },
  methods: {
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
  },
};
</script>
<style></style>
