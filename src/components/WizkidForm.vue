<script setup lang="ts">
import { reactive } from "vue";
import { useApiStore, Wizkid, WizkidRole } from "../stores/api";
import TextInput from "./TextInput.vue";
import Button from "./Button.vue";
import PictureUpload from "./PictureUpload.vue";
import Select from "./Select.vue";

const emit = defineEmits(["created"]);
const { createWizkid } = useApiStore();
const roles: WizkidRole[] = ["boss", "developer", "designer", "intern"];
const formData = reactive<Partial<Wizkid>>({});

async function handleSubmit() {
  await createWizkid(formData as Wizkid);
  emit("created", formData);
}
</script>

<template>
  <form class="wizkid-form" @submit.prevent="handleSubmit">
    <TextInput
      type="text"
      v-model="formData.name"
      placeholder="naam"
      required
    />
    <TextInput
      type="email"
      v-model="formData.email"
      placeholder="you@mail.com"
      required
    />
    <TextInput
      type="tel"
      v-model="formData.phoneNumber"
      placeholder="+31 x xx xx xx xx"
      required
    />
    <Select v-model="formData.role" placeholder="role" required>
      <option v-for="role in roles" :value="role">
        {{ role }}
      </option>
    </Select>
    <div class="center">
      <PictureUpload v-model="formData.picture" />
    </div>
    <Button type="submit">Opslaan</Button>
  </form>
</template>

<style scoped lang="scss">
.wizkid-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
}
</style>
