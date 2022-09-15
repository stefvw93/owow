<script setup lang="ts">
import Router from "./components/Router.vue";
</script>

<template>
  <div class="root">
    <Router />
  </div>
</template>

<style scoped lang="scss">
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
