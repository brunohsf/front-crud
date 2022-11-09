<template>
  <div>
    <h1>Listar Profissões</h1>
    <hr>
    <table border="1">
      <tr>
        <th>Nome</th>
        <th>Editar</th>
        <th>Excluir</th>
      </tr>
      <tr v-for="p in professions">
        <td>{{ p.name }}</td>
        <td><button>Editar</button></td>
        <td><button>Excluir</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import env from "/env.json";

const apiURL = env.apiURL;

const professions = ref([]);

const findAll = () => {
  axios
    .get(apiURL + "/profession")
    .then((response) => {
      professions.value = response.data;
    })
    .catch((error) => {
      alert("Erro: " + error.response.data);
    });
};

onMounted(() => {
  findAll();
});
</script>

<style lang="scss" scoped></style>
