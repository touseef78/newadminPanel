<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Sizes</h4>

        <p class="hp-p1-body">
          There are three sizes available to a numeric input box. By default,
          the size is 40px. The two additional sizes are large and small which
          means 48px and 32px, respectively.
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
        <input-number
          :min="1"
          :max="10"
          :value="1"
          size="lg"
          class="mr-16 mb-8"
        />
        <input-number :min="1" :max="10" :value="1" class="mr-16 mb-8" />
        <input-number
          :min="1"
          :max="10"
          :value="1"
          size="sm"
          class="mr-16 mb-8"
        />
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
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";

import InputNumber from "./InputNumber.vue";
import code from "./code";

export default {
  data() {
    return {
      codeText: code.sizes,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    InputNumber,
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
