<template>
  <div 
    class="star shooting-star"
    ref="shootingStar"
    :style="style"
  >
  </div>
</template>

<script>
import { randomX, randomY } from "../helpers/random";

export default {
  name: "Star",
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
  methods: {
  },
  mounted() {
    console.log('mounted')
    console.log(this.$refs.shootingStar.classList)
    this.$refs.shootingStar.classList = this.$refs.shootingStar.classList.value + ' launchingStar'
    this.$refs.shootingStar.style.top = '0'
    console.log(this.$refs.shootingStar.classList)

  }
};
</script>

<style lang="scss" scoped>
:root {
  --translate-x: 0px;
  --translate-y: 0px;
}

.star {
  position: absolute;
  background-color: red;
  border-radius: 100%;
  height: 60px;
  width: 60px;
  margin-left: 0;
  transition: all 2s ease-in-out;

  &.launchingStar {
    transform: translate(200px);
  }

}
</style>

