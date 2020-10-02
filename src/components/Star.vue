<template>
  <div
      class="star"
      :style="starStyle"
  ></div>
</template>

<script>
import { randomX, randomY } from "./../helpers/random";

export default {
  name: "Star",
  data() {
    return {
    }
  },
  computed: {
    posX() {
      return randomX();
    },
    posY() {
      return randomY();
    },
    starStyle() {
      return (`
        top: ${this.posY}px;
        right: ${this.posX}px;
      `)
    }
  }
}
</script>

<style scoped>

</style>