<template>
  <b-card>
    <b-row class="justify-content-between">
      <b-col class="pr-md-32 pr-md-120">
        <h4>Prevent closing</h4>

        <p class="hp-p1-body">
          To prevent <code>&lt;b-modal&gt;</code> from closing (for example when
          validation fails). you can call the
          <code>.preventDefault()</code> method of the event object passed to
          your <code>ok</code> (<strong>OK</strong> button),
          <code>cancel</code> (<strong>Cancel</strong> button), close (modal
          header close button) and <code>hide</code> event handlers. Note that
          <code>.preventDefault()</code>, when used, <strong>must</strong> be
          called synchronously, as async is not supported.
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
        <b-button variant="primary" v-b-modal.modal-prevent-closing>
          Open Modal
        </b-button>

        <div class="mt-3 hp-p1-body">
          Submitted Names:
          <div v-if="submittedNames.length === 0">--</div>

          <ul v-else class="pl-18 mt-8 hp-list-disc">
            <li :key="index" v-for="(name, index) in submittedNames">
              {{ name }}
            </li>
          </ul>
        </div>

        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
          cancel-variant="text"
          header-class="align-items-center"
        >
          <template #modal-header="{ close }">
            <h5 class="mb-0">Submit Your Name</h5>

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

          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
              :state="nameState"
            >
              <b-form-input
                id="name-input"
                v-model="name"
                :state="nameState"
                required
              ></b-form-input>
            </b-form-group>
          </form>
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
import {
  BRow,
  BCol,
  BCard,
  BButton,
  BModal,
  BFormGroup,
  BFormInput,
} from "bootstrap-vue";
import code from "./code";

export default {
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: [],
      codeText: code.preventClosing,
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
    BFormGroup,
    BFormInput,
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },

    codeClick() {
      this.codeActive = !this.codeActive;

      setTimeout(() => {
        this.codeActiveClass = !this.codeActiveClass;
      }, 100);
    },
  },
};
</script>
