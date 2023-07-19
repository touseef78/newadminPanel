<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Avatar groups</h4>

        <p class="hp-p1-body">
          Group multiple avatars together by wrapping them in a
          <code>&lt;b-avatar-group&gt;</code> component:
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
        <b-avatar-group size="60px">
          <b-avatar></b-avatar>
          <b-avatar text="BV" variant="primary"></b-avatar>
          <b-avatar
            src="https://placekitten.com/300/300"
            variant="info"
          ></b-avatar>
          <b-avatar text="OK" variant="danger"></b-avatar>
          <b-avatar variant="warning"></b-avatar>
          <b-avatar
            src="https://placekitten.com/320/320"
            variant="dark"
          ></b-avatar>
          <b-avatar icon="music-note" variant="success"></b-avatar>
        </b-avatar-group>
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
import {
  BRow,
  BCol,
  BCard,
  BButton,
  BAvatarGroup,
  BAvatar,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.groups,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BAvatarGroup,
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
