<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Outline color variants</h4>

        <p class="hp-p1-body">
          In need of a button, but not the hefty background colors they bring?
          Use the <code>outline-*</code> variants to remove all background
          images and colors on any <code>&lt;b-button&gt;</code>: <br /><br />
          <code>outline-primary</code>, <code>outline-secondary</code>,
          <code>outline-success</code>, <code>outline-danger</code>,
          <code>outline-warning</code>, <code>outline-info</code> and
          <code>outline-dark</code>.
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
        <b-button class="mb-8 mr-8" variant="outline-primary">Primary</b-button>
        <b-button class="mb-8 mr-8" variant="outline-secondary">Secondary</b-button>
        <b-button class="mb-8 mr-8" variant="outline-success">Success</b-button>
        <b-button class="mb-8 mr-8" variant="outline-danger">Danger</b-button>
        <b-button class="mb-8 mr-8" variant="outline-warning">Warning</b-button>
        <b-button class="mb-8 mr-8" variant="outline-info">Info</b-button>
        <b-button class="mb-8 mr-8" variant="outline-black-100">Dark</b-button>
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
