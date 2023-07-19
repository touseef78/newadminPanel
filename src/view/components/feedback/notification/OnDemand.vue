<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Toasts on demand</h4>

        <p class="hp-p1-body">
          Generate a dynamic toast from anywhere in your app via the
          <code>this.$bvToast</code> Vue component instance injection, without
          the need to place a <code>&lt;b-toast&gt;</code> component in your
          app. 
          <br />
          <br />
          Use the <code>this.$bvToast.toast()</code> method to generate on demand toasts. The
          method accepts two arguments: 
          <br />
          <br />
          <ul class="hp-p1-body pl-18 mb-16 hp-list-disc">
            <li>
              <code>message</code>: the content of the toast body (either a string, or an array of <code>VNodes</code>). Required. Toasts with an empty message will not be shown. See the Advanced usage section for an example of passing an array of <code>VNodes</code> as the message.
            </li>
          
            <li>
              <code>options</code>: an optional options object for providing a title and/or additional configuration options. The <code>title</code> option can be either a string or an array of <code>VNodes</code>
            </li>
          </ul>
          The options argument accepts most of the props that the
          <code>&lt;b-toast&gt;</code> component accepts (with the exception of
          <code>static</code>, and <code>visible</code>) in camelCase name format instead of kebab-case.
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
        <div class="d-flex flex-wrap">
          <b-button variant="primary" @click="makeToast()" class="mb-8 mr-8">Show Toast</b-button>
          <b-button variant="primary" @click="makeToast(true)" class="mb-8 mr-8">Show Toast (appended)</b-button>
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
import { BRow, BCol, BCard, BButton, BToast } from "bootstrap-vue";
import code from "./code";

export default {
  data() {
    return {
      toastCount: 0,
      codeText: code.onDemand,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BToast,
  },
  methods: {
     makeToast(append = false) {
      this.toastCount++
      this.$bvToast.toast('This is toast number ' + this.toastCount, {
        title: 'Yoda',
        autoHideDelay: 5000,
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
