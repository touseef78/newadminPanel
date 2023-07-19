<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <b-row align-h="between" class="mt-n32">
        <b-col class="hp-flex-none w-auto mt-32">
          <breadcrumb />
        </b-col>

        <action-button />
      </b-row>
    </b-col>

    <b-col cols="12" class="mb-32">
      <h1 class="mb-0">Hello! How can we help you?</h1>
      <h5 class="mb-0 text-black-80 hp-text-color-dark-30">
        or choose a category to quickly find the help you need.
      </h5>
    </b-col>

    <search />

    <tab-menu :propsTabIndex="{ index }" @tabMenuChange="tabMenu" />

    <tab-content :propsTabIndex="{ index }" />
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import ActionButton from "@/layouts/components/content/action-button/ActionButton.vue";
import TabMenu from "./TabMenu.vue";
import TabContent from "./TabContent.vue";
import Search from "./Search.vue";

export default {
  data() {
    return {
      index: 0,
    };
  },
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    ActionButton,
    Search,
    TabMenu,
    TabContent,
  },
  methods: {
    tabMenu(val) {
      this.index = val;
    },
  },
};
</script>
