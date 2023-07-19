<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Text Buttons</h4>

        <p class="hp-p1-body">There are text button in Yoda.</p>
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
        <b-button
          variant="text"
          class="mr-8 mb-8 text-primary hp-hover-bg-primary-4 hp-hover-bg-dark-primary"
          >Primary Button</b-button
        >
        <b-button
          variant="text"
          class="mr-8 mb-8 text-secondary hp-hover-bg-secondary-4 hp-hover-bg-dark-secondary"
          >Secondary Button</b-button
        >
        <b-button
          variant="text"
          class="mr-8 mb-8 text-danger hp-hover-bg-danger-4 hp-hover-bg-dark-danger"
          >Danger Button</b-button
        >
        <b-button
          variant="text"
          class="mr-8 mb-8 text-info hp-hover-bg-info-4 hp-hover-bg-dark-info"
          >Info Button</b-button
        >
        <b-button
          variant="text"
          class="mr-8 mb-8 text-success hp-hover-bg-success-4 hp-hover-bg-dark-success"
          >Success Button</b-button
        >
        <b-button
          variant="text"
          class="mr-8 mb-8 text-warning hp-hover-bg-warning-4 hp-hover-bg-dark-warning"
          >Warning Button</b-button
        >
        <b-button
          variant="text"
          class="mr-8 mb-8 text-black-100 hp-hover-bg-black-10 hp-hover-bg-dark-80 hp-hover-text-color-dark-0"
          >Dark Button</b-button
        >
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
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.text,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
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
