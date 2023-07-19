<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Justified</h4>

        <p class="hp-p1-body">
          For equal-width controls, use the <code>justified</code> prop instead.
          All horizontal space will be occupied by the controls, but unlike
          using <code>fill</code> above, every control will be the same width.
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
        <b-tabs content-class="mt-3" justified>
          <b-tab title="First" active>
            <p class="hp-p1-body">I'm the first tab</p>
          </b-tab>
          <b-tab title="Second">
            <p class="hp-p1-body">I'm the second tab</p>
          </b-tab>
          <b-tab title="Very, very long title">
            <p class="hp-p1-body">I'm the tab with the very, very long title</p>
          </b-tab>
          <b-tab title="Disabled" disabled>
            <p class="hp-p1-body">I'm a disabled tab!</p>
          </b-tab>
        </b-tabs>
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
import { BRow, BCol, BCard, BButton, BTabs, BTab } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.justified,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BTabs,
    BTab,
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
