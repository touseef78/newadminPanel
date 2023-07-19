<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Feedback helpers</h4>

        <p class="hp-p1-body">
          The <code>&lt;b-form-valid-feedback&gt;</code> and
          <code>&lt;b-form-invalid-feedback&gt;</code> helper components will
          display feedback (based on input state) as a block of colored text.
          They rely on being placed after an input (sibling) and will show based
          on the browser native validation state of the input. To force them to
          show, set the prop <code>force-show</code> to <code>true</code>, or
          bind the controls <code>state</code> to the <code>state</code> prop of
          the feedback helper, or set the <code>was-validated</code> class on a
          parent element (such as a form). See the
          <strong>Validation</strong> section below for additional details.
          <br /><br />
          Use the optional Boolean prop <code>tooltip</code> to change the
          display from a block to a static tooltip style. The feedback will
          typically appear below the form control. When this mode is enabled, it
          is important that the parent container have a
          <code>position: relative:</code> css style (or
          <code>position-relative</code> class). Note that tooltip style
          feedback may, since its positioning is static, obscure other inputs,
          labels, etc. <br /><br />
          Note: Some form controls, such as <code>&lt;b-form-radio&gt;</code>,
          <code>&lt;b-form-checkbox&gt;</code>, and
          <code>&lt;b-form-file&gt;</code> have wrapper elements which will
          prevent the feedback text from automatically showing (as the feedback
          component is not a direct sibling of the form control's input). Use
          the feedback component's <code>state</code> prop (bound to the state
          of the form control) or the <code>force-show</code> prop to display
          the feedback.
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
          <label for="feedback-user">User ID</label>
          <b-form-input
            v-model="userId"
            :state="validation"
            id="feedback-user"
          ></b-form-input>
          <b-form-invalid-feedback :state="validation">
            Your user ID must be 5-12 characters long.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            Looks Good.
          </b-form-valid-feedback>
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
  BFormInput,
  BFormInvalidFeedback,
  BFormValidFeedback,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      userId: "",
      codeText: code.feedback,
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
    BFormInvalidFeedback,
    BFormValidFeedback,
    BFormInput,
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
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
