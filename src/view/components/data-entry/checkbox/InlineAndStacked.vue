<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Inline and stacked checkboxes</h4>

        <p class="hp-p1-body">
          <code>&lt;b-form-checkbox-group&gt;</code> components render inline
          checkboxes by default, while
          <code>&lt;b-form-checkbox&gt;</code> renders block-level (stacked)
          checkboxes. <br /><br />
          Set the prop <code>stacked</code> on
          <code>&lt;b-form-checkbox-group&gt;</code> to place each form control
          one over the other, or if using individual checkboxes not inside a
          <code>&lt;b-form-checkbox-group&gt;</code>, set the
          <code>inline</code> prop on <code>&lt;b-form-checkbox&gt;</code>.
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
          label="Form-checkbox-group inline checkboxes (default)"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="flavour-1a"
          ></b-form-checkbox-group>
        </b-form-group>

        <b-form-group
          label="Form-checkbox-group stacked checkboxes"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="flavour-2a"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>

        <b-form-group
          label="Individual stacked checkboxes (default)"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox
            v-for="option in options"
            v-model="selected"
            :key="option.value"
            :value="option.value"
            :aria-describedby="ariaDescribedby"
            name="flavour-3a"
          >
            {{ option.text }}
          </b-form-checkbox>
        </b-form-group>

        <b-form-group
          label="Individual inline checkboxes"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox
            v-for="option in options"
            v-model="selected"
            :key="option.value"
            :value="option.value"
            :aria-describedby="ariaDescribedby"
            name="flavour-4a"
            inline
          >
            {{ option.text }}
          </b-form-checkbox>
        </b-form-group>
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
  BFormCheckboxGroup,
  BFormCheckbox,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
      ],
      codeText: code.inlineAndStacked,
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
    BFormCheckboxGroup,
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
