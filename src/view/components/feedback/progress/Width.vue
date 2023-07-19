<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Width</h4>

        <p class="hp-p1-body">
          <code>&lt;b-progress&gt;</code> will always expand to the maximum with
          of its parent container. To change the width, place
          <br />
          <code>&lt;b-progress&gt;</code> in a standard Bootstrap column or
          apply one of the standard Bootstrap width classes.
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
        <p class="hp-p1-body mb-4">Default width</p>
        <b-progress :value="value" class="mb-8"></b-progress>

        <p class="hp-p1-body mb-4">Custom widths</p>
        <b-progress :value="value" class="w-75 mb-8"></b-progress>
        <b-progress :value="value" class="w-50 mb-8"></b-progress>
        <b-progress :value="value" class="w-25"></b-progress>
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
import {
  BRow,
  BCol,
  BCard,
  BButton,
  BProgress,
  BProgressBar,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      value: 75,
      codeText: code.width,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BProgress,
    BProgressBar,
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
