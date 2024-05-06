<template>
  <HeaderView />
  <router-view />
</template>

<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import HeaderView from "./components/HeaderView.vue";
</script>

<style>
@import "/src/assets/global.css"
</style>
