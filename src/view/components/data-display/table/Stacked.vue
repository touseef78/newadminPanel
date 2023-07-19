<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Stacked tables</h4>

        <p class="hp-p1-body">
          An alternative to responsive tables, BootstrapVue includes the stacked
          table option (using custom SCSS/CSS), which allow tables to be
          rendered in a visually stacked format. Make any table stacked across
          all viewports by setting the prop <code>stacked</code> to
          <code>true</code>. Or, alternatively, set a breakpoint at which the
          table will return to normal table format by setting the prop
          <code>stacked</code> to one of the breakpoint values
          <code>'sm'</code>, <code>'md'</code>, <code>'lg'</code>, or
          <code>'xl'</code>.
          <br />
          <br />
          Column header labels will be rendered to the left of each field value
          using a CSS <code>::before</code> pseudo element, with a width of 40%.
          <br />
          <br />
          The <code>stacked</code> prop takes precedence over the
          <a
            href="https://bootstrap-vue.org/docs/components/table#sticky-headers"
            target="_blank"
            >sticky-header</a
          >
          prop and the
          <a
            href="https://bootstrap-vue.org/docs/components/table#sticky-columns"
            target="_blank"
            >stickyColumn</a
          >
          field definition property.
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
        <b-table stacked :items="items"></b-table>
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
import { BRow, BCol, BCard, BButton, BTable } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
      ],
      codeText: code.stacked,
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
