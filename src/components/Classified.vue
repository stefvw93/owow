<script setup lang="ts">
import { useApiStore } from "../stores/api";
import Button from "./Button.vue";
const { authenticated } = useApiStore();
</script>

<template>
  <slot v-if="authenticated" />
  <Button v-else> Log in to view this content </Button>
</template>
