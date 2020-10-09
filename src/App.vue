<template>
  <div id="app">
    <Pseudo v-if="!pseudo" @hasPseudo="checkPseudo" :class="pseudo ? 'hiddenModal' : ''" />

    <Moon />
    <transition-group name="fade">
      <common-star 
        v-for="star in totalStars"
        :key="star"
      />
    </transition-group>
    <shooting-star 
      v-if="isShootingStarVisible"
    />

    <p v-if="pseudo" class="userPseudo">Bienvenue {{ pseudo }} !</p>
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
import Pseudo from "@/components/Modal/ModalPseudo";
import CommonStar from "@/components/Common-star";
import ShootingStar from "@/components/Shooting-star";
import Moon from "@/components/Moon";
import LoginModal from "@/components/Login-modal";

export default {
  name: "app",
  components: {
    Pseudo,
    CommonStar,
    ShootingStar,
    Moon,
    LoginModal
  },
  data() {
    return {
      pseudo: '',
      totalStars: 200,
      isShootingStarVisible: true
    };
  },
  methods: {
    checkPseudo(pseudo) {
      this.pseudo = pseudo
      console.log(pseudo)
    }
  },
  mounted() {
    setInterval(() => {
      this.isShootingStarVisible = !this.isShootingStarVisible;
    }, 6000);
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

/* Transitions */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.userPseudo {
  color: aqua;
  margin: 0;
  padding: 2rem 0 1rem;
}
</style>
