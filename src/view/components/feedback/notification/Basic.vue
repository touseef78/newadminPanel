<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Basic</h4>

        <p class="hp-p1-body">
          To encourage extensible and predictable toasts, we recommend providing
          a header (title) and body. Toast headers use the style
          <code>'display: flex'</code>, allowing easy alignment of content
          thanks to Bootstrap's margin and flexbox utility classes. Toasts are
          slightly translucent, too, so they blend over whatever they might
          appear over. For browsers that support the
          <code>backdrop-filter</code> CSS property, they also attempt to blur
          the elements under the toast.
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
        <b-button variant="primary" @click="$bvToast.show('example-toast')">
          Show toast
        </b-button>

        <div class="bg-black-100 hp-bg-dark-80 rounded p-32 mt-8">
          <b-toast
            id="example-toast"
            :visible="true"
            static
            no-auto-hide
            no-close-button
          >
            <template #toast-title>
              <div
                class="d-flex align-items-center justify-content-between w-100"
              >
                <div class="d-flex align-items-center">
                  <img
                    v-bind:src="require('@/assets/img/logo/logo-small.svg')"
                    class="mr-8"
                    alt="Logo"
                    height="32"
                  />
                  <strong>Yoda</strong>
                </div>

                <div class="d-flex align-items-center">
                  <small>11 mins ago</small>
                  <b-button
                    variant="text"
                    class="p-0 ml-8 bg-transparent"
                    @click="$bvToast.hide('example-toast')"
                  >
                    <i
                      class="ri-close-line hp-text-color-dark-0 lh-1"
                      style="font-size: 24px"
                    ></i>
                  </b-button>
                </div>
              </div>
            </template>

            <span>Hello, world! This is a toast message.</span>
          </b-toast>
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
import { BRow, BCol, BCard, BButton, BToast } from "bootstrap-vue";
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
    BToast,
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
