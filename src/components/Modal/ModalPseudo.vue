<template>
  <div id="open-modal" class="modal-window">
    <div>
      <h1>👋 Hello Moussaillon ! 👋</h1>
      <div>Bienvenue sur une petite app qui va te permettre de générer pleins de jolies petites étoiles 🌟 !</div>
      <div><small>Saisit ton pseudo, stp 🥸</small></div>

      <input type="text" name="pseudo" v-model="pseudo" required>
      &nbsp;
      <input type="submit" @click="emitPseudo">
    </div>
  </div>
</template>

<script>
export default {
  name: "Pseudo",
  data() {
    return {
      pseudo: ''
    }
  },
  methods: {
    emitPseudo() {
      console.log(this.pseudo)
      if(this.pseudo.trim() !== '') this.$emit('hasPseudo', this.pseudo)
      else alert('Non mais choisit un pseudo roh, ce n\'est pas compliqué !!! 😡😤')
    }
  },
  mounted() {
    if(localStorage.pseudo) {
      this.pseudo = localStorage.pseudo
      this.emitPseudo()
    }
  },
  watch: {
    pseudo(newPseudo) {
      if(newPseudo.trim() !== '') localStorage.pseudo = newPseudo;
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-window {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  &>div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
}

/* Demo Styles */

html,
body {
  height: 100%;
}

body {
  font: 600 18px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  background-image: linear-gradient(to right,#7f53ac 0,#657ced 100%);
  color: black
}

a {
  color: inherit;
}

.container {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

small {
  color: #aaa;
}

.btn {
  background-color: #fff;
  padding: 1em 1.5em;
  border-radius: 3px;
  text-decoration: none;
  i {
    padding-right: 0.3em;
  }
}
</style>