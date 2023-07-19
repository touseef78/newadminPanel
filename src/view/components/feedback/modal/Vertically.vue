<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Vertically centered modal</h4>

        <p class="hp-p1-body">
          Vertically center your modal in the viewport by setting the
          <code>centered</code> prop.
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
        <b-button variant="primary" v-b-modal.modal-center>
          Launch centered modal
        </b-button>

        <b-modal
          id="modal-center"
          centered
          cancel-variant="text"
          header-class="align-items-center"
        >
          <template #modal-header="{ close }">
            <h5 class="mb-0">Modal Title</h5>

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
      codeText: code.vertically,
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
