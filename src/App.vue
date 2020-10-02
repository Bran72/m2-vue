<template>
  <div id="app">
    <Moon />

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
      max="500"
      v-model.number="totalStars"
    />
  </div>
</template>

<script>
import Moon from "@/components/Moon";
import Star from "@/components/Star";

export default {
  name: "app",
  components: {
    Moon, Star
  },
  data() {
    return {
      totalStars: 200
    };
  },
  methods: {
  }
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

.star {
  position: absolute;
  background-color: white;
  border-radius: 100%;
  height: 4px;
  width: 4px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 1.25s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: all 1.25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>
