<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Inline form</h4>

        <p class="hp-p1-body">
          Use the <code>inline</code> prop on <code>&lt;b-form&gt;</code> to display a series
          of labels, form controls, and buttons on a single horizontal row. Form
          controls within inline forms vary slightly from their default states.
          <br /><br />

          <ul class="hp-p1-body pl-18 mb-16 hp-list-disc">
            <li>Controls are <code>display: flex</code>, collapsing any HTML white space and allowing you to provide alignment control with spacing and flexbox utilities.</li>
            <li>Controls and input groups receive <code>width: auto</code> to override the Bootstrap default width: 100%.</li>
            <li>Controls <strong>only appear inline in viewports that are at least 576px wide</strong> to account for narrow viewports on mobile devices.</li>
          </ul>

          You may need to manually address the width and alignment of individual
          form controls with spacing utilities (as shown below). Lastly, be sure
          to always include a <code>&lt;label&gt;</code> with each form control,
          even if you need to hide it from non-screenreader visitors with class
          <code>.sr-only</code>.
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
        <b-form inline>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Jane Doe"
          ></b-form-input>

          <label class="sr-only" for="inline-form-input-username">Username</label>
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Username"></b-form-input>
          </b-input-group>

          <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

          <b-button variant="primary">Save</b-button>
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
  BFormGroup,
  BFormCheckbox,
  BInputGroup,
  BFormInput,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.inline,
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
    BFormGroup,
    BInputGroup,
    BFormCheckbox,
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
