<template>
  <div id="app">
    <transition name="fade">
      <Modal
        type="pseudo"
        v-if="!isLoggedIn"
        @onSubmitInput="setLogin"
      />
    </transition>
    <transition name="fade">
      <Modal
          type="voeux"
          v-if="isShootingStarVisible && isLoggedIn"
          @onSubmitInput="setVoeux"
      />
    </transition>

    <WishList
        :wish="userListVoeux"
    />

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

    <p v-if="isLoggedIn" style="padding: 2rem 0 1rem; margin: 0; color: white">Hello {{ userName }} !</p>
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
import CommonStar from "@/components/Common-star";
import ShootingStar from "@/components/Shooting-star";
import Moon from "@/components/Moon";
import Modal from "@/components/Modal/Modal";
import WishList from "@/components/WishList";

export default {
  name: "app",
  components: {
    Modal,
    CommonStar,
    ShootingStar,
    Moon,
    WishList
  },
  data() {
    return {
      userName: '',
      userVoeux: '',
      userListVoeux: [],
      totalStars: 200,
      isShootingStarVisible: true
    };
  },
  computed: {
    isLoggedIn() {
      return this.userName;
    }
  },
  methods: {
    setLogin(userName) {
      this.userName = userName;
      localStorage.setItem("userName", userName);
    },
    setVoeux(userVoeux) {
      const wish = userVoeux.trim()
      this.userVoeux = wish

      if(wish !== '') this.userListVoeux.push({'username': this.userName, 'wish': wish})

      localStorage.setItem("userListVoeux", JSON.stringify(this.userListVoeux));
    }
  },
  mounted() {
    setInterval(() => {
      this.isShootingStarVisible = !this.isShootingStarVisible;
    }, 6000);
  },
  created() {
    const userName = localStorage.getItem("userName");
    const userListVoeux = JSON.parse(localStorage.getItem("userListVoeux"));

    if (userName) this.userName = userName;
    if (userListVoeux && userListVoeux.length >= 1) {
      this.userListVoeux = userListVoeux;
    }
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
</style>
