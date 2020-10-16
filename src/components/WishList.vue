<template>
  <ul class="wishes-list">
    <li v-for="(wish, wishKey) in wishList" :key="wishKey">
      <span class="wish-author">{{ wish.username }}</span>
      <p class="wish-content">{{ wish.wish }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "WishList",
  props: ['wish'],
  data() {
    return {
      wishList: this.$props.wish,
      userName: this.$props.username,
    };
  }
};
</script>

<style lang="scss" scoped>
.wishes-list {
  position: fixed;
  right: 10%;
  bottom: 5%;
  color: white;
}

.wish-author {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid white;
}

.wish-content {
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed white;
}
</style>
