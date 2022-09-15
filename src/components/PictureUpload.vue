<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { ref, watch } from "vue";
import { sleep } from "../utils";
import Button from "./Button.vue";

defineProps<{ modelValue?: string }>();
const emit = defineEmits(["update:modelValue"]);

const isLoading = ref(false);
const picture = ref<string>();

async function handleUpload() {
  if (!!picture.value) return;
  isLoading.value = true;
  await sleep(300);
  isLoading.value = false;
  picture.value = faker.image.avatar();
}

watch([picture], () => {
  emit("update:modelValue", picture.value);
});
</script>

<template>
  <button
    type="button"
    class="picture-upload center touch-opacity"
    :disabled="isLoading"
    @click="handleUpload"
  >
    <span v-if="!picture">
      {{ isLoading ? "..." : "Upload a picture" }}
    </span>

    <div v-if="!!picture" class="preview">
      <img :src="picture" alt="Avatar" />
      <div class="icon center touch-opacity" @click.stop="picture = undefined">
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </div>
    </div>
  </button>
</template>

<style scoped lang="scss">
.picture-upload {
  --size: 120px;
  display: block;
  height: var(--size);
  width: calc(var(--size) * 2);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--beau-blue);
  border-radius: 0.5rem;
  padding: 1rem;

  /* reset */
  user-select: none;
  appearance: none;
  border: none;
  outline: none;

  .preview {
    height: 100%;
    aspect-ratio: 1;
    position: relative;

    .icon,
    img {
      position: absolute;
    }

    .icon {
      top: 0.25rem;
      right: 0.25rem;
      border-radius: 0.25rem;
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
      background: var(--white);
    }

    img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      background: var(--white);
    }
  }
}
</style>
