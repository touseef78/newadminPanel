<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Link</h4>

        <p class="hp-p1-body">
          Fancy an avatar as a link or router link? Simply set either the
          <code>href</code> or <code>to</code> props (respectively). The
          <code>to</code> prop can either be a string path, or a
          <code>Location</code> object. The <code>to</code> prop requires that
          <code>Vue router</code> (or equivalent) be installed.
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
        <b-list-group>
          <b-list-group-item>
            <b-avatar
              href="#foo"
              variant="primary"
              text="FF"
              class="align-baseline mr-8 hp-bg-dark-primary"
            ></b-avatar>
            Button Text Avatar
          </b-list-group-item>

          <b-list-group-item>
            <b-avatar
              href="#bar"
              :src="require('@/assets/img/memoji/memoji-1.png')"
              class="mr-8"
              variant="none"
            ></b-avatar>
            Button Image Avatar
          </b-list-group-item>

          <b-list-group-item>
            <b-avatar
              href="#baz"
              icon="star-fill"
              class="align-center mr-8 hp-bg-dark-secondary"
            ></b-avatar>
            Button Icon Avatar
          </b-list-group-item>
        </b-list-group>
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
  BAvatar,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.link,
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
    BListGroup,
    BListGroupItem,
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
