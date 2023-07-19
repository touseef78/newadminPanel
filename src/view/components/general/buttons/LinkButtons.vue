<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Link variant</h4>

        <p class="hp-p1-body">
          Variant <code>link</code> will render a button with the appearance of
          a link while maintaining the default padding and size of a button.
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
        <b-button
          variant="link"
          class="mr-8 mb-8 text-primary hp-hover-text-color-primary-3"
          >Primary Button</b-button
        >
        <b-button
          variant="link"
          class="mr-8 mb-8 text-secondary hp-hover-text-color-secondary-3"
          >Secondary Button</b-button
        >
        <b-button
          variant="link"
          class="mr-8 mb-8 text-danger hp-hover-text-color-danger-3"
          >Danger Button</b-button
        >
        <b-button
          variant="link"
          class="mr-8 mb-8 text-info hp-hover-text-color-info-3"
          >Info Button</b-button
        >
        <b-button
          variant="link"
          class="mr-8 mb-8 text-success hp-hover-text-color-success-3"
          >Success Button</b-button
        >
        <b-button
          variant="link"
          class="mr-8 mb-8 text-warning hp-hover-text-color-warning-3"
          >Warning Button</b-button
        >
        <b-button
          variant="link"
          class="mr-8 mb-8 text-black-100 hp-hover-text-color-black-60"
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
      codeText: code.link,
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
