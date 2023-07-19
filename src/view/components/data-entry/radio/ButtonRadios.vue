<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Button style radios</h4>

        <p class="hp-p1-body">
          Render radios with the look of buttons by setting the prop
          <code>buttons</code> to <code>true</code> on
          <code>&lt;b-form-radio-group&gt;</code>. Set the button variant by
          setting the <code>button-variant</code> prop to one of the standard
          Bootstrap button variants (see &lt;b-button&gt; for supported
          variants). The default <code>button-variant</code> is
          <code>secondary</code>. <br /><br />
          The <code>buttons</code> prop has precedence over <code>plain</code>,
          and <code>button-variant</code> has no effect if
          <code>buttons</code> is not set. <br /><br />
          Button style radios will have the class
          <code>.active</code> automatically applied to their label when they
          are in the checked state.
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
        <b-form-group label="Button style radios" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="btn-radios-1"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            button-variant="outline-primary"
            name="radios-btn-default"
            buttons
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group
          label="Button style radios with outline-primary variant and size lg"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio-group
            id="btn-radios-2"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            button-variant="outline-primary"
            size="lg"
            name="radio-btn-outline"
            buttons
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group
          label="Stacked button style radios"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio-group
            id="btn-radios-3"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            button-variant="outline-primary"
            name="radio-btn-stacked"
            buttons
            stacked
          ></b-form-radio-group>
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
  BFormRadioGroup,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      selected: "radio1",
      options: [
        { text: "Radio 1", value: "radio1" },
        { text: "Radio 3", value: "radio2" },
        { text: "Radio 3 (disabled)", value: "radio3", disabled: true },
        { text: "Radio 4", value: "radio4" },
      ],
      codeText: code.buttonRadios,
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
