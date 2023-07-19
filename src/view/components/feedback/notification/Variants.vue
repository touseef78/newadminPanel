<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Variants</h4>

        <p class="hp-p1-body">
          BootstrapVue toasts provide custom CSS to define color variants.
          Variants follow the standard Bootstrap v4 variant names. If you have
          custom SCSS defined Bootstrap color theme variants, the toast custom
          SCSS will automatically create toast variants for you (refer to the
          Theming reference section).
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
          <b-button
            variant="primary"
            @click="makeToast('primary')"
            class="mb-8 mr-8"
            >Primary</b-button
          >
          <b-button
            variant="secondary"
            @click="makeToast('secondary')"
            class="mb-8 mr-8"
            >Secondary</b-button
          >
          <b-button
            variant="danger"
            @click="makeToast('danger')"
            class="mb-8 mr-8"
            >Danger</b-button
          >
          <b-button
            variant="warning"
            @click="makeToast('warning')"
            class="mb-8 mr-8"
            >Warning</b-button
          >
          <b-button
            variant="success"
            @click="makeToast('success')"
            class="mb-8 mr-8"
            >Success</b-button
          >
          <b-button variant="info" @click="makeToast('info')" class="mb-8 mr-8"
            >Info</b-button
          >
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
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";
import code from "./code";

export default {
  data() {
    return {
      codeText: code.variants,
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
    makeToast(variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
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
