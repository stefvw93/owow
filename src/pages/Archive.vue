<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useApiStore } from "../stores/api";

const { wizkids } = useApiStore();
const fired = computed(() => wizkids.filter((e) => !e.isEmployee));
const archived = computed(() => wizkids.filter((e) => !!e.archived));
</script>

<template>
  <div class="page">
    <template v-if="!!archived.length">
      <h2>Archive</h2>
      <router-link
        v-for="wizkid of archived"
        :key="wizkid.id"
        :to="`/wizkid/${wizkid.id}`"
      >
        {{ wizkid.name }}
      </router-link>
    </template>

    <template v-if="!!fired.length">
      <h2>Fired</h2>
      <router-link
        v-for="wizkid of fired"
        :key="wizkid.id"
        :to="`/wizkid/${wizkid.id}`"
      >
        {{ wizkid.name }}
      </router-link>
    </template>
  </div>
</template>
