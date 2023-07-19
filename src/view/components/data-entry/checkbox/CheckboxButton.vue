<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Individual checkbox button style</h4>

        <p class="hp-p1-body">
          A single checkbox can be rendered with a button appearance by setting
          the prop <code></code> to <code>true</code> <br /><br />
          Change the button variant by setting the button-variant prop to one of
          the standard Bootstrap button variants (see
          <code>&lt;b-button&gt;</code> for supported variants). The default
          variant is <code>secondary</code>.
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
        <b-form-checkbox
          v-model="checked1"
          name="check-button"
          button
          class="mb-8 mr-8"
          button-variant="primary"
        >
          Button Checkbox <b>(Checked: {{ checked1 }})</b>
        </b-form-checkbox>

        <b-form-checkbox
          v-model="checked2"
          name="check-button"
          button
          button-variant="primary"
          class="mb-8 mr-8"
        >
          Button Checkbox <b>(Checked: {{ checked2 }})</b>
        </b-form-checkbox>
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
import { BRow, BCol, BCard, BButton, BFormCheckbox } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.button,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BFormCheckbox,
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
