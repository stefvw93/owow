<script setup lang="ts">
import { Wizkid } from "../stores/api";
import Card from "./Card.vue";

defineProps<{ wizkid: Wizkid }>();
</script>

<template>
  <Card class="wizkid-card">
    <!-- <pre>{{ wizkid }}</pre> -->

    <div class="center">
      <img :src="wizkid.picture" />
    </div>
    <div class="bio">
      <div class="center name">
        <b>
          {{ wizkid.name }}
        </b>
      </div>
      <hr />
      <div class="center role">
        {{ wizkid.role }}
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.wizkid-card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease-out, box-shadow 0.3s ease-out;

  &:hover {
    background: var(--beau-blue);
    box-shadow: 0 0 30px -3px rgba(0, 0, 0, 0.2);
    transition-duration: 0s;
  }

  img {
    display: block;
    border-radius: 50%;
    width: 128px;
    height: 128px;
    border: 1px solid var(--white);
  }

  .bio {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 0.5rem;

    .name {
      font-size: 1.2rem;
    }

    hr {
      width: 25%;
    }
  }

  .role {
    color: var(--organic-green);
  }
}
</style>
