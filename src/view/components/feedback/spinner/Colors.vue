<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Colors</h4>

        <p class="hp-p1-body">
          Spinners use <code>currentColor</code> for their color, meaning it
          inherits the current font color. You can customize the color using the
          standard text color variants using the <code>variant</code> prop, or
          place classes or styles on the component to change its color. The
          <code>variant</code> prop translates the variant name to the Bootstrap
          v4 class <code>.text-{variant}</code>, so if you have custom defined
          text color variants, feel free to use them via the
          <code>variant</code> prop.
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

      <div class="col-12 mt-16">
        <div class="d-flex flex-wrap">
          <b-spinner
            v-for="variant in variants"
            :key="variant"
            :variant="variant"
            class="mr-16 mb-16"
          />
        </div>
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
import { BRow, BCol, BCard, BButton, BSpinner } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      variants: [
        "primary",
        "secondary",
        "danger",
        "warning",
        "success",
        "info",
        "light",
        "dark",
      ],
      codeText: code.colors,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BSpinner,
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
