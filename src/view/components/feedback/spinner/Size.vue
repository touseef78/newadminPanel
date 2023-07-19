<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Size</h4>

        <p class="hp-p1-body">
          Set the prop <code>small</code> to <code>true</code> to make a smaller
          spinner that can quickly be used within other components.
        </p>

        <p class="hp-p1-body">
          Or, use custom CSS or inline styles to change the dimensions as
          needed.
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
        <div class="d-flex">
          <b-spinner small class="mr-16 hp-border-color-dark-40" />
          <b-spinner small class="hp-bg-color-dark-40" type="grow" />
        </div>

        <div class="d-flex mt-16">
          <b-spinner class="mr-16 hp-border-color-dark-40" style="width: 3rem; height: 3rem" />
          <b-spinner class="hp-bg-color-dark-40" style="width: 3rem; height: 3rem" type="grow" />
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
import { BRow, BCol, BCard, BButton, BSpinner } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.size,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BSpinner,
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
