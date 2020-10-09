<template>
  <div :class="['modal_'+type, 'modal']">
    <h2>Entrez votre {{ typeModal }} :</h2>
    <form>
      <input
        type="text"
        v-model="input"
        @keypress.enter="submitInput"
      >
      <input
        type="submit"
        @click.prevent="submitInput"
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['type'],
  data() {
    return {
      typeModal: this.$props.type,
      input: ""
    };
  },
  methods: {
    submitInput() {
      this.$emit("onSubmitInput", this.input);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 50%;
  z-index: 2;
}
.modal_pseudo {
  max-width: 400px;
  top: calc(50% - 4rem);
  height: 8rem;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 6px 0 rgb(61, 61, 61);
}

.modal_voeux {
  position: absolute;
  top: 1rem;
  right: 1rem;
  left: unset;
  max-width: 200px;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 6px 0 rgb(61, 61, 61);
  h2 {
    font-size: 1rem;
  }
}
</style>

