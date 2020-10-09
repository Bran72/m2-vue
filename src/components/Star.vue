<script>
import { randomX, randomY } from "../helpers/random";

// define a mixin object
let Star = {
  data() {
    return {
      top: randomX(),
      left: randomY()
    }
  },
  created: function () {
    console.log('hello from mixin!')
  },
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
  }
}

export default Star
</script>
