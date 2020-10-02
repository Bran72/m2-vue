<template>
  <div 
    class="shooting-star"
    :style="style"
  >
    {{this.$refs.shootingPos}}
  </div>
</template>

<script>
import { randomX, randomY } from "../helpers/random";

export default {
  name: "ShootingStar",
  computed: {
    randomX() {
      return randomX();
    },
    randomY() {
      return randomY();
    },
    style() {
      return `
        top: ${this.randomY}px;
        left: ${this.randomX}px;
      `;
    }
  },
  mounted() {
    console.log('Mounted')
  },
  beforeUpdate() {
    console.log('Update')
  }
};
</script>

<style lang="scss" scoped>
.shooting-star {
  position: absolute;
  background-color: red;
  border-radius: 100%;
  height: 6px;
  width: 6px;
}
</style>

