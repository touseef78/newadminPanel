<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Dashed Buttons</h4>

        <p class="hp-p1-body">There are dashed button in Yoda.</p>
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
        <b-button class="mb-8 mr-8" variant="dashed-primary">Primary</b-button>
        <b-button class="mb-8 mr-8" variant="dashed-secondary"
          >Secondary</b-button
        >
        <b-button class="mb-8 mr-8" variant="dashed-success">Success</b-button>
        <b-button class="mb-8 mr-8" variant="dashed-danger">Danger</b-button>
        <b-button class="mb-8 mr-8" variant="dashed-warning">Warning</b-button>
        <b-button class="mb-8 mr-8" variant="dashed-info">Info</b-button>
        <b-button class="mb-8 mr-8" variant="dashed-dark">Dark</b-button>
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
      codeText: code.outlineColor,
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
