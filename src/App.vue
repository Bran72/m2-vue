<template>
  <div id="app">
    <Moon />
    <transition name="fade">
    <ShootingStar
      v-if="visible"
    />
    </transition>

    <transition-group name="fade">
      <Star 
        v-for="star in totalStars"
        :key="star"
      />
    </transition-group>
    <input 
      type="range"
      name="stars" 
      min="10"
      max="600"
      v-model.number="totalStars"
    />
  </div>
</template>

<script>
import Moon from "@/components/Moon";
import Star from "@/components/Star";
import ShootingStar from "@/components/ShootingStar";

export default {
  name: "app",

  components: {
    Moon, Star, ShootingStar
  },
  data() {
    return {
      totalStars: 200,
      visible: false
    };
  },
  mounted() {
    setInterval(() => {
      this.visible = !this.visible
    },2000);
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
