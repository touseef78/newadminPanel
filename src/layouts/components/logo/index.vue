<template>
  <div class="hp-header-logo d-flex align-items-end">
    <b-link to="/">
      <img
        v-if="this.$store.state.themeConfig.theme == 'light'"
        class="hp-logo"
        v-bind:src="require('@/assets/img/logo/logo.svg')"
        alt="logo"
      />
      <img
        v-else-if="this.$store.state.themeConfig.theme == 'dark'"
        class="hp-logo"
        v-bind:src="require('@/assets/img/logo/logo-dark.svg')"
        alt="logo"
      />
    </b-link>

    <a
      href="https://hypeople-studio.gitbook.io/yoda/change-log"
      target="_blank"
      class="d-flex"
    >
      <span class="h3 font-weight-bold hp-text-color-primary-1 mb-6"> . </span>
      <span
        class="hp-p1-body font-weight-medium hp-text-color-black-40 mb-16 ml-4"
        style="letter-spacing: -0.5px"
      >
        v.{{ this.$store.state.themeConfig.version }}
      </span>
    </a>
  </div>
</template>

<script>
import { BRow, BCol, BButton, BLink } from "bootstrap-vue";

export default {
  components: {
    BLink,
  },
};
</script>
