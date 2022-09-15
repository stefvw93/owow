<script setup lang="ts">
import { useRoute } from "vue-router";
import { useWizkidById } from "../utils";
import Classified from "../components/Classified.vue";
import Button from "../components/Button.vue";
import { useApiStore } from "../stores/api";

const route = useRoute();
const { authenticated, deleteWizkid, restoreWizkid, fireWizkid, unfireWizkid } =
  useApiStore();
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

        <Classified>
          <div>
            {{ wizkid?.email }}
          </div>
          <div>
            {{ wizkid?.phoneNumber }}
          </div>
        </Classified>
      </div>
    </div>

    <div class="edit">
      <Button is="router-link" :to="`/wizkid/edit/?id=${wizkid?.id}`">
        <font-awesome-icon icon="fa-solid fa-pen-to-square" /> Edit
      </Button>

      <Button
        v-if="authenticated"
        @click="
          wizkid?.isEmployee ? fireWizkid(wizkid?.id) : unfireWizkid(wizkid?.id)
        "
      >
        <font-awesome-icon
          v-if="wizkid?.isEmployee"
          icon="fa-solid fa-face-sad-tear"
        />
        <font-awesome-icon
          v-if="!wizkid?.isEmployee"
          icon="fa-solid fa-face-smile"
        />
        {{ wizkid?.isEmployee ? "Fire!" : "Hire!" }}
      </Button>

      <Button
        @click="
          wizkid?.archived
            ? restoreWizkid(wizkid?.id)
            : deleteWizkid(wizkid?.id)
        "
      >
        <font-awesome-icon
          v-if="wizkid?.archived"
          icon="fa-solid fa-trash-arrow-up"
        />
        <font-awesome-icon v-if="!wizkid?.archived" icon="fa-solid fa-trash" />
        {{ wizkid?.archived ? "Restore" : "Delete" }}
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.edit {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  flex-direction: row-reverse;
  justify-content: end;

  *[type="button"] {
    display: flex;
    gap: 0.5rem;
  }
}

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
