<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Custom radio, checkbox, and switch addons</h4>

        <p class="hp-p1-body">
          Using <code>&lt;b-form-checkbox&gt;</code> and
          <code>&lt;b-form-radio&gt;</code> components as addons, using
          Bootstrap utility classes for additional styling to get them to "fit"
          in the addon:
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
        <b-input-group class="mb-2">
          <b-input-group-prepend is-text>
            <b-form-checkbox class="mr-n2">
              <span class="sr-only">Checkbox for following text input</span>
            </b-form-checkbox>
          </b-input-group-prepend>
          <b-form-input aria-label="Text input with checkbox"></b-form-input>
        </b-input-group>

        <b-input-group class="mb-2">
          <b-input-group-prepend is-text>
            <b-form-radio class="mr-n2">
              <span class="sr-only">Radio for following text input</span>
            </b-form-radio>
          </b-input-group-prepend>
          <b-form-input aria-label="Text input with radio input"></b-form-input>
        </b-input-group>

        <b-input-group>
          <b-input-group-prepend is-text>
            <b-form-checkbox switch class="mr-n2">
              <span class="sr-only">Switch for following text input</span>
            </b-form-checkbox>
          </b-input-group-prepend>
          <b-form-input aria-label="Text input with switch"></b-form-input>
        </b-input-group>
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
  BInputGroup,
  BInputGroupPrepend,
  BFormCheckbox,
  BFormRadio,
  BFormInput,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      text: "",
      codeText: code.customAddons,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BInputGroup,
    BInputGroupPrepend,
    BFormCheckbox,
    BFormRadio,
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
