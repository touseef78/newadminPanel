<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Scrolling long content</h4>

        <p class="hp-p1-body">
          When modals become too long for the user's viewport or device, they
          scroll independent of the page itself. Try the demo below to see what
          we mean.
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
        <b-button variant="primary" v-b-modal.modal-tall
          >Launch overflowing modal</b-button
        >

        <b-modal
          id="modal-tall"
          cancel-variant="text"
          header-class="align-items-center"
        >
          <template #modal-header="{ close }">
            <h5 class="mb-0">Overflowing Content</h5>

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

          <p class="hp-p1-body mb-0" v-for="i in 20" :key="i">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </b-modal>

        <p class="hp-p1-body mt-32">
          You can also create a scrollable modal that allows the scrolling of
          the modal body by setting the prop <code>scrollable</code> to
          <code>true</code>.
        </p>

        <b-button variant="primary" v-b-modal.modal-scrollable
          >Launch scrolling modal</b-button
        >

        <b-modal
          id="modal-scrollable"
          scrollable
          cancel-variant="text"
          header-class="align-items-center"
        >
          <template #modal-header="{ close }">
            <h5 class="mb-0">Scrollable Content</h5>

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

          <p class="hp-p1-body mb-0" v-for="i in 20" :key="i">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
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
      codeText: code.scrolling,
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
