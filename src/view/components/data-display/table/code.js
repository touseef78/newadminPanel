const basic = `
<template>
  <b-table striped hover :items="items"></b-table>
</template>
        
<script>
import { BTable } from "bootstrap-vue";

export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  components: {
    BTable,
  },
};
</script>
`

const styling = `
<template>
  <div>
    <b-form-group
      label="Table Options"
      label-cols-lg="2"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-model="striped"
        :aria-describedby="ariaDescribedby"
        inline
        >Striped</b-form-checkbox
      >
      <b-form-checkbox
        v-model="bordered"
        :aria-describedby="ariaDescribedby"
        inline
        >Bordered</b-form-checkbox
      >
      <b-form-checkbox
        v-model="borderless"
        :aria-describedby="ariaDescribedby"
        inline
        >Borderless</b-form-checkbox
      >
      <b-form-checkbox
        v-model="outlined"
        :aria-describedby="ariaDescribedby"
        inline
        >Outlined</b-form-checkbox
      >
      <b-form-checkbox
        v-model="small"
        :aria-describedby="ariaDescribedby"
        inline
        >Small</b-form-checkbox
      >
      <b-form-checkbox
        v-model="hover"
        :aria-describedby="ariaDescribedby"
        inline
        >Hover</b-form-checkbox
      >
      <b-form-checkbox
        v-model="dark"
        :aria-describedby="ariaDescribedby"
        inline
        >Dark</b-form-checkbox
      >
      <b-form-checkbox
        v-model="fixed"
        :aria-describedby="ariaDescribedby"
        inline
        >Fixed</b-form-checkbox
      >
      <b-form-checkbox
        v-model="footClone"
        :aria-describedby="ariaDescribedby"
        inline
        >Foot Clone</b-form-checkbox
      >
      <b-form-checkbox
        v-model="noCollapse"
        :aria-describedby="ariaDescribedby"
        inline
        >No border collapse</b-form-checkbox
      >
    </b-form-group>

    <b-form-group
      label="Head Variant"
      label-cols-lg="2"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        v-model="headVariant"
        :aria-describedby="ariaDescribedby"
        class="mt-lg-2"
      >
        <b-form-radio :value="null" inline>None</b-form-radio>
        <b-form-radio value="light" inline>Light</b-form-radio>
        <b-form-radio value="dark" inline>Dark</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-form-group
      label="Table Variant"
      label-for="table-style-variant"
      label-cols-lg="2"
    >
      <b-form-select
        id="table-style-variant"
        v-model="tableVariant"
        :options="tableVariants"
      >
        <template #first>
          <option value="">-- None --</option>
        </template>
      </b-form-select>
    </b-form-group>

    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    ></b-table>
  </div>
</template>

<script>
import { BTable, BFormGroup, BFormRadioGroup, BFormRadio, BFormCheckbox, BFormSelect } from "bootstrap-vue";

export default {
  data() {
    return {
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ],
      tableVariants: [
        'primary',
        'secondary',
        'info',
        'danger',
        'warning',
        'success',
        'light',
        'dark'
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: false,
    };
  },
  components: {
    BTable,
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
    BFormCheckbox,
    BFormSelect,
  },
};
</script>
`

const responsive = `
<template>
  <b-table responsive :items="items"></b-table>
</template>

<script>
import { BTable } from "bootstrap-vue";

export default {
  data() {
    return {
      items: [
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
          heading4: "table cell",
          heading5: "table cell",
          heading6: "table cell",
          heading7: "table cell",
          heading8: "table cell",
          heading9: "table cell",
          heading10: "table cell",
          heading11: "table cell",
          heading12: "table cell",
          heading13: "table cell",
          heading14: "table cell",
          heading15: "table cell",
          heading16: "table cell",
          heading17: "table cell",
          heading18: "table cell",
          heading19: "table cell",
          heading20: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
          heading4: "table cell",
          heading5: "table cell",
          heading6: "table cell",
          heading7: "table cell",
          heading8: "table cell",
          heading9: "table cell",
          heading10: "table cell",
          heading11: "table cell",
          heading12: "table cell",
          heading13: "table cell",
          heading14: "table cell",
          heading15: "table cell",
          heading16: "table cell",
          heading17: "table cell",
          heading18: "table cell",
          heading19: "table cell",
          heading20: "table cell",
        },
        {
          heading1: "table cell",
          heading2: "table cell",
          heading3: "table cell",
          heading4: "table cell",
          heading5: "table cell",
          heading6: "table cell",
          heading7: "table cell",
          heading8: "table cell",
          heading9: "table cell",
          heading10: "table cell",
          heading11: "table cell",
          heading12: "table cell",
          heading13: "table cell",
          heading14: "table cell",
          heading15: "table cell",
          heading16: "table cell",
          heading17: "table cell",
          heading18: "table cell",
          heading19: "table cell",
          heading20: "table cell",
        },
      ],
    };
  },
  components: {
    BTable,
  },
};
</script>
`

