<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Badge avatars</h4>

        <p class="hp-p1-body">
          Easily add a badge to your avatar via the <code>badge</code> prop or
          <code>'badge'</code> slot, and the badge variant can be set via the
          <code>badge-variant</code> prop. The badge will scale with the size of
          the avatar.
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
        <b-avatar class="mb-8 mr-8 bg-primary-4 text-primary" badge variant="primary">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar
          badge
          badge-variant="danger"
          class="mb-8 mr-8"
          variant="primary"
        >
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar
          badge
          badge-variant="warning"
          class="mb-8 mr-8"
          variant="primary"
        >
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar
          badge
          badge-variant="success"
          class="mb-8 mr-8"
          variant="primary"
        >
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar
          badge
          badge-variant="info"
          class="mb-8 mr-8"
          variant="primary"
        >
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar
          badge
          badge-variant="secondary"
          class="mb-8 mr-8"
          variant="primary"
        >
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <b-avatar
          badge
          badge-variant="dark"
          class="mb-8 mr-8"
          variant="primary"
        >
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
      codeText: code.badge,
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
