<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Basic</h4>

        <p class="hp-p1-body">
          Badges scale to match the size of the immediate parent element by
          using relative font sizing and <code>em</code> units.
        </p>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <b-button
          @click="codeClick()"
          variant="text"
          class="btn-icon-only show-code-btn"
        >
          <i
            class="ri-code-s-slash-line hp-text-color-black-80 hp-text-color-dark-30 lh-1"
            style="font-size: 16px"
          ></i>
        </b-button>
      </b-col>
    </b-row>

    <b-row>
      <div class="col-12 mt-16">
        <h1 class="d-flex align-items-center">Example heading <b-badge variant="primary" class="ml-16 h3 mb-0">New</b-badge></h1>
        <h2 class="d-flex align-items-center">Example heading <b-badge variant="primary" class="ml-16 h4 mb-0">New</b-badge></h2>
        <h3 class="d-flex align-items-center">Example heading <b-badge variant="primary" class="ml-16 h5 py-4 px-12 mb-0">New</b-badge></h3>
        <h4 class="d-flex align-items-center">Example heading <b-badge variant="primary" class="ml-16">New</b-badge></h4>
        <h5 class="d-flex align-items-center">Example heading <b-badge variant="primary" class="ml-16 hp-caption py-0 px-8">New</b-badge></h5>
        <h6 class="d-flex align-items-center">Example heading <b-badge variant="primary" class="ml-16 hp-input-description py-4 px-8">New</b-badge></h6>
      </div>

      <div
        v-if="codeActive"
        class="col-12 mt-24 hljs-container"
        :class="{ active: codeActiveClass }"
      >
        <pre v-highlightjs>
          <code class="hljs html">
            {{ codeText }}
          </code>
        </pre>
      </div>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BButton, BBadge } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.basic,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BBadge,
  },
  methods: {
    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