const stacked = `
<template>
  <b-table stacked :items="items"></b-table>
</template>

<script>
import { BTable } from "bootstrap-vue";

export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
      ],
    };
  },
  components: {
    BTable,
  },
};
</script>
`

const caption = `
<template>
  <b-table :items="items" :fields="fields">
    <template #table-caption>
      <p class="hp-p1-body">This is a table caption.</p>
    </template>
  </b-table>
</template>

<script>
import { BTable } from "bootstrap-vue";

export default {
  data() {
    return {
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ]
    };
  },
  components: {
    BTable,
  },
};
</script>
`

const busy = `
<template>
  <div>
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
</template>

<script>
import { BButton, BTable, BSpinner } from "bootstrap-vue";

export default {
  data() {
    return {
      isBusy: false,
      items: [
        { first_name: 'Dickerson', last_name: 'MacDonald', age: 40 },
        { first_name: 'Larsen', last_name: 'Shaw', age: 21 },
        { first_name: 'Geneva', last_name: 'Wilson', age: 89 },
        { first_name: 'Jami', last_name: 'Carney', age: 38 }
      ],
    };
  },
  components: {
    BButton,
    BTable,
    BSpinner,
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
  },
};
</script>
`

const headerFooterCustom = `
<template>
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
</template>

<script>
import { BTable } from "bootstrap-vue";

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
    };
  },
  components: {
    BTable,
  },
};
</script>
`

const sticky = `
<template>
  <b-table sticky-header :items="items"></b-table>
</template>

<script>
import { BTable } from "bootstrap-vue";

export default {
  data() {
    return {
      items: [
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
        { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' }
      ],
    };
  },
  components: {
    BTable,
  },
};
</script>
`

const stickyColumns = `
<template>
  <div>
    <div class="mb-2">
      <b-form-checkbox v-model="stickyHeader" inline>
        Sticky header
      </b-form-checkbox>

      <b-form-checkbox v-model="noCollapse" inline>
        No border collapse
      </b-form-checkbox>
    </div>

    <b-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive
      :items="items"
      :fields="fields"
    >
      <template #head(id)>
        <div class="text-nowrap">Row ID</div>
      </template>

      <template #head()="scope">
        <div class="text-nowrap">Heading {{ scope.label }}</div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { BTable, BFormCheckbox } from "bootstrap-vue";

export default {
  data() {
    return {
      stickyHeader: true,
      noCollapse: false,
      fields: [
        { key: 'id', stickyColumn: true, isRowHeader: true, variant: 'primary', class: 'hp-bg-dark-primary' },
        'a',
        'b',
        { key: 'c', stickyColumn: true, variant: 'info', class: 'hp-bg-dark-info' },
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'r',
        's',
      ],
      items: [
        { id: 1, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 2, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 3, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 4, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 5, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 6, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 7, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 8, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 9, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 10, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 11, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 12, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 13, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 14, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 15, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 16, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 17, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 18, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 19, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
        { id: 20, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, r: 16, s: 17, },
      ],
    };
  },
  components: {
    BTable,
    BFormCheckbox,
  },
};
</script>
`

const rowSelect = `
<template>
  <div>
    <b-form-group
      label="Selection mode:"
      label-for="table-select-mode-select"
      label-cols-md="4"
    >
      <b-form-select
        id="table-select-mode-select"
        v-model="selectMode"
        :options="modes"
        class="mb-3"
      ></b-form-select>
    </b-form-group>

    <b-table
      :items="items"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>

    <b-button variant="primary" size="sm" class="mb-8 mr-8" @click="selectAllRows">Select all</b-button>
    <b-button variant="primary" size="sm" class="mb-8 mr-8" @click="clearSelected">Clear selected</b-button>
    <b-button variant="primary" size="sm" class="mb-8 mr-8" @click="selectThirdRow">Select 3rd row</b-button>
    <b-button variant="primary" size="sm" class="mb-8 mr-8" @click="unselectThirdRow">Unselect 3rd row</b-button>

    <p class="hp-p1-body">
      Selected Rows:<br />
      {{ selected }}
    </p>
  </div>
</template>

<script>
import { BButton, BTable, BFormGroup, BFormSelect } from "bootstrap-vue";

export default {
  data() {
    return {
      modes: ["multi", "single", "range"],
      fields: ["selected", "isActive", "age", "first_name", "last_name"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  components: {
    BButton,
    BTable,
    BFormGroup,
    BFormSelect,
  },
  methods: {
    onRowSelected(items) {
      this.selected = items
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected()
    },
    selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2)
    },
    unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2)
    }
  }
};
</script>
`

