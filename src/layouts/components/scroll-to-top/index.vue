<template>
  <div :class="`scroll-to-top${active ? ' active' : ''}`" @click="handleClick">
    <b-button
      variant="primary"
      class="btn-icon-only rounded-circle hp-primary-shadow"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="16px"
        width="16px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
          ></path>
        </g>
      </svg>
    </b-button>
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  data() {
    return {
      active: false,
    };
  },
  components: {
    BButton,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      if (window.scrollY > window.innerHeight / 3) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
};
</script>
