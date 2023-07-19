<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="We used Remix Icon for Yoda Admin Template" />
    </b-col>

    <b-col cols="12" class="mb-32">
      <b-row>
        <b-col class="hp-flex-none w-auto mb-32">
          <tab-menu :propsTabIndex="{ index }" @tabMenuChange="tabMenu" />
        </b-col>

        <b-col class="hp-icon-search-col mb-32">
          <search @searchChange="search" />
        </b-col>
      </b-row>

      <tab-content :propsSearch="{ searchVal }" :propsTabIndex="{ index }" />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import TabContent from "./TabContent.vue";
import TabMenu from "./TabMenu.vue";
import Search from "./Search.vue";

export default {
  data() {
    return {
      searchVal: "",
      index: 1,
    };
  },
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    TabMenu,
    Search,
    TabContent,
  },
  methods: {
    tabMenu(val) {
      this.index = val;
    },
    search(val) {
      this.searchVal = val;
    },
  },
};
</script>
