<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Rounding</h4>

        <p class="hp-p1-body">
          <code>&lt;b-avatar&gt;</code> renders with a circular border radius.
          You can change the rounding by setting the prop
          <code>rounded</code> to one of the values <code>true</code>,
          <code>'sm'</code>, <code>'lg'</code>, <code>'top'</code>,
          <code>'left'</code>, <code>'right'</code>, or <code>'bottom'</code>.
          When set to <code>true</code> (or the empty string <code>''</code>),
          it uses the Bootstrap default of medium rounding.
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
        <b-avatar class="mb-8 mr-8" rounded="sm" variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" rounded variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" rounded="lg" variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" rounded="top" variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" rounded="left" variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" rounded="right" variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" rounded="bottom" variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
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
import { BRow, BCol, BCard, BButton, BAvatar } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.rounding,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BAvatar,
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
