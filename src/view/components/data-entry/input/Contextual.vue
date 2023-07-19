<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Contextual states</h4>

        <p class="hp-p1-body">
          Bootstrap includes validation styles for <code>valid</code> and <code>invalid</code> states on
          most form controls.
          <br /><br />
          Generally speaking, you'll want to use a particular state for specific
          types of feedback:
          <br /><br />
          <ul class="hp-p1-body pl-18 mb-16 hp-list-disc">
            <li>
              <code>false</code> (denotes invalid state) is great for when there's a blocking or required field. A user must fill in this field properly to submit the form.
            </li>
            <li>
              <code>true</code> (denotes valid state) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields.
            </li>
            <li>
              <code>null</code> Displays no validation state (neither valid nor invalid)
            </li>
          </ul>
          To apply one of the contextual state icons on
          <code>&lt;b-form-input&gt;</code>, set the <code>state</code> prop to <code>false</code> (for
          invalid), <code>true</code> (for valid), or <code>null</code> (no validation state).
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
          <b-col sm="3">
            <label for="input-none">No State:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-16">
          <b-col sm="3">
            <label for="input-valid">Valid State:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="input-valid" :state="true" placeholder="Valid input"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-16">
          <b-col sm="3">
            <label for="input-invalid">Invalid State:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="input-invalid" :state="false" placeholder="Invalid input"></b-form-input>
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
      codeText: code.contextual,
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
