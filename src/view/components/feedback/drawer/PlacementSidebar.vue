<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Placement</h4>

        <p class="hp-p1-body">
          By default the sidebar will be placed on the left side of the
          viewport. Set the <code>right</code> prop to <code>true</code> to have
          the sidebar appear on the right side of the viewport.
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
        <b-button variant="primary" v-b-toggle.sidebar-right>
          Toggle Sidebar
        </b-button>

        <b-sidebar
          id="sidebar-right"
          right
          shadow
          bg-variant="white"
          no-header
          body-class="pt-16"
        >
          <template #default="{ hide }">
            <div class="d-flex align-items-center justify-content-between mb-16 pb-24">
              <span class="font-weight-normal d-flex h5 mb-0">Title</span>

              <b-button
                variant="text"
                class="btn-close bg-transparent p-0 d-flex align-items-center justify-content-center"
                @click="hide"
              >
                <i
                  class="ri-close-line hp-text-color-dark-0 lh-1"
                  style="font-size: 24px"
                ></i>
              </b-button>
            </div>

            <p class="hp-p1-body">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
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
      codeText: code.placement,
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
