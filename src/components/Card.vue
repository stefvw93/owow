<script setup lang="ts"></script>

<template>
  <component class="card" :is="$attrs.is || 'div'" v-bind="$attrs">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 1.5rem;
  background: var(--white);
  box-shadow: 0 0 30px -3px rgba(0, 0, 0, 0.2);
}
</style>
