<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Custom progress label</h4>

        <p class="hp-p1-body">
          Need more control over the label? Provide your own label by using the
          default slot within a
          <code>&lt;b-progress-bar&gt;</code> sub-component, or by using the
          <code>label</code> or <code>label-html</code> property on
          <code>&lt;b-progress-bar&gt;</code>:
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
        <p class="hp-p1-body mb-4">Custom label via default slot</p>
        <b-progress :max="max" height="2rem" class="mb-8">
          <b-progress-bar :value="value">
            <span
              >Progress:
              <strong>{{ value.toFixed(2) }} / {{ max }}</strong></span
            >
          </b-progress-bar>
        </b-progress>

        <p class="hp-p1-body mb-4">Custom label via property</p>
        <b-progress :max="max" class="mb-8">
          <b-progress-bar
            :value="value"
            :label="((value / max) * 100).toFixed(2) + '%'"
          ></b-progress-bar>
        </b-progress>

        <p class="hp-p1-body mb-4">Custom label via property (HTML support)</p>
        <b-progress :max="max" class="mb-8">
          <b-progress-bar
            :value="value"
            :label-html="'<del>' + value + '</del>'"
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
      value: 33.333333333,
      max: 50,
      codeText: code.customLabel,
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
