<script setup lang="ts">
import Router from "./components/Router.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="root">
    <Navigation />
    <Router />
  </div>
</template>

<style scoped lang="scss">
.root {
  width: 100%;
  height: 100%;
}
</style>
