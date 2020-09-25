<template>
  <div id="app">
    <div class="moon"></div>
    <span v-for="star in stars" class="star" :style="{ left: star.x+'px', top: star.y+'px' }"></span>
  </div>
</template>

<script>
import {randomX, randomY} from "@/helpers/random";

export default {
  name: "app",
  data () {
    return {
      nb_stars: 0,
      stars: []
    }
  },
  mounted() {
    for (let i = 0; i < 100; i++) {
      let new_star = {x: randomX(), y: randomY()}
      this.stars.push(new_star)
    }
    console.log(this.stars)
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

.moon {
  position: absolute;
  height: 100px;
  width: 100px;
  background-image: url("https://3dexport.com/items/2015/02/20/385337/100201/moon_texture_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1258985_o.png");
  background-size: cover;
  box-shadow: 0px 0px 12px 4px white;
  filter: brightness(1.5);
  z-index: 1;
  right: 10%;
  top: 15%;
  border-radius: 100px;
}
</style>
