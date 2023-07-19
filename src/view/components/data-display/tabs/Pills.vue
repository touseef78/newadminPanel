<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Pills variant</h4>

        <p class="hp-p1-body">
          Tabs use the <code>tabs</code> styling by default. Just add
          <code>pills</code> property to <code>&lt;b-tabs&gt;</code> for the
          pill style variant.
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
        <b-tabs pills>
          <b-tab title="Tab 1" active>
            <p class="hp-p1-body mt-8">Tab contents 1</p>
          </b-tab>
          <b-tab title="Tab 2">
            <p class="hp-p1-body mt-8">Tab contents 2</p>
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
      codeText: code.pills,
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
