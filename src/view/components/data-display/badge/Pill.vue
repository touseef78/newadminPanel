<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Pill badges</h4>

        <p class="hp-p1-body">
          Use the <code>pill</code> prop to make badges more rounded (with a larger
          border-radius and additional horizontal padding). Useful if you miss
          the badges from Bootstrap v3.
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
        <b-badge class="mb-8 mr-8" pill variant="primary">Primary</b-badge>
        <b-badge class="mb-8 mr-8" pill variant="secondary">Secondary</b-badge>
        <b-badge class="mb-8 mr-8" pill variant="success">Success</b-badge>
        <b-badge class="mb-8 mr-8" pill variant="danger">Danger</b-badge>
        <b-badge class="mb-8 mr-8" pill variant="warning">Warning</b-badge>
        <b-badge class="mb-8 mr-8" pill variant="info">Info</b-badge>
        <b-badge class="mb-8 mr-8" pill variant="light">Light</b-badge>
        <b-badge class="mb-8 mr-8" pill variant="dark">Dark</b-badge>
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
      codeText: code.pill,
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
