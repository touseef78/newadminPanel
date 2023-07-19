<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Hiding the default header</h4>

        <p class="hp-p1-body">
          You can disable the default header (including the close button) via
          the <code>no-header</code> prop. Note that you will need to provide a
          method of closing the sidebar. The <code>default</code> slot is
          scoped, which includes a <code>hide()</code> method that can be used
          to close the sidebar.
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
        <b-button variant="primary" v-b-toggle.sidebar-no-header>
          Toggle Sidebar
        </b-button>

        <b-sidebar
          id="sidebar-no-header"
          aria-labelledby="sidebar-no-header-title"
          no-header
          shadow
          bg-variant="white"
          body-class="pt-16"
        >
          <template #default="{ hide }">
            <h5 id="sidebar-no-header-title" class="mb-16 pb-24">Custom header sidebar</h5>

            <p class="hp-p1-body">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>

            <b-button variant="primary" block @click="hide">
              Close Sidebar
            </b-button>
          </template>
        </b-sidebar>
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
import { BRow, BCol, BCard, BButton, BSidebar } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.hiding,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BSidebar,
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
