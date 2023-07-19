<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Modal sizing</h4>

        <p class="hp-p1-body">
          Modals have three optional sizes, available via the prop
          <code>size</code>. These sizes kick in at certain breakpoints to avoid
          horizontal scrollbars on narrower viewports. Valid optional sizes are
          <code>sm</code>, <code>lg</code>, and <code>xl</code>.
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
        <b-button v-b-modal.modal-xl variant="primary" class="mb-8 mr-8"
          >xl modal</b-button
        >
        <b-button v-b-modal.modal-lg variant="primary" class="mb-8 mr-8"
          >lg modal</b-button
        >
        <b-button v-b-modal.modal-sm variant="primary" class="mb-8 mr-8"
          >sm modal</b-button
        >

        <b-modal
          id="modal-xl"
          size="xl"
          hide-footer
          header-class="align-items-center"
        >
          <template #modal-header="{ close }">
            <h5 class="mb-0">Extra Large Modal</h5>

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

          <p class="hp-p1-body">Hello Extra Large Modal!</p>

          <div class="d-flex justify-content-end flex-wrap mt-32">
            <b-button variant="text" @click="$bvModal.hide('modal-xl')">
              Close
            </b-button>

            <b-button
              class="ml-16"
              variant="primary"
              @click="$bvModal.hide('modal-xl')"
            >
              Ok
            </b-button>
          </div>
        </b-modal>

        <b-modal
          id="modal-lg"
          size="lg"
          hide-footer
          header-class="align-items-center"
        >
          <template #modal-header="{ close }">
            <h5 class="mb-0">Hello Large Modal!</h5>

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

          <div class="d-flex justify-content-end flex-wrap mt-32">
            <b-button variant="text" @click="$bvModal.hide('modal-lg')">
              Close
            </b-button>

            <b-button
              class="ml-16"
              variant="primary"
              @click="$bvModal.hide('modal-lg')"
            >
              Ok
            </b-button>
          </div>
        </b-modal>

        <b-modal
          id="modal-sm"
          size="sm"
          hide-footer
          header-class="align-items-center"
        >
          <template #modal-header="{ close }">
            <h5 class="mb-0">Small Modal!</h5>

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

          <p class="hp-p1-body">Hello Small Modal!</p>

          <div class="d-flex justify-content-end flex-wrap mt-32">
            <b-button variant="text" @click="$bvModal.hide('modal-sm')">
              Close
            </b-button>

            <b-button
              class="ml-16"
              variant="primary"
              @click="$bvModal.hide('modal-sm')"
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
      codeText: code.sizing,
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
