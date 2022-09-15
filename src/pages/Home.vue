<script setup lang="ts">
import { useApiStore } from "../stores/api";
const { wizkids } = useApiStore();
</script>

<template>
  <div>
    <a href="#/create-wizkid">Add a Wizkid</a>
    <pre>{{ wizkids }}</pre>
  </div>
</template>

<style scoped lang="scss"></style>
