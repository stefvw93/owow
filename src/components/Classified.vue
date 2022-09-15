<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useApiStore } from "../stores/api";
import Button from "./Button.vue";
const { authenticated } = useApiStore();
const route = useRoute();
const router = useRouter();
</script>

<template>
  <slot v-if="authenticated" />
  <Button v-else is="router-link" :to="`/login/?continue=${route.fullPath}`">
    Log in to view this content
  </Button>
</template>
