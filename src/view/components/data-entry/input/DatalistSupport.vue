<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Datalist support</h4>

        <p class="hp-p1-body">
          Datalists are a native HTML tag <code>&lt;datalist&gt;</code> that
          contains a list of <code>&lt;option&gt;</code> tags. By assigning an
          ID to the datalist tag, the list can be references from a text input
          by adding a <code>list</code> attribute. <br /><br />
          This gives the input the behavior of a combo box or auto-complete,
          allowing existing values to be chosen, or new values to be entered.
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
        <b-form-input list="my-list-id"></b-form-input>

        <b-form-datalist id="my-list-id">
          <option>Manual Option</option>
          <option :key="size" v-for="size in sizes">{{ size }}</option>
        </b-form-datalist>
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
import { BRow, BCol, BCard, BButton, BFormInput, BFormDatalist } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      sizes: ["Small", "Medium", "Large", "Extra Large"],
      codeText: code.datalistSupport,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BFormInput,
    BFormDatalist,
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
