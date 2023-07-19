<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Select sizing (displayed rows)</h4>

        <p class="hp-p1-body">
          You can use the <code>select-size</code> prop to switch the custom
          select into a select list-box, rather than a dropdown. Set the
          <code>select-size</code> prop to a numerical value greater than 1 to
          control how many rows of options are visible. <br /><br />
          Note when <code>select-size</code> is set to a value greater than 1,
          the Bootstrap v4 custom styling will not be applied, unless the
          <code>multiple</code> prop is also set. <br /><br />
          Note that not all mobile browsers will show the select as a list-box.
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
        <b-form-select
          v-model="selected"
          :options="options"
          :select-size="4"
        ></b-form-select>

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
import { BRow, BCol, BCard, BButton, BFormSelect } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select some item" },
        { value: "a", text: "This is option a" },
        { value: "b", text: "Default Selected Option b" },
        { value: "c", text: "This is option c" },
        { value: "d", text: "This one is disabled", disabled: true },
        { value: "e", text: "This is option e" },
        { value: "e", text: "This is option f" },
      ],
      codeText: code.sizing,
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
