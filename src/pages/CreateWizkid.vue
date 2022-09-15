<script setup lang="ts">
import WizkidForm from "../components/WizkidForm.vue";
import { Wizkid } from "../stores/api";
function handleSubmit(data: Wizkid) {
  console.log("submitted!", data);
}
</script>

<template>
  <div class="page">
    <div class="form">
      <WizkidForm @created="handleSubmit" />
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
