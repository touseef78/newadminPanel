<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Group overlap</h4>

        <p class="hp-p1-body">
          By default child avatars inside a
          <code>&lt;b-avatar-group&gt;</code> will overlap by a factor of
          <code>0.3</code> (relative to the size of the avatar). You can control
          the overlap amount by setting the <code>overlap</code> prop to a value
          between <code>0</code> and <code>1</code>, where <code>0</code> means
          no overlap and <code>1</code> means 100% overlap.
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
        <b-avatar-group overlap="0.65">
          <b-avatar variant="primary">
            <i class="iconly-Curved-User"></i>
          </b-avatar>
          <b-avatar variant="primary">
            <i class="iconly-Curved-User"></i>
          </b-avatar>
          <b-avatar variant="primary">
            <i class="iconly-Curved-User"></i>
          </b-avatar>
          <b-avatar variant="primary">
            <i class="iconly-Curved-User"></i>
          </b-avatar>
          <b-avatar variant="primary">
            <i class="iconly-Curved-User"></i>
          </b-avatar>
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
      codeText: code.groupOverlap,
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
