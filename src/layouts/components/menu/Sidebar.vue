<template>
  <div class="hp-sidebar hp-bg-color-black-0 hp-bg-color-dark-100">
    <div class="hp-sidebar-container">
      <div class="hp-sidebar-header-menu">
        <sidebar-header v-if="header" :collapsed="storeSidebarCollapsed" @sidebarCollapsedProps="sidebarCollapsed" />

        <ul>
          <sidebar-item :collapsed="storeSidebarCollapsed" :key="index" v-for="(item, index) in sidebarItems"
            :item="item" />
        </ul>
      </div>

      <sidebar-footer :collapsed="storeSidebarCollapsed" />
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BAvatar, BButton, BLink } from "bootstrap-vue";

import navigation from "../../../navigation/index";
import SidebarHeader from "./header";
import SidebarItem from "./item";
import SidebarFooter from "./footer";
import SidebarJs from "@/utils/sidebar-collapse-dropdown.js";

export default {
  props: {
    header: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  data() {
    return {
      sidebarItems: navigation,
    };
  },
  components: {
    BRow,
    BCol,
    BAvatar,
    BButton,
    BLink,
    SidebarHeader,
    SidebarItem,
    SidebarFooter,
  },
  computed: {
    storeSidebarCollapsed() {
      return this.$store.state.themeConfig.sidebarCollapsed;
    },
  },
  methods: {
    sidebarCollapsed(check) {
      if (check) {
        this.$store.state.themeConfig.sidebarCollapsed = true;
      } else {
        this.$store.state.themeConfig.sidebarCollapsed = false;
      }

      document.body.classList.toggle("collapsed-active");
    },
  },
  mounted() {
    SidebarJs.sidebarCollapseDropdown();
  },
};
</script>
