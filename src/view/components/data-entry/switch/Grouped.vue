<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4 class="mb-0">Grouped switch style checkboxes</h4>

        <p class="hp-p1-body">
          Render groups of checkboxes with the look of a switches by setting the
          prop <code>switches</code> on
          <code>&lt;b-form-checkbox-group&gt;</code>.
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
          label="Inline switch style checkboxes"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            switches
          ></b-form-checkbox-group>
        </b-form-group>

        <b-form-group
          label="Stacked (vertical) switch style checkboxes"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            switches
            stacked
          ></b-form-checkbox-group>
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
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Red", value: "red" },
        { text: "Green", value: "green" },
        { text: "Yellow (disabled)", value: "yellow", disabled: true },
        { text: "Blue", value: "blue" },
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
    BFormCheckboxGroup,
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
