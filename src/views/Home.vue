<template>
  <div>
    <h2>Página inicial</h2>
    <hr />
    <ul>
      <li>
        Profissões
        <ul>
          <li><router-link to="/professions">Início</router-link></li>
          <li><router-link to="/professions/create">Cadastrar</router-link></li>
        </ul>
      </li>
    </ul>
    <roouter-view></roouter-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>