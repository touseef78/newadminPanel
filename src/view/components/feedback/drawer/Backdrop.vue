<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Backdrop</h4>

        <p class="hp-p1-body">
          Add a basic backdrop when the side bar is open via the
          <code>backdrop</code> prop. When set to <code>true</code>, the sidebar
          will show an opaque backdrop. Clicking on the backdrop will close the
          sidebar, unless the <code>no-close-on-backdrop</code> prop is set to
          <code>true</code>.
          <br />
          <br />
          Optionally (as of BootstrapVue v2.15.0+) you can use the
          <code>backdrop-variant</code> prop to control the theme color variant
          of the backdrop. The default backdrop variant is <code>dark</code>.
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
        <b-button variant="primary" v-b-toggle.sidebar-backdrop>
          Toggle Sidebar
        </b-button>

        <b-sidebar
          id="sidebar-backdrop"
          :backdrop-variant="variant"
          backdrop
          shadow
          bg-variant="white"
          no-header
          body-class="pt-16"
        >
          <template #default="{ hide }">
            <div
              class="d-flex align-items-center justify-content-between mb-16 pb-24"
            >
              <span class="font-weight-normal d-flex h5 mb-0">Sidebar with backdrop</span>

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

            <b-form-group label="Backdrop variant" label-for="backdrop-variant">
              <b-form-select
                id="backdrop-variant"
                v-model="variant"
                :options="variants"
              ></b-form-select>
            </b-form-group>
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
import {
  BRow,
  BCol,
  BCard,
  BButton,
  BSidebar,
  BFormGroup,
  BFormSelect,
} from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      variant: "dark",
      variants: [
        "transparent",
        "white",
        "light",
        "dark",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
      codeText: code.backdrop,
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
    BFormGroup,
    BFormSelect,
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
