<template>
  <b-row align-v="end" align-h="between" class="row mr-12 ml-24 mt-24">
    <div
      v-if="collapsed"
      class="w-auto px-0 hp-sidebar-collapse-button"
      @click="sidebarCollapsed(false)"
    >
      <b-button
        v-if="this.$store.state.themeConfig.sidebarCollapseButton"
        variant="text"
        class="btn-icon-only"
      >
        <i class="ri-menu-unfold-line" style="font-size: 16px"></i>
      </b-button>
    </div>

    <div class="w-auto px-0">
      <logo v-if="!collapsed" />
      <div v-else class="hp-header-logo">
        <b-link to="/">
          <img
            class="hp-logo"
            v-bind:src="require('@/assets/img/logo/logo-small.svg')"
            alt="logo"
          />
        </b-link>
      </div>
    </div>

    <div
      v-if="!collapsed"
      class="w-auto px-0 hp-sidebar-collapse-button"
      @click="sidebarCollapsed(true)"
    >
      <b-button
        v-if="this.$store.state.themeConfig.sidebarCollapseButton"
        variant="text"
        class="btn-icon-only"
      >
        <i class="ri-menu-fold-line" style="font-size: 16px"></i>
      </b-button>
    </div>
  </b-row>
</template>

<script>
import { BRow, BCol, BButton, BLink } from "bootstrap-vue";
import Logo from "../../logo";

export default {
  props: ["collapsed"],
  components: {
    BRow,
    BCol,
    BButton,
    BLink,
    Logo,
  },
  methods: {
    sidebarCollapsed(check) {
      this.$emit("sidebarCollapsedProps", check);
    },
  },
};
</script>
