<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Basic</h4>
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
        <b-progress
          :value="value"
          :max="max"
          show-progress
          animated
        ></b-progress>
        <b-progress class="progress-multiple-bars mt-8" :max="max" show-value>
          <b-progress-bar
            :value="value * (6 / 10)"
            variant="success"
          ></b-progress-bar>

          <b-progress-bar
            :value="value * (2.5 / 10)"
            variant="warning"
            class="border-rad"
          ></b-progress-bar>

          <b-progress-bar
            :value="value * (1.5 / 10)"
            variant="danger"
          ></b-progress-bar>
        </b-progress>

        <b-button variant="primary" class="mt-16" @click="randomValue">Click me</b-button>
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
      value: 45,
      max: 100,
      codeText: code.basic,
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
    randomValue() {
      this.value = Math.random() * this.max;
    },

    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
