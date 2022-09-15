<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
  <Card class="wizkid-card" v-bind="$attrs">
    <div class="center avatar">
      <font-awesome-icon icon="fa-solid fa-user-astronaut" />
      <font-awesome-icon icon="fa-solid fa-plus" />
    </div>

    <div class="bio">
      <div class="center name">
        <b> Add a new Wizkid </b>
      </div>
      <hr />
      <div class="center role">A new trooper for OWOW!</div>
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
  position: relative;
  text-decoration: none;
  box-shadow: none;
  border: 1px solid var(--middle-blue);

  &:hover {
    background: var(--middle-blue);
    transition-duration: 0s;
  }

  .avatar {
    display: flex;
    gap: 0.5rem;
    border-radius: 50%;
    width: 128px;
    height: 128px;
    border: 1px solid var(--white);
    background: var(--white);
    color: var(--hookers-green);
    font-size: 50px;
  }

  .bio {
    width: 100%;
    .name {
      font-size: 1.2rem;
    }

    hr {
      border: none;
      width: 25%;
      height: 1px;
      background: black;
    }
  }

  .role {
    color: var(--hookers-green);
  }
}
</style>
