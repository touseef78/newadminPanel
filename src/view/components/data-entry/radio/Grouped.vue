<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Grouped radios</h4>

        <p class="hp-p1-body">
          The individual radio inputs in
          <code>&lt;b-form-radio-group&gt;</code> can be specified via the
          <code>options</code> prop, or via manual placement of the
          <code>&lt;b-form-radio&gt;</code> sub component. When using manually
          placed <code>&lt;b-form-radio&gt;</code> components within a
          <code>&lt;b-form-radio-group&gt;</code>, they will inherit most props
          and the v-model from the <code>&lt;b-form-radio-group&gt;</code>.
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
        <b-form-group label="Radios using options" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="radio-group-1"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-options"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group
          label="Radios using sub-components"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio-group
            id="radio-group-2"
            v-model="selected"
            :aria-describedby="ariaDescribedby"
            name="radio-sub-component"
          >
            <b-form-radio value="first">Toggle this custom radio</b-form-radio>
            <b-form-radio value="second">
              Or toggle this other custom radio
            </b-form-radio>
            <b-form-radio value="third" disabled>
              This one is Disabled
            </b-form-radio>
            <b-form-radio :value="{ fourth: 4 }">
              This is the 4th radio
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <div class="mt-3 hp-p1-body">
          Selected: <strong>{{ selected }}</strong>
        </div>
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
  BFormRadioGroup,
  BFormRadio,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      selected: "first",
      options: [
        { text: "Toggle this custom radio", value: "first" },
        { text: "Or toggle this other custom radio", value: "second" },
        { text: "This one is Disabled", value: "third", disabled: true },
        { text: "This is the 4th radio", value: { fourth: 4 } },
      ],
      codeText: code.grouped,
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
    BFormRadioGroup,
    BFormRadio,
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
