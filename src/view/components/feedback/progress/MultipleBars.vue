<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Multiple bars</h4>

        <p class="hp-p1-body">
          Include multiple <code>&lt;b-progress-bar&gt;</code> sub-components in
          a <code>&lt;b-progress&gt;</code> component to build a horizontally
          stacked set of progress bars.
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
        <b-progress :max="max" class="progress-multiple-bars mb-8">
          <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
          <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
          <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
        </b-progress>

        <b-progress show-progress :max="max" class="progress-multiple-bars mb-8">
          <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
          <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
          <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
        </b-progress>

        <b-progress
          show-value
          striped
          :max="max"
          class="progress-multiple-bars mb-8"
        >
          <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
          <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
          <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
        </b-progress>

        <b-progress :max="max" class="progress-multiple-bars">
          <b-progress-bar
            variant="primary"
            :value="values[0]"
            show-progress
          ></b-progress-bar>
          <b-progress-bar
            variant="success"
            :value="values[1]"
            animated
            show-progress
          ></b-progress-bar>
          <b-progress-bar
            variant="info"
            :value="values[2]"
            striped
            show-progress
          ></b-progress-bar>
        </b-progress>
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
      values: [15, 30, 20],
      max: 100,
      codeText: code.multipleBars,
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
