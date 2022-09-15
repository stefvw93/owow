<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="root">
    <Navigation />
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.root {
  width: 100%;
  height: 100%;
}
</style>
