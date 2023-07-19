<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Labels</h4>

        <p class="hp-p1-body">
          Add labels to your progress bars by either enabling
          <code>show-progress</code> (percentage of max) or show-valuefor the
          current absolute value. You may also set the precision (number of
          digits after the decimal) via the <code>precision</code> prop (default
          is <code>0</code>digits after the decimal).
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
        <p class="hp-p1-body mb-4">No label</p>
        <b-progress :value="value" :max="max" class="mb-8"></b-progress>

        <p class="hp-p1-body mb-4">Value label</p>
        <b-progress
          :value="value"
          :max="max"
          show-value
          class="mb-8"
        ></b-progress>

        <p class="hp-p1-body mb-4">Progress label</p>
        <b-progress
          :value="value"
          :max="max"
          show-progress
          class="mb-8"
        ></b-progress>

        <p class="hp-p1-body mb-4">Value label with precision</p>
        <b-progress
          :value="value"
          :max="max"
          :precision="2"
          show-value
          class="mb-8"
        ></b-progress>

        <p class="hp-p1-body mb-4">Progress label with precision</p>
        <b-progress
          :value="value"
          :max="max"
          :precision="2"
          show-progress
          class="mb-8"
        ></b-progress>
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
      value: 33.333333333,
      max: 50,
      codeText: code.labels,
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
