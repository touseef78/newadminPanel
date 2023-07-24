<template>
  <b-card>
    
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Sorting</h4>

        <p class="hp-p1-body">
          As mentioned in the Fields section above, you can make columns
          sortable in <code>&lt;b-table&gt;</code>. Clicking on a sortable
          column header will sort the column in ascending direction (smallest
          first), while clicking on it again will switch the direction of
          sorting to descending (largest first). Clicking on a non-sortable
          column will clear the sorting (the prop <code>no-sort-reset</code> can
          be used to disable this feature). <br /><br />
          You can control which column is pre-sorted and the order of sorting
          (ascending or descending). To pre-specify the column to be sorted, set
          the <code>sort-by</code> prop to the field's key. Set the sort
          direction by setting <code>sort-desc</code> to either
          <code>true</code> (for descending) or <code>false</code> (for
          ascending, the default). <br /><br />
          <ul>
            <li>
              <strong>Ascending:</strong> Items are sorted lowest to highest (i.e. <code>A</code> to <code>Z</code>) and will
              be displayed with the lowest value in the first row with progressively
              higher values in the following rows.
            </li>
            <li> 
              <strong>Descending:</strong> Items are sorted
              highest to lowest (i.e. <code>Z</code> to <code>A</code>) and will be displayed with the highest
              value in the first row with progressively lower values in the
              following rows.
            </li>
          </ul>
          <br /><br />
          The props <code>sort-by</code> and <code>sort-desc</code> can be turned into
          two-way (syncable) props by adding the <code>.sync</code> modifier. Your bound
          variables will then be updated accordingly based on the current sort
          criteria. See the Vue docs for details on the <code>.sync</code> prop modifier.
          <br /><br />
          Setting <code>sort-by</code> to a column that is not defined in the fields as
          <code>sortable</code> will result in the table not being sorted.
          <br /><br />
          When the prop <code>foot-clone</code> is set, the footer headings will also allow
          sorting by clicking, even if you have custom formatted footer field
          headers. To disable the sort icons and sorting via heading clicks in
          the footer, set the <code>no-footer-sorting</code> prop to true.
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
        <b-table
          :items="items"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          responsive="sm"
        ></b-table>

        <div class="hp-p1-body">
          Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
          <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
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
import { BRow, BCol, BCard, BButton, BTable } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'last_name', sortable: true },
        { key: 'first_name', sortable: true },
        { key: 'age', sortable: true },
        { key: 'isActive', sortable: false }
      ],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
      codeText: code.sorting,
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
