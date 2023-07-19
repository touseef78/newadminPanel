const basic = `
<template>
  <div>
    <div class="overflow-auto">
      <p class="mt-3 hp-p1-body">Current Page: {{ currentPage }}</p>

      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
    </div>

    <div class="mx-8 d-flex justify-content-end">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { BPagination, BTable } from "bootstrap-vue";

export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
      ],
    };
  },
  components: {
    BPagination,
    BTable,
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>
`

const buttonContent = `
<template>
  <div class="overflow-auto">
    <div class="mx-16">
      <!-- Use text in props -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
      ></b-pagination>

      <!-- Use emojis in props -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-text="⏮"
        prev-text="⏪"
        next-text="⏩"
        last-text="⏭"
        class="mt-8"
      ></b-pagination>

      <!-- Use HTML and sub-components in slots -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        class="mt-8"
      >
        <template #first-text
          ><span class="text-success">First</span></template
        >
        <template #prev-text
          ><span class="text-danger">Prev</span></template
        >
        <template #next-text
          ><span class="text-warning">Next</span></template
        >
        <template #last-text
          ><span class="text-info">Last</span></template
        >
        <template #ellipsis-text>
          <b-spinner small type="grow"></b-spinner>
          <b-spinner small type="grow"></b-spinner>
          <b-spinner small type="grow"></b-spinner>
        </template>
        <template #page="{ page, active }">
          <b v-if="active">{{ page }}</b>
          <i v-else>{{ page }}</i>
        </template>
      </b-pagination>
    </div>
  </div>
</template>

<script>
import { BPagination, BSpinner } from "bootstrap-vue";

export default {
  data() {
    return {
      rows: 100,
      perPage: 10,
      currentPage: 1,
    };
  },
  components: {
    BPagination,
    BSpinner,
  },
};
</script>
`

const goto = `
<template>
  <div class="overflow-auto">
    <div>
      <h6>Goto first button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        class="m-0"
      ></b-pagination>
    </div>

    <div class="mt-16">
      <h6>Goto last button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        last-number
        class="m-0"
      ></b-pagination>
    </div>

    <div class="mt-16">
      <h6>Goto first and last button number</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
        class="m-0"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { BPagination } from "bootstrap-vue";

export default {
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 5,
    };
  },
  components: {
    BPagination,
  },
};
</script>
`

const size = `
<template>
  <div class="overflow-auto">
    <div>
      <h6>Small</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="sm"
        class="m-0"
      ></b-pagination>
    </div>

    <div class="mt-16">
      <h6>Default</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        class="m-0"
      ></b-pagination>
    </div>

    <div class="mt-16">
      <h6>Large</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        size="lg"
        class="m-0"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { BPagination } from "bootstrap-vue";

export default {
  data() {
    return {
      rows: 100,
      currentPage: 1,
    };
  },
  components: {
    BPagination,
  },
};
</script>
`

const pill = `
<template>
  <div class="overflow-auto">
    <div>
      <h6>Small Pills</h6>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="sm"
        class="m-0"
      ></b-pagination>
    </div>

    <div class="mt-16">
      <h6>Default Pills</h6>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        class="m-0"
      ></b-pagination>
    </div>

    <div class="mt-16">
      <h6>Large Pills</h6>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="lg"
        class="m-0"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { BPagination } from "bootstrap-vue";

export default {
  data() {
    return {
      rows: 100,
      currentPage: 1,
    };
  },
  components: {
    BPagination,
  },
};
</script>
`

const alignment = `
<template>
  <div class="overflow-auto">
    <div>
      <h6>Left alignment (default)</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        class="m-0"
      ></b-pagination>
    </div>

    <div class="mt-16">
      <h6 class="text-center">Center alignment</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        align="center"
        class="m-0"
      ></b-pagination>
    </div>

    <div class="mt-16">
      <h6 class="text-right">Right (end) alignment</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        align="right"
        class="m-0"
      ></b-pagination>
    </div>

    <div class="mt-16">
      <h6 class="text-center">Fill alignment</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        align="fill"
        class="m-0"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { BPagination } from "bootstrap-vue";

export default {
  data() {
    return {
      rows: 100,
      currentPage: 3,
    };
  },
  components: {
    BPagination,
  },
};
</script>
`

export default { basic, buttonContent, goto, size, pill, alignment }