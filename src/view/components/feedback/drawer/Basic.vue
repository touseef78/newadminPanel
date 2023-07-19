<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Basic</h4>

        <p class="hp-p1-body">
          You can place almost any content inside the
          <code>&lt;b-sidebar&gt;</code> optionally scoped default slot, such as
          text, buttons, forms, images, or vertical navs. <br /><br />
          The component supports a header and built in close button, of which
          you can optionally disable and provide your own header (if needed),
          and can be easily toggled with our v-b-toggle directive.
          <br /><br />
          The component has minimal default styling, which provides you with
          great flexibility in laying out the content of the sidebar.
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
        <b-button variant="primary" v-b-toggle.sidebar-1>
          Toggle Sidebar
        </b-button>

        <b-sidebar id="sidebar-1" shadow bg-variant="white" no-header body-class="pt-16">
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
      codeText: code.basic,
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
