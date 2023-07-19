<template>
  <b-col cols="12" class="mb-32">
    <div class="hp-faq-tabs bg-white hp-bg-dark-100 rounded py-12 px-24">
      <b-nav pills class="hp-overflow-x-auto flex-nowrap">
        <b-nav-item
          class="mr-4 d-flex align-items-center"
          :link-classes="`py-4${propsTabIndex.index == index ? ' active': ''}`"
          :key="index"
          v-for="(item, index) in data"
          @click="tabMenu(index)"
        >
          <span class="d-flex align-items-center text-black-100 hp-text-color-dark-0 hp-transition">
            <i
              class="text-black-80 hp-transition mr-12"
              :class="item.icon"
              style="font-size: 20px"
            ></i>

            {{ item.title }}
          </span>
        </b-nav-item>
      </b-nav>
    </div>
  </b-col>
</template>

<script>
import { BCol, BNav, BNavItem } from "bootstrap-vue";

import dataJson from "./data.json";

export default {
  props: ["propsTabIndex"],
  data() {
    return {
      data: dataJson,
    };
  },
  components: {
    BCol,
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
