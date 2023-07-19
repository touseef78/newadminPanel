<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Sizing</h4>

        <p class="hp-p1-body">
          By default, avatars are sized to <code>2.5em</code> (which is relative
          to the current font size). You can change the size of the avatar by
          changing the current font size, or use the prop <code>size</code> to
          specify an explicit size. The sizes <code>sm</code>,
          <code>md</code> and <code>lg</code> default to <code>1.5em</code>,
          <code>2.5em</code> and <code>3.5em</code>. Numbers get converted to
          pixel values. Any other value must include the units (such as
          <code>px</code>, <code>em</code>, or <code>rem</code>).
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
        <b-avatar class="mb-8 mr-8" variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" size="sm" variant="primary">
          <i class="iconly-Curved-User" style="font-size: 14px"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" size="lg" variant="primary">
          <i class="iconly-Curved-User" style="font-size: 32px"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" :size="24" variant="primary">
          <i class="iconly-Curved-User" style="font-size: 14px"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" size="3em" variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar class="mb-8 mr-8" size="72px" variant="primary">
          <i class="iconly-Curved-User" style="font-size: 44px"></i>
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
      codeText: code.sizing,
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
