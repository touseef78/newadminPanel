<template>
  <b-tabs v-model="propsTabIndex.index" nav-class="d-none">
    <b-tab>
      <b-row class="mb-n32">
        <b-col
          cols="6"
          md="4"
          xl="2"
          :key="'Light' + index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('iconly-Light-' + icon)"
          >
            <i :class="'hp-text-color-dark-0 iconly-Light-' + icon"></i>
            <p class="hp-badge-text mb-0">{{ icon }}</p>
          </b-card>
        </b-col>

        <b-col
          cols="6"
          md="4"
          xl="2"
          :key="'Curved' + index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('iconly-Curved-' + icon)"
          >
            <i :class="'hp-text-color-dark-0 iconly-Curved-' + icon"></i>
            <p class="hp-badge-text mb-0">{{ icon }}</p>
          </b-card>
        </b-col>

        <b-col
          cols="6"
          md="4"
          xl="2"
          :key="'Broken' + index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('iconly-Broken-' + icon)"
          >
            <i :class="'hp-text-color-dark-0 iconly-Broken-' + icon"></i>
            <p class="hp-badge-text mb-0">{{ icon }}</p>
          </b-card>
        </b-col>

        <b-col
          cols="6"
          md="4"
          xl="2"
          :key="'Bold' + index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('iconly-Bold-' + icon)"
          >
            <i :class="'hp-text-color-dark-0 iconly-Bold-' + icon"></i>
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
          :key="index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('iconly-Light-' + icon)"
          >
            <i :class="'hp-text-color-dark-0 iconly-Light-' + icon"></i>
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
          :key="index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('iconly-Curved-' + icon)"
          >
            <i :class="'hp-text-color-dark-0 iconly-Curved-' + icon"></i>
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
          :key="index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('iconly-Broken-' + icon)"
          >
            <i :class="'hp-text-color-dark-0 iconly-Broken-' + icon"></i>
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
          :key="index"
          v-for="(icon, index) in searchFilter"
          class="mb-32"
        >
          <b-card
            class="border-0 text-center hp-icon-card"
            body-class="py-32"
            @click="copyIcon('iconly-Bold-' + icon)"
          >
            <i :class="'hp-text-color-dark-0 iconly-Bold-' + icon"></i>
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
