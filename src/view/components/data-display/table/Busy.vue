<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Table busy state</h4>

        <p class="hp-p1-body">
          <code>&lt;b-table&gt;</code> provides a <code>busy</code> prop that
          will flag the table as busy, which you can set to
          <code>true</code> just before you update your items, and then set it
          to <code>false</code> once you have your items. When in the busy
          state, the table will have the attribute
          <code>aria-busy="true"</code>. <br /><br />
          You may optionally provide a <code>table-busy</code> slot to show a
          custom loading message or spinner whenever the table's busy state is
          <code>true</code>. The slot will be placed in a
          <code>&lt;tr&gt;</code> element with class
          <code>b-table-busy-slot</code>, which has one single
          <code>&lt;td&gt;</code> with a <code>colspan</code> set to the number
          of fields.
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
        <b-button variant="primary" @click="toggleBusy">
          Toggle Busy State
        </b-button>

        <b-table :items="items" :busy="isBusy" class="mt-3">
          <template #table-busy>
            <div class="hp-p1-body text-center my-2">
              <b-spinner class="align-middle mr-8"></b-spinner>
              <strong>Loading...</strong>
            </div>
          </template>
        </b-table>
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
import { BRow, BCol, BCard, BButton, BTable, BSpinner } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      isBusy: false,
      items: [
        { first_name: "Dickerson", last_name: "MacDonald", age: 40 },
        { first_name: "Larsen", last_name: "Shaw", age: 21 },
        { first_name: "Geneva", last_name: "Wilson", age: 89 },
        { first_name: "Jami", last_name: "Carney", age: 38 },
      ],
      codeText: code.busy,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BTable,
    BSpinner,
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },

    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
