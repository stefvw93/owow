<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useApiStore } from "../stores/api";
import Button from "./Button.vue";
const { authenticated } = useApiStore();
const route = useRoute();
const router = useRouter();

function goToLogin() {
  router.push({
    path: "/login",
    query: { continue: route.fullPath },
  });
}
</script>

<template>
  <slot v-if="authenticated" />
  <Button v-else @click="goToLogin"> Log in to view this content </Button>
</template>
