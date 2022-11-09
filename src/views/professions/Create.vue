<template>
  <div>
    <h1>Cadastrar nova profissão</h1>
    <label for="name">Nome: </label>
    <input type="text" name="name" id="name" v-model="profession.name">
    <button @click="save()">Salvar</button>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import axios from "axios";

import env from "/env.json";

const apiURL = env.apiURL;

const profession = reactive({
  name: "",
});

const save = () => {
  axios
    .post(apiURL + "/profession", profession)
    .then((response) => {
      alert("Dados cadastrados com sucesso!");
    })
    .catch((error) => {
      alert("Erro: " + erro.response.data);
    });
};


</script>

<style lang="scss" scoped></style>
