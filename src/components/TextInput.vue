<script setup lang="ts">
defineProps<{ modelValue?: string }>();
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="text-input">
    <input
      class="input"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      v-bind="$attrs"
    />
  </div>
</template>

<style scoped lang="scss">
.text-input {
}
</style>
