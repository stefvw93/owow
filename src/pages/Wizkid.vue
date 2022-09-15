<script setup lang="ts">
import { useRoute } from "vue-router";
import { useWizkidById } from "../utils";
const route = useRoute();
const wizkid = useWizkidById(route.params.id as string);
</script>

<template>
  <div class="page">
    <div class="section">
      <div class="picture center">
        <img :src="wizkid?.picture" alt="Avatar" />
      </div>

      <div class="bio">
        <h1>{{ wizkid?.name }}</h1>
        <hr />
        <h2>{{ wizkid?.role }}</h2>
        <div>
          {{ wizkid?.email }}
        </div>
        <div>
          {{ wizkid?.phoneNumber }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.picture {
  grid-column-start: 1;
  grid-column-end: 5;

  @media (min-width: 1024px) {
    grid-column-end: 4;
  }

  img {
    display: block;
    border-radius: 50%;
    width: 100%;
    aspect-ratio: 1;
  }
}

.bio {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

  grid-column-start: 5;
  grid-column-end: 13;

  @media (min-width: 1024px) {
    gap: 1rem;
    grid-column-start: 4;
  }

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    color: var(--organic-green);
  }

  hr {
    width: 25%;
  }
}
</style>
