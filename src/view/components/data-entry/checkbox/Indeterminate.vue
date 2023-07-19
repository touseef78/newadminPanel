<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Indeterminate (tri-state) support</h4>

        <p class="hp-p1-body">
          Normally a checkbox input can only have two states: checked or
          unchecked. They can have any value, but they either submit that value
          (checked) or don't (unchecked) with a form submission (although
          BootstrapVue allows a value for the unchecked state on a single
          checkbox)
          <br /><br />
          Visually, there are actually three states a checkbox can be in:
          checked, unchecked, or <strong>indeterminate</strong>. <br /><br />
          The indeterminate state is <strong>visual only</strong>. The checkbox
          is still either checked or unchecked as a value. That means the visual
          indeterminate state masks the real value of the checkbox, so that
          better make sense in your UI! <br /><br />
          <code>&lt;b-form-checkbox&gt;</code> supports setting this visual
          indeterminate state via the <code>indeterminate</code> prop (defaults
          to <code>false</code>). Clicking the checkbox will clear its
          indeterminate state. The <code>indeterminate</code> prop can be synced
          to the checkbox's state by v-binding the
          <code>indeterminate</code> prop with the <code>.sync</code> modifier.
          <br /><br />
          <strong>Note:</strong> indeterminate styling is not supported in
          button or switch mode, nor is it supported in
          <code>&lt;b-form-checkbox-group&gt;</code> (multiple checkboxes).
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
        <b-form-group>
          <template #label>
            <b>Choose your flavours:</b><br />
            <b-form-checkbox
              v-model="allSelected"
              :indeterminate="indeterminate"
              aria-describedby="flavours"
              aria-controls="flavours"
              @change="toggleAll"
            >
              {{ allSelected ? "Un-select All" : "Select All" }}
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="flavors"
              v-model="selected"
              :options="flavours"
              :aria-describedby="ariaDescribedby"
              name="flavors"
              class="ml-4"
              aria-label="Individual flavours"
              stacked
            ></b-form-checkbox-group>
          </template>
        </b-form-group>

        <div class="hp-p1-body">
          Selected: <strong>{{ selected }}</strong
          ><br />
          All Selected: <strong>{{ allSelected }}</strong
          ><br />
          Indeterminate: <strong>{{ indeterminate }}</strong>
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
  BFormCheckboxGroup,
  BFormCheckbox,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      flavours: ["Orange", "Grape", "Apple", "Lime", "Very Berry"],
      selected: [],
      allSelected: false,
      indeterminate: false,
      codeText: code.indeterminate,
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
    toggleAll(checked) {
      this.selected = checked ? this.flavours.slice() : [];
    },

    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
  watch: {
    selected(newValue, oldValue) {
      // Handle changes in individual flavour checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false;
        this.allSelected = false;
      } else if (newValue.length === this.flavours.length) {
        this.indeterminate = false;
        this.allSelected = true;
      } else {
        this.indeterminate = true;
        this.allSelected = false;
      }
    },
  },
};
</script>
