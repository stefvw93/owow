<script setup lang="ts"></script>

<template>
  <button class="button center touch-opacity" type="button" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  background: var(--vivid-burgundy);
  padding: 1rem;
  border: 2px solid var(--vivid-burgundy);
  border-radius: 0.5rem;
  color: white;
  font-weight: bolder;
  cursor: pointer;

  /* reset */
  appearance: none;
  border: none;
  outline: none;
}
</style>