const sorting = `
<template>
  <div>
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
</template>

<script>
import { BTable } from "bootstrap-vue";

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
    };
  },
  components: {
    BTable,
  },
};
</script>
`

const complete = `
<template>
  <div>
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Sort"
          label-for="sort-by-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-input-group size="sm">
            <b-form-select
              id="sort-by-select"
              v-model="sortBy"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">-- none --</option>
              </template>
            </b-form-select>

            <b-form-select
              v-model="sortDesc"
              :disabled="!sortBy"
              :aria-describedby="ariaDescribedby"
              size="sm"
              class="w-25"
            >
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Initial sort"
          label-for="initial-sort-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="initial-sort-select"
            v-model="sortDirection"
            :options="['asc', 'desc', 'last']"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''"
                >Clear</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          v-model="sortDirection"
          label="Filter On"
          description="Leave all unchecked to filter on all data"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="ariaDescribedby"
            class="mt-1"
          >
            <b-form-checkbox value="name">Name</b-form-checkbox>
            <b-form-checkbox value="age">Age</b-form-checkbox>
            <b-form-checkbox value="isActive">Active</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      @filtered="onFiltered"
      class="mt-24"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button
          variant="primary"
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="mr-8"
        >
          Info modal
        </b-button>
        <b-button variant="primary" size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? "Hide" : "Show" }} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li
              class="hp-p1-body"
              v-for="(value, key) in row.item"
              :key="key"
            >
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-row class="mt-16 align-items-center justify-content-end">
      <b-col class="hp-flex-none w-auto">
        <b-form-group
          label-for="per-page-select"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <b-pagination
          align="end"
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      ok-only
      @hide="resetInfoModal"
      header-class="align-items-center"
    >
      <template #modal-header="{ close }">
        <h5 class="mb-0">Modal title</h5>

        <b-button
          variant="text"
          @click="close()"
          class="btn-close bg-transparent p-0 d-flex align-items-center justify-content-center"
          style="min-height: 24px"
        >
          <i
            class="ri-close-line hp-text-color-dark-0 lh-1"
            style="font-size: 24px"
          ></i>
        </b-button>
      </template>

      <pre class="hp-p1-body">{{ infoModal.content }}</pre>
    </b-modal>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BButton,
  BTable,
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BFormInput,
  BFormSelect,
  BFormCheckboxGroup,
  BFormCheckbox,
  BPagination,
  BModal,
} from "bootstrap-vue";

export default {
  data() {
    return {
      items: [
        {
          isActive: true,
          age: 40,
          name: { first: "Dickerson", last: "Macdonald" },
        },
        { isActive: false, age: 21, name: { first: "Larsen", last: "Shaw" } },
        {
          isActive: false,
          age: 9,
          name: { first: "Mini", last: "Navarro" },
          _rowVariant: "success",
        },
        { isActive: false, age: 89, name: { first: "Geneva", last: "Wilson" } },
        { isActive: true, age: 38, name: { first: "Jami", last: "Carney" } },
        { isActive: false, age: 27, name: { first: "Essie", last: "Dunlap" } },
        { isActive: true, age: 40, name: { first: "Thor", last: "Macdonald" } },
        {
          isActive: true,
          age: 87,
          name: { first: "Larsen", last: "Shaw" },
          _cellVariants: { age: "danger", isActive: "warning" },
        },
        { isActive: false, age: 26, name: { first: "Mitzi", last: "Navarro" } },
        {
          isActive: false,
          age: 22,
          name: { first: "Genevieve", last: "Wilson" },
        },
        { isActive: true, age: 38, name: { first: "John", last: "Carney" } },
        { isActive: false, age: 29, name: { first: "Dick", last: "Dunlap" } },
      ],
      fields: [
        {
          key: "name",
          label: "Person full name",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
          class: "text-center",
        },
        {
          key: "isActive",
          label: "Is Active",
          formatter: (value, key, item) => {
            return value ? "Yes" : "No";
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: "actions", label: "Actions" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BTable,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BFormSelect,
    BFormCheckboxGroup,
    BFormCheckbox,
    BPagination,
    BModal,
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = \`Row index: \${index}\`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
`

export default { basic, styling, responsive, stacked, caption, busy, headerFooterCustom, sticky, stickyColumns, rowSelect, sorting, complete }