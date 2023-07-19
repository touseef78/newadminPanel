<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Icon content</h4>

        <p class="hp-p1-body">
          Easily use one of
          <a href="https://bootstrap-vue.org/docs/icons" target="_blank"
            ><strong>BootstrapVue's icons</strong></a
          >
          as the avatar content via the <code>icon</code> prop. The prop should
          be set to a valid icon name. Icons will scale respective to the
          <a
            href="https://bootstrap-vue.org/docs/components/avatar#sizing"
            target="_blank"
            ><strong>size prop</strong></a
          >.
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
        <b-avatar class="mb-8 mr-8" variant="primary" icon="people-fill"></b-avatar>
        <b-avatar class="mb-8 mr-8" variant="primary" icon="star-fill"></b-avatar>
        <b-avatar class="mb-8 mr-8" variant="primary" icon="music-note"></b-avatar>
        <b-avatar class="mb-8 mr-8" variant="primary" icon="star-fill" size="4em"></b-avatar>
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
      codeText: code.iconContent,
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
