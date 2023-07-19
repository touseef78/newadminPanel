<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Control sizing</h4>

        <p class="hp-p1-body">
          Set heights using the <code>size</code> prop to <code>sm</code> or
          <code>lg</code> for small or large respectively. <br /><br />
          To control width, place the input inside standard Bootstrap grid
          column.
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
        <b-row>
          <b-col sm="2">
            <label for="input-small">Small:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-small"
              size="sm"
              placeholder="Enter your name"
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-16">
          <b-col sm="2">
            <label for="input-default">Default:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-default"
              placeholder="Enter your name"
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-16">
          <b-col sm="2">
            <label for="input-large">Large:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input
              id="input-large"
              size="lg"
              placeholder="Enter your name"
            ></b-form-input>
          </b-col>
        </b-row>
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
import { BRow, BCol, BCard, BButton, BFormInput } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.controlSizing,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BFormInput,
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
