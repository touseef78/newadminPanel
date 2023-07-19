<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Formatter support</h4>

        <p class="hp-p1-body">
          <code>&lt;b-form-input&gt;</code> optionally supports formatting by
          passing a function reference to the <code>formatter</code> prop.
          <br /><br />
          Formatting (when a formatter function is supplied) occurs when the
          control's native <code>input</code> and <code>change</code> events
          fire. You can use the boolean prop <code>lazy-formatter</code> to
          restrict the formatter function to being called on the control's
          native <code>blur</code> event. <br /><br />
          The <code>formatter</code> function receives two arguments: the raw
          <code>value</code> of the input element, and the native
          <code>event</code> object that triggered the format (if available).
          <br /><br />
          The <code>formatter</code> function should return the formatted value
          as a string. <br /><br />
          Formatting does not occur if a <code>formatter</code> is not provided.
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
        <b-form-group
          label="Text input with formatter (on input)"
          label-for="input-formatter"
          description="We will convert your name to lowercase instantly"
          class="mb-0"
        >
          <b-form-input
            id="input-formatter"
            v-model="text1"
            placeholder="Enter your name"
            :formatter="formatter"
          ></b-form-input>
        </b-form-group>
        <p><b>Value:</b> {{ text1 }}</p>

        <b-form-group
          label="Text input with lazy formatter (on blur)"
          label-for="input-lazy"
          description="This one is a little lazy!"
          class="mb-0"
        >
          <b-form-input
            id="input-lazy"
            v-model="text2"
            placeholder="Enter your name"
            lazy-formatter
            :formatter="formatter"
          ></b-form-input>
        </b-form-group>
        <p class="mb-0"><b>Value:</b> {{ text2 }}</p>
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
  BFormGroup,
  BFormInput,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      text1: "",
      text2: "",
      codeText: code.formatter,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BFormGroup,
    BFormInput,
  },
  methods: {
    formatter(value) {
      return value.toLowerCase();
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
