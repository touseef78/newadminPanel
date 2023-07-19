<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Nav integration</h4>

        <p class="hp-p1-body">
          Integrate
          <a
            href="https://bootstrap-vue.org/docs/components/nav"
            target="_blank"
            ><code>&lt;b-nav&gt;</code></a
          >
          into card headers easily. <br /><br />
          <strong
            >Using the <code>header</code> slot or
            <code>&lt;b-card-header&gt;</code> sub-component:</strong
          >
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
        <b-card title="Card Title" body-class="text-center" header-tag="nav">
          <template #header>
            <b-nav card-header tabs>
              <b-nav-item active>Active</b-nav-item>
              <b-nav-item>Inactive</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
          </template>

          <b-card-text class="hp-p1-body">
            With supporting text below as a natural lead-in to additional
            content.
          </b-card-text>

          <b-button variant="primary">Go somewhere</b-button>
        </b-card>
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
  BCardText,
  BButton,
  BNav,
  BNavItem,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.navIntegration,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BButton,
    BNav,
    BNavItem,
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
