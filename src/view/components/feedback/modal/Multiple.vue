<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Multiple modal support</h4>

        <p class="hp-p1-body">
          Unlike native Bootstrap v4, BootstrapVue supports multiple modals
          opened at the same time.
          <br />
          To disable stacking for a specific modal, just set the prop
          <code>no-stacking</code> on the
          <code>&lt;b-modal&gt;</code> component. This will hide the modal
          before another modal is shown.
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
        <b-button variant="primary" v-b-modal.modal-multi-1
          >Open First Modal</b-button
        >

        <b-modal
          id="modal-multi-1"
          size="lg"
          ok-only
          no-stacking
          header-class="align-items-center"
        >
          <template #modal-header="{ close }">
            <h5 class="mb-0">First Modal</h5>

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

          <p class="hp-p1-body">...</p>

          <b-button variant="primary" v-b-modal.modal-multi-2>
            Open Second Modal
          </b-button>
        </b-modal>

        <b-modal id="modal-multi-2" ok-only header-class="align-items-center">
          <template #modal-header="{ close }">
            <h5 class="mb-0">Second Modal</h5>

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

          <p class="my-2">Second Modal</p>

          <b-button variant="primary" v-b-modal.modal-multi-3 size="sm">
            Open Third Modal
          </b-button>
        </b-modal>

        <b-modal id="modal-multi-3" size="sm" ok-only header-class="align-items-center">
          <template #modal-header="{ close }">
            <h5 class="mb-0">Third Modal</h5>

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

          <p class="my-1">Third Modal</p>
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
      codeText: code.multiple,
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
