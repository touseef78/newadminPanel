<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4 class="mb-0">Multiple</h4>
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
        <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="flavour-1"
          ></b-form-checkbox-group>
        </b-form-group>

        <b-form-group
          label="Using sub-components:"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            id="checkbox-group-2"
            v-model="selected"
            :aria-describedby="ariaDescribedby"
            name="flavour-2"
          >
            <b-form-checkbox value="orange">Orange</b-form-checkbox>
            <b-form-checkbox value="apple">Apple</b-form-checkbox>
            <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
            <b-form-checkbox value="grape">Grape</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <div class="hp-p1-body">
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
  BFormCheckbox,
  BFormCheckboxGroup,
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
      codeText: code.multiple,
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
    BFormCheckbox,
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
