<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Variants</h4>

        <p class="hp-p1-body">
          Use class <code>modal-class="modal-{color}"</code>
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
        <b-button variant="primary" v-b-modal.modal-primary class="mb-8 mr-8">
          Primary
        </b-button>

        <b-button
          variant="secondary"
          v-b-modal.modal-secondary
          class="mb-8 mr-8"
        >
          Secondary
        </b-button>

        <b-button variant="success" v-b-modal.modal-success class="mb-8 mr-8">
          Success
        </b-button>

        <b-button variant="danger" v-b-modal.modal-danger class="mb-8 mr-8">
          Danger
        </b-button>

        <b-button variant="warning" v-b-modal.modal-warning class="mb-8 mr-8">
          Warning
        </b-button>

        <b-button variant="info" v-b-modal.modal-info class="mb-8 mr-8">
          Info
        </b-button>

        <b-modal
          :key="index"
          v-for="(variant, index) in variants"
          :id="`modal-${variant}`"
          :modal-class="`modal-${variant}`"
          hide-footer
          header-class="align-items-center"
        >
          <template #modal-header="{ close }">
            <h5 class="mb-0">Modal title</h5>

            <b-button
              variant="text"
              @click="close()"
              class="btn-close bg-transparent p-0 d-flex align-items-center justify-content-center"
              style="min-height: 24px"
            >
              <i
                class="ri-close-line hp-text-color-dark-0 lh-1"
                style="font-size: 24px"
              ></i>
            </b-button>
          </template>

          <p class="hp-p1-body mb-0">...</p>

          <div class="d-flex justify-content-end flex-wrap mt-32">
            <b-button variant="text" @click="$bvModal.hide('modal-' + variant)">
              Close
            </b-button>

            <b-button
              class="ml-16"
              :variant="variant"
              @click="$bvModal.hide('modal-' + variant)"
            >
              Ok
            </b-button>
          </div>
        </b-modal>
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
import { BRow, BCol, BCard, BButton, BModal } from "bootstrap-vue";
import code from "./code";

export default {
  data() {
    return {
      variants: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
      codeText: code.variants,
      codeActive: false,
      codeActiveClass: false,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BModal,
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
