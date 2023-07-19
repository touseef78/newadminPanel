<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Debounce support</h4>

        <p class="hp-p1-body">
          As an alternative to the <code>lazy</code> modifier prop,
          <code>&lt;b-form-input&gt;</code> optionally supports debouncing user
          input, updating the <code>v-model</code> after a period of idle time
          from when the last character was entered by the user (or a
          <code>change</code> event occurs). If the user enters a new character
          (or deletes characters) before the idle timeout expires, the timeout
          is re-started. <br /><br />
          To enable debouncing, set the prop <code>debounce</code> to any
          integer greater than zero. The value is specified in milliseconds.
          Setting <code>debounce</code> to <code>0</code> will disable
          debouncing. <br /><br />
          Note: debouncing will not occur if the <code>lazy</code> prop is set.
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
        <b-form-input v-model="value" type="text" debounce="500"></b-form-input>
        <div class="mt-2 hp-p1-body">Value: "{{ value }}"</div>
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
      value: "",
      codeText: code.debounceSupport,
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
