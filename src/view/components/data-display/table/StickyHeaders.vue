<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Sticky headers</h4>

        <p class="hp-p1-body">
          Use the <code>sticky-header</code> prop to enable a vertically
          scrolling table with headers that remain fixed (sticky) as the table
          body scrolls. Setting the prop to <code>true</code> (or no explicit
          value) will generate a table that has a maximum height of
          <code>300px</code>. To specify a maximum height other than
          <code>300px</code>, set the <code>sticky-header</code> prop to a valid
          CSS height (including units), i.e. <code>sticky-header="200px"</code>.
          Tables with <code>sticky-header</code> enabled will also automatically
          become always responsive horizontally, regardless of the responsive
          prop setting, if the table is wider than the available horizontal
          space.
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
        <b-table sticky-header :items="items"></b-table>
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
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
        },
      ],
      codeText: code.sticky,
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
