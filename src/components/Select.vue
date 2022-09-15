<script setup lang="ts">
defineProps<{ modelValue?: string }>();
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="select">
    <select
      class="input"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
      v-bind="$attrs"
    >
      <slot />
    </select>

    <div class="icon center">
      <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;

  .icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
