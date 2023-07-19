<template>
  <div
    class="bg-white hp-bg-dark-100 border border-black-60 hp-border-color-dark-80 rounded overflow-hidden h-100"
  >
    <b-nav
      pills
      class="h-100 align-items-center hp-overflow-x-auto flex-nowrap"
    >
      <b-nav-item
        @click="tabMenu(0)"
        class="h-100"
        :link-classes="`d-block rounded-0 py-12 px-24 h-100 d-flex align-items-center  ${
          this.propsTabIndex.index == 0 ? 'active' : 'text-black-100 hp-text-color-dark-0'
        }`"
      >
        Line
      </b-nav-item>

      <b-nav-item
        @click="tabMenu(1)"
        class="h-100 border-left border-black-60 hp-border-color-dark-80"
        :link-classes="`d-block rounded-0 py-12 px-24 h-100 d-flex align-items-center  ${
          this.propsTabIndex.index == 1 ? 'active' : 'text-black-100 hp-text-color-dark-0'
        }`"
      >
        All
      </b-nav-item>

      <b-nav-item
        @click="tabMenu(2)"
        class="h-100 border-left border-black-60 hp-border-color-dark-80"
        :link-classes="`d-block rounded-0 py-12 px-24 h-100 d-flex align-items-center  ${
          this.propsTabIndex.index == 2 ? 'active' : 'text-black-100 hp-text-color-dark-0'
        }`"
      >
        Fill
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { BNav, BNavItem } from "bootstrap-vue";

export default {
  props: ["propsTabIndex"],
  components: {
    BNav,
    BNavItem,
  },
  methods: {
    tabMenu(val) {
      this.$emit("tabMenuChange", val);
    },
  },
};
</script>
