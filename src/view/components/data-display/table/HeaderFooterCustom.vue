<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Header and Footer custom rendering via scoped slots</h4>

        <p class="hp-p1-body">
          It is also possible to provide custom rendering for the tables
          <code>thead</code> and <code>tfoot</code> elements. Note by default
          the table footer is not rendered unless <code>foot-clone</code> is set
          to <code>true</code>. <br /><br />
          Scoped slots for the header and footer cells uses a special naming
          convention of <code>'head(&lt;fieldkey&gt;)'</code> and
          <code>'foot(&lt;fieldkey&gt;)'</code> respectively. if a
          <code>'foot(...)'</code> slot for a field is not provided, but a
          <code>'head(...)'</code> slot is provided, then the footer will use
          the <code>'head(...)'</code> slot content. <br /><br />
          You can use a default fall-back scoped slot <code>'head()'</code> or
          <code>'foot()'</code> to format any header or footer cells that do not
          have an explicit scoped slot provided.
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
        <b-table :fields="fields" :items="items" foot-clone>
          <!-- A custom formatted data column cell -->
          <template #cell(name)="data">
            {{ data.value.first }} {{ data.value.last }}
          </template>

          <!-- A custom formatted header cell for field 'name' -->
          <template #head(name)="data">
            <span class="hp-p1-body">{{ data.label.toUpperCase() }}</span>
          </template>

          <!-- A custom formatted footer cell for field 'name' -->
          <template #foot(name)="data">
            <span class="hp-p1-body">{{ data.label }}</span>
          </template>

          <!-- Default fall-back custom formatted footer cell -->
          <template #foot()="data">
            <i>{{ data.label }}</i>
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
import { BRow, BCol, BCard, BButton, BTable } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      fields: [
        // A column that needs custom formatting
        { key: "name", label: "Full Name" },
        // A regular column
        "age",
        // A regular column
        "sex",
      ],
      items: [
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "Jane", last: "Doe" }, sex: "Female", age: 36 },
        { name: { first: "Rubin", last: "Kincade" }, sex: "Male", age: 73 },
        {
          name: { first: "Shirley", last: "Partridge" },
          sex: "Female",
          age: 62,
        },
      ],
      codeText: code.headerFooterCustom,
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
