<template>
  <b-tabs v-model="propsTabIndex.index" nav-class="d-none">
    <b-tab>
      <b-row class="mb-n32">
        <b-col
          cols="6"
          md="4"
          xl="2"
          :key="'Line' + index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('ri-' + icon + '-line')"
          >
            <i :class="`hp-text-color-dark-0 ri-2x ri-${icon}-line`"></i>
            <p class="hp-badge-text mb-0">{{ icon }}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-tab>

    <b-tab>
      <b-row class="mb-n32">
        <b-col
          cols="6"
          md="4"
          xl="2"
          :key="'All Fill' + index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('ri-' + icon + '-fill')"
          >
            <i :class="`hp-text-color-dark-0 ri-2x ri-${icon}-fill`"></i>
            <p class="hp-badge-text mb-0">{{ icon }}</p>
          </b-card>
        </b-col>

        <b-col
          cols="6"
          md="4"
          xl="2"
          :key="'All Line' + index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('ri-' + icon + '-line')"
          >
            <i :class="`hp-text-color-dark-0 ri-2x ri-${icon}-line`"></i>
            <p class="hp-badge-text mb-0">{{ icon }}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-tab>

    <b-tab>
      <b-row class="mb-n32">
        <b-col
          cols="6"
          md="4"
          xl="2"
          :key="'Fill' + index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('ri-' + icon + '-fill')"
          >
            <i :class="`hp-text-color-dark-0 ri-2x ri-${icon}-fill`"></i>
            <p class="hp-badge-text mb-0">{{ icon }}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BRow, BCol, BCard, BTabs, BTab } from "bootstrap-vue";

import iconData from "./icon.json";

export default {
  props: ["propsSearch", "propsTabIndex"],
  data() {
    return {
      icons: iconData,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BTabs,
    BTab,
  },
  computed: {
    searchFilter() {
      return this.icons.filter((e) => {
        return e
          .toLowerCase()
          .includes(this.propsSearch.searchVal.toLowerCase());
      });
    },
  },
  methods: {
    copyIcon(icon) {
      navigator.clipboard.writeText('<i class="' + icon + '"></i>');
    },
  },
};
</script>
