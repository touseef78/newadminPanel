<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Height</h4>

        <p class="hp-p1-body">
          The height of the progress bar can be controlled with the
          <code>height</code> prop. The height value should be a standard CSS
          dimension (<code>px</code>, <code>rem</code>, <code>em</code>, etc.).
          The default height is <code>1rem</code>.
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
        <p class="hp-p1-body mb-4">Default height</p>
        <b-progress :value="value" show-progress class="mb-8"></b-progress>

        <p class="hp-p1-body mb-4">Custom heights</p>
        <b-progress
          height="2rem"
          :value="value"
          show-progress
          class="mb-8"
        ></b-progress>
        <b-progress
          height="20px"
          :value="value"
          show-progress
          class="mb-8"
        ></b-progress>
        <b-progress height="2px" :value="value"></b-progress>
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
      codeText: code.height,
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
