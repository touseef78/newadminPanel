<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Changing the option field names</h4>

        <p class="hp-p1-body">
          If you want to customize the field property names (for example using
          <code>name</code> field for display <code>text</code>) you can easily
          change them by setting the <code>text-field</code>,
          <code>html-field</code>, <code>value-field</code>, and
          <code>disabled-field</code> props to a string that contains the
          property name you would like to use:
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
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
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
      selected: "A",
      options: [
        { item: "A", name: "Option A" },
        { item: "B", name: "Option B" },
        { item: "D", name: "Option C", notEnabled: true },
        { item: { d: 1 }, name: "Option D" },
      ],
      codeText: code.changing,
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
