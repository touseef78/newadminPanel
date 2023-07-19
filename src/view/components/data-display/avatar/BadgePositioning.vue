<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Badge positioning</h4>

        <p class="hp-p1-body">
          By default the badge appears on the bottom right of the avatar. You
          can use the <code>badge-top</code> and
          <code>badge-right</code> boolean props to switch the sides. Combine
          both props to move the badge to the top right of the avatar.
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
        <div>
          <b-avatar
            badge
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-left
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-top
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-left
            badge-top
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
        </div>

        <p class="hp-p1-body mt-24">
          Use the <code>badge-offset</code> prop to control the offset of the
          badge. The <code>badge-offset</code> must be a valid CSS length string
          (i.e. <code>'2px'</code>, <code>'-2px'</code>, <code>'0.5em'</code>,
          etc.). Positive values will move the badge inward, while negative
          values will move the badge outward.
        </p>

        <div>
          <b-avatar
            badge
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-offset="-0.5em"
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-offset="-2px"
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-offset="2px"
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-top
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-top
            badge-offset="-0.5em"
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-top
            badge-offset="-2px"
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
          <b-avatar
            badge
            badge-top
            badge-offset="2px"
            variant="none"
            class="mb-8 mr-8"
            :src="require('@/assets/img/memoji/memoji-1.png')"
          />
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
import { BRow, BCol, BCard, BButton, BAvatar } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.badgePositioning,
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
