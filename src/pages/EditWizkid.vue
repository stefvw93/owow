<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import WizkidForm from "../components/WizkidForm.vue";
import { Wizkid } from "../stores/api";
import { useWizkidById } from "../utils";

const router = useRouter();
const route = useRoute();
const defaultData = useWizkidById(route.query.id as string);

function handleSubmit(data: Wizkid) {
  router.push(`/wizkid/${data.id}`);
}
</script>

<template>
  <div class="page">
    <div class="form">
      <WizkidForm :default-data="defaultData" @created="handleSubmit" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.form {
  flex: 1fr;
  width: 100%;
  max-width: 800px;
  margin-inline: auto;
}
</style>
