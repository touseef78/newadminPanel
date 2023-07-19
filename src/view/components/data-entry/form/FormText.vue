<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Form text helper</h4>

        <p class="hp-p1-body">
          Display a block of help text below an input with the
          <code>&lt;b-form-text&gt;</code> helper component. text is displayed
          with a muted color and slightly smaller font-size. <br /><br />
          <strong>Tip:</strong> Help text should be explicitly associated with
          the form control it relates to using the
          <code>aria-describedby</code> attribute. This will ensure that
          assistive technologies, such as screen readers, will announce this
          help text when the user focuses or enters the control.
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
        <b-form @submit.stop.prevent>
          <label for="text-password">Password</label>
          <b-form-input
            type="password"
            id="text-password"
            aria-describedby="password-help-block"
          ></b-form-input>
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </b-form-text>
        </b-form>
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
  BForm,
  BFormText,
  BFormInput,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.text,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BForm,
    BFormText,
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
