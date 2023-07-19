const basic = `
<template>
  <div>
    <b-button variant="primary" v-b-modal.modal-1>
      Launch demo modal
    </b-button>

    <b-modal id="modal-1" hide-footer header-class="align-items-center">
      <template #modal-header="{ close }">
        <h5 class="mb-0">Modal title</h5>

        <b-button
          variant="text"
          @click="close()"
          class="btn-close bg-transparent p-0 d-flex align-items-center justify-content-center"
          style="min-height: 24px;"
        >
          <i
            class="ri-close-line hp-text-color-dark-0 lh-1"
            style="font-size: 24px"
          ></i>
        </b-button>
      </template>

      <p class="hp-p1-body mb-0">...</p>

      <div class="d-flex justify-content-end flex-wrap mt-32">
        <b-button variant="text" @click="$bvModal.hide('modal-1')">
          Close
        </b-button>

        <b-button
          class="ml-16"
          variant="primary"
          @click="$bvModal.hide('modal-1')"
        >
          Save changes
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BModal,
  },
};
</script>
`

const tooltipsPopovers = `
<template>
  <div>
    <b-button variant="primary" v-b-modal.modalPopover>Show Modal</b-button>

    <b-modal id="modalPopover" ok-only header-class="align-items-center">
      <template #modal-header="{ close }">
        <h5 class="mb-0">Modal with Popover</h5>

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

      <p class="hp-p1-body">
        This
        <b-button variant="primary" v-b-popover="'Popover inside a modal!'" title="Popover">
          Button
        </b-button>
        triggers a popover on click.
      </p>

      <p class="hp-p1-body">
        This
        <a href="#" v-b-tooltip title="Tooltip in a modal!">Link</a> will
        show a tooltip on hover.
      </p>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BModal,
  },
};
</script>
`

const sizing = `
<template>
  <div>
    <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
    <b-button v-b-modal.modal-lg variant="primary">lg modal</b-button>
    <b-button v-b-modal.modal-sm variant="primary">sm modal</b-button>

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
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BModal,
  },
};
</script>
`

const scrolling = `
<template>
  <div>
    <b-button variant="primary" v-b-modal.modal-tall>Launch overflowing modal</b-button>
    <b-button variant="primary" v-b-modal.modal-scrollable>Launch scrolling modal</b-button>

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
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BModal,
  },
};
</script>
`

const vertically = `
<template>
  <div>
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
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BModal,
  },
};
</script>
`

const variants = `
<template>
  <div>
    <b-button variant="primary" v-b-modal.modal-primary>Primary</b-button>
    <b-button variant="secondary" v-b-modal.modal-secondary>Secondary</b-button>
    <b-button variant="success" v-b-modal.modal-success>Success</b-button>
    <b-button variant="danger" v-b-modal.modal-danger>Danger</b-button>
    <b-button variant="warning" v-b-modal.modal-warning>Warning</b-button>
    <b-button variant="info" v-b-modal.modal-info>Info</b-button>

    <b-modal
      :key="index"
      v-for="(variant, index) in variants"
      :id="\`modal-\${variant}\`"
      :modal-class="\`modal-\${variant}\`"
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
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";

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
    };
  },
  components: {
    BButton,
    BModal,
  },
};
</script>
`

const backdrop = `
<template>
  <div>
    <b-button variant="primary" v-b-modal.modal-no-backdrop>
      Open modal
    </b-button>

    <b-modal
      id="modal-no-backdrop"
      hide-backdrop
      content-class="shadow"
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

      <p class="hp-p1-body">
        We've added the utility class <code>'shadow'</code>
        to the modal content for added effect.
      </p>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BModal,
  },
};
</script>
`

const multiple = `
<template>
  <div>
    <b-button variant="primary" v-b-modal.modal-multi-1>Open First Modal</b-button>

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
</template>

<script>
import { BButton, BModal } from "bootstrap-vue";

export default {
  components: {
    BButton,
    BModal,
  },
};
</script>
`

const preventClosing = `
<template>
  <div>
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
</template> 

<script>
import { BButton, BModal, BFormGroup, BFormInput } from "bootstrap-vue";

export default {
  data() {
    return {
      name: "",
      nameState: null,
      submittedNames: [],
    };
  },
  components: {
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
  },
};
</script>
`

const confirm = `
<template>
  <div>
    <b-button variant="primary" @click="showMsgBoxOne">
      Simple msgBoxConfirm
    </b-button>
    <p class="hp-p1-body mb-0">Return value: {{ String(boxOne) }}</p>

    <b-button variant="primary" @click="showMsgBoxTwo">
      msgBoxConfirm with options
    </b-button>
    <p class="hp-p1-body mb-0">Return value: {{ String(boxTwo) }}</p>
  </div>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  data() {
    return {
      boxOne: "",
      boxTwo: "",
    };
  },
  components: {
    BButton,
  },
  methods: {
    showMsgBoxOne() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure?", {
          cancelVariant: "text",
        })
        .then((value) => {
          this.boxOne = value;
        })
        .catch((err) => {
          // An error occurred
        });
    },
    showMsgBoxTwo() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete everything.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          cancelVariant: "text",
          footerClass: "p-2",
          hideHeaderClose: true,
          centered: true,
        })
        .then((value) => {
          this.boxTwo = value;
        })
        .catch((err) => {
          // An error occurred
        });
    },
  },
};
</script>
`

export default { basic, tooltipsPopovers, sizing, scrolling, vertically, variants, backdrop, multiple, preventClosing, confirm }