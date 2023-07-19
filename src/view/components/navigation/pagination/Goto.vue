<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Goto first/last button type</h4>

        <p class="hp-p1-body">
          If you prefer to have buttons with the first and last page number to
          go to the corresponding page, use the <code>first-number</code> and
          <code>last-number</code>
          props.
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
import { BRow, BCol, BCard, BButton, BPagination } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 5,
      codeText: code.goto,
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
