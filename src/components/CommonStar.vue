<template>
  <div 
    class="star"
    :style="style"
  >

  </div>
</template>

<script>
import Star from "@/components/Star";

export default {
  name: "CommonStar",
  data() {
    return {
      message: 'bye'
    }
  },
  mixins: [Star],
  computed: {
    randomRadius() {
      return Math.round(Math.random() * Math.round(4));
    },
    style() {
      return `
        top: ${this.$data.randomY}px;
        left: ${this.$data.randomY}px;
        height: ${this.randomRadius}px;
        width: ${this.randomRadius}px;
      `;
    }
  },
  mounted() {
    console.log(this.$data)
  }
};
</script>

<style lang="scss" scoped>
.star {
  position: absolute;
  background-color: white;
  border-radius: 100%;
}
</style>

