<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <p class="hp-p1-body">
          Feel free to mix the <code>options</code> prop with
          <code>&lt;b-form-select-option&gt;</code> and
          <code>&lt;b-form-select-option-group&gt;</code>. Manually placed
          options and option groups will appear below the options generated via
          the options prop. To place manual options and option groups above the
          options specified by the <code>options</code> prop, use the named slot
          <code>first</code>.
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
        <b-form-select v-model="selected" :options="options" class="mb-3">
          <!-- This slot appears above the options from 'options' prop -->
          <template #first>
            <b-form-select-option :value="null" disabled>
              -- Please select an option --
            </b-form-select-option>
          </template>

          <!-- These options will appear after the ones from 'options' prop -->
          <b-form-select-option value="C">Option C</b-form-select-option>
          <b-form-select-option value="D">Option D</b-form-select-option>
        </b-form-select>

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
  BFormSelect,
  BFormSelectOption,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      selected: "A",
      options: [
        { value: "A", text: "Option A (from options prop)" },
        { value: "B", text: "Option B (from options prop)" },
      ],
      codeText: code.first,
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
