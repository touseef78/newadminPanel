<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Button content</h4>

        <p class="hp-p1-body">
          For a full list of all available slots see the Slots section below.
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
import { BRow, BCol, BCard, BButton, BPagination, BSpinner } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      rows: 100,
      perPage: 10,
      currentPage: 1,
      codeText: code.buttonContent,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BPagination,
    BSpinner,
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
