<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Toaster target</h4>

        <p class="hp-p1-body">
          BootstrapVue comes with the following "built-in" toaster names (and associated styles defined in SCSS):

          <ul class="hp-p1-body pl-18 mt-16 hp-list-disc">
            <li><code>b-toaster-top-right</code></li>
            <li><code>b-toaster-top-left</code></li>
            <li><code>b-toaster-top-center</code></li>
            <li><code>b-toaster-top-full</code></li>
            <li><code>b-toaster-bottom-right</code></li>
            <li><code>b-toaster-bottom-left</code></li>
            <li><code>b-toaster-bottom-center</code></li>
            <li><code>b-toaster-bottom-full</code></li>
          </ul>
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
        <b-button variant="primary" @click="toast('b-toaster-top-right')" class="mb-8 mr-8">b-toaster-top-right</b-button>
        <b-button variant="primary" @click="toast('b-toaster-top-left')" class="mb-8 mr-8">b-toaster-top-left</b-button>
        <b-button variant="primary" @click="toast('b-toaster-top-center')" class="mb-8 mr-8">b-toaster-top-center</b-button>
        <b-button variant="primary" @click="toast('b-toaster-top-full')" class="mb-8 mr-8">b-toaster-top-full</b-button>
        <b-button variant="primary" @click="toast('b-toaster-bottom-right', true)" class="mb-8 mr-8">b-toaster-bottom-right</b-button>
        <b-button variant="primary" @click="toast('b-toaster-bottom-left', true)" class="mb-8 mr-8">b-toaster-bottom-left</b-button>
        <b-button variant="primary" @click="toast('b-toaster-bottom-center', true)" class="mb-8 mr-8">b-toaster-bottom-center</b-button>
        <b-button variant="primary" @click="toast('b-toaster-bottom-full', true)" class="mb-8 mr-8">b-toaster-bottom-full</b-button>
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
import code from "./code";

export default {
  data() {
    return {
      counter: 0,
      codeText: code.target,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
  },
  methods: {
    toast(toaster, append = false) {
      this.counter++
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append
      })
    },
    
    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
