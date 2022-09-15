<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";

const doShowMenu = ref(false);
const closeMenu = () => (doShowMenu.value = !doShowMenu.value);
</script>

<template>
  <div class="navigation">
    <router-link to="/">Home</router-link>
    <Button @click="closeMenu">Menu</Button>

    <div class="menu" :class="{ hidden: !doShowMenu }">
      <div @click="closeMenu">
        <router-link to="/">Home</router-link>
        <router-link to="/wizkid/create">Add a new Wizkid</router-link>
      </div>

      <div class="close touch-opacity" @click="closeMenu">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  a {
    text-decoration: none;
  }
}

.menu {
  --padding: 4rem;

  position: fixed;
  inset: 0;
  background: var(--white);
  z-index: 999;
  padding: var(--padding);
  transition: opacity 0.2s linear;

  .close {
    position: absolute;
    top: 2rem;
    right: var(--padding);
    font-size: 4rem;
    cursor: pointer;
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  a {
    display: block;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.05em;
    margin: 2rem 0;
    transition: color 0.3s ease-out;

    &:hover {
      transition-duration: 0s;
      color: var(--organic-green);
    }
  }
}
</style>
