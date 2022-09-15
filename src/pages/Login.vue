<script setup lang="ts">
import TextInput from "../components/TextInput.vue";
import Button from "../components/Button.vue";
import { useApiStore } from "../stores/api";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const { login } = useApiStore();
const loading = ref(false);

async function handleSubmit() {
  loading.value = true;
  await login();
  loading.value = false;
  router.push((route.query.continue as string) || "/");
}
</script>

<template>
  <div class="page center">
    <form :disabled="loading" @submit.prevent="handleSubmit">
      <TextInput type="email" required />
      <TextInput type="password" required />
      <Button type="submit">{{ loading ? "..." : "Log in" }}</Button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.page {
  form {
    display: grid;
    gap: 1rem;
    max-width: 400px;
    width: 100%;
  }
}
</style>
