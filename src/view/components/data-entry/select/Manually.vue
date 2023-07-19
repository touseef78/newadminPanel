<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Manually</h4>

        <p class="hp-p1-body">
          Or manually provide your options and option groups:
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
        <b-form-select v-model="selected" class="mb-3">
          <b-form-select-option :value="null">
            Please select an option
          </b-form-select-option>
          <b-form-select-option value="a">Option A</b-form-select-option>
          <b-form-select-option value="b" disabled>
            Option B (disabled)
          </b-form-select-option>
          <b-form-select-option-group label="Grouped options">
            <b-form-select-option :value="{ C: '3PO' }">
              Option with object value
            </b-form-select-option>
            <b-form-select-option :value="{ R: '2D2' }">
              Another option with object value
            </b-form-select-option>
          </b-form-select-option-group>
        </b-form-select>

        <div class="mt-2 hp-p1-body">
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
  BFormSelect,
  BFormSelectOption,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      selected: null,
      codeText: code.manually,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BFormSelect,
    BFormSelectOption,
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
