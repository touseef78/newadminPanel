<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Icon Only</h4>

        <p class="hp-p1-body">
          Button components can contain an Icon. This is done by setting the
          icon property or placing an Icon component within the Button.
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
        <div class="mb-8">
          <b-button variant="primary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="primary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <span>Y</span>
          </b-button>

          <b-button variant="outline-primary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="dashed-primary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>
          
          <b-button variant="primary" class="mb-8 mr-16 btn-icon-only">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>

          <b-button variant="primary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>
        </div>

        <div class="mb-8">
          <b-button variant="secondary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="secondary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <span>Y</span>
          </b-button>

          <b-button variant="outline-secondary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="dashed-secondary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>
          
          <b-button variant="secondary" class="mb-8 mr-16 btn-icon-only">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>

          <b-button variant="secondary" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>
        </div>

        <div class="mb-8">
          <b-button variant="danger" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="danger" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <span>Y</span>
          </b-button>

          <b-button variant="outline-danger" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="dashed-danger" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>
          
          <b-button variant="danger" class="mb-8 mr-16 btn-icon-only">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>

          <b-button variant="danger" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>
        </div>

        <div class="mb-8">
          <b-button variant="info" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="info" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <span>Y</span>
          </b-button>

          <b-button variant="outline-info" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="dashed-info" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>
          
          <b-button variant="info" class="mb-8 mr-16 btn-icon-only">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>

          <b-button variant="info" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>
        </div>

        <div class="mb-8">
          <b-button variant="success" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="success" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <span>Y</span>
          </b-button>

          <b-button variant="outline-success" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="dashed-success" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>
          
          <b-button variant="success" class="mb-8 mr-16 btn-icon-only">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>

          <b-button variant="success" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>
        </div>

        <div>
          <b-button variant="warning" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="warning" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <span>Y</span>
          </b-button>

          <b-button variant="outline-warning" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>

          <b-button variant="dashed-warning" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-search-line remix-icon"></i>
          </b-button>
          
          <b-button variant="warning" class="mb-8 mr-16 btn-icon-only">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>

          <b-button variant="warning" class="mb-8 mr-16 btn-icon-only rounded-circle">
            <i class="ri-arrow-right-s-line remix-icon"></i>
          </b-button>
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
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";

import code from "./code";

export default {
  data() {
    return {
      codeText: code.iconOnly,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
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
