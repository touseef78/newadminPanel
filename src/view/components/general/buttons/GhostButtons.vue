<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Ghost Buttons</h4>

        <p class="hp-p1-body">
          Ghost property will make button's background transparent, it is
          commonly used in colored background
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
        <div class="bg-black-20 hp-bg-color-dark-90 pt-16 px-16 pb-8">
          <b-button variant="primary" class="btn-ghost mr-8 mb-8">Primary Button</b-button>
          <b-button variant="secondary" class="btn-ghost mr-8 mb-8">Secondary Button</b-button>
          <b-button variant="danger" class="btn-ghost mr-8 mb-8">Danger Button</b-button>
          <b-button variant="info" class="btn-ghost mr-8 mb-8">Info Button</b-button>
          <b-button variant="success" class="btn-ghost mr-8 mb-8">Success Button</b-button>
          <b-button variant="warning" class="btn-ghost mr-8 mb-8">Warning Button</b-button>
          <b-button variant="dark" class="btn-ghost mr-8 mb-8">Dark Button</b-button>
        </div>
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
      codeText: code.ghostColor,
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
