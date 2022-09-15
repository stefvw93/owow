<script setup lang="ts">
import { ref, computed } from "vue";
import CreateWizkid from "../pages/CreateWizkid.vue";
import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";

const routes: Record<string, any> = {
  "/": Home,
  "/create-wizkid": CreateWizkid,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(
  () => routes[currentPath.value.slice(1) || "/"] || NotFound
);
</script>

<template>
  <component :is="currentView" />
</template>
