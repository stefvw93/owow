<script setup lang="ts">
import { useApiStore } from "../stores/api";
import WizkidCard from "../components/WizkidCard.vue";
const { wizkids } = useApiStore();
</script>

<template>
  <a href="#/create-wizkid">Add a Wizkid</a>

  <div class="wizkids-overview">
    <WizkidCard
      v-for="wizkid in wizkids"
      :key="wizkid.id"
      class="card"
      :wizkid="wizkid"
    />
  </div>
</template>

<style scoped lang="scss">
.wizkids-overview {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  padding: 1rem;
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  aspect-ratio: 4 / 3;
}
</style>
