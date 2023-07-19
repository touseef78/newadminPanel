<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Striped backgrounds</h4>

        <p class="hp-p1-body">
          Set <code>striped</code> to apply a stripe via CSS gradient over the
          progress bar's background variant.
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

      <div class="col-12 mt-16">
        <b-progress
          :value="25"
          variant="success"
          :striped="striped"
        ></b-progress>
        <b-progress
          :value="50"
          variant="info"
          :striped="striped"
          class="mt-8"
        ></b-progress>
        <b-progress
          :value="75"
          variant="warning"
          :striped="striped"
          class="mt-8"
        ></b-progress>
        <b-progress
          :value="100"
          variant="danger"
          :striped="striped"
          class="mt-8"
        ></b-progress>

        <b-button variant="primary" @click="striped = !striped" class="mt-16">
          {{ striped ? "Remove" : "Add" }} Striped
        </b-button>
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
import { BRow, BCol, BCard, BButton, BProgress } from "bootstrap-vue";
import code from "./code";

export default {
  data() {
    return {
      striped: true,
      codeText: code.stripedBackgrounds,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BProgress,
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
