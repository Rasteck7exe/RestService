import { ref } from "vue"; // Importamos las funciones de Vue
import axios from "axios"; // Importamos la librería axios

// Definimos la función exportable useRest
export function useRest(resource, title, body) {
  // Creamos las variables reactivas que queremos devolver
  const getData = ref(null);
  const postData = ref(null);
  const deleteData = ref(null);

  // Creamos los métodos que queremos usar para hacer las peticiones
  const get = () => {
    // Hacemos la petición GET con axios
    axios
      .get(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => {
        // Asignamos la respuesta a getData
        getData.value = response.data;
      })
      .catch((error) => {
        // Asignamos el error a getData
        getData.value = error;
      });
  };

  const post = () => {
    // Hacemos la petición POST con axios
    axios
      .post(`https://jsonplaceholder.typicode.com/${resource}`, {
        title: title,
        body: body,
      })
      .then((response) => {
        // Asignamos la respuesta a postData
        postData.value = response.data;
      })
      .catch((error) => {
        // Asignamos el error a postData
        postData.value = error;
      });
  };

  const deletePost = () => {
    // Hacemos la petición DELETE con axios
    axios
      .delete(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => {
        // Asignamos la respuesta a deleteData
        deleteData.value = response;
      })
      .catch((error) => {
        // Asignamos el error a deleteData
        deleteData.value = error;
      });
  };

  // Devolvemos las variables reactivas y los métodos como un objeto
  return {
    getData,
    postData,
    deleteData,
    get,
    post,
    deletePost,
  };
}
