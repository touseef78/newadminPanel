<template>
  <b-row>
    <b-col cols="12" md="8">
      <h2>Personal Informations</h2>
      <p class="hp-p1-body mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        sodales sit amet nunc et vehicula. Mauris sed lectus nisi.
      </p>
    </b-col>

    <div class="divider mx-16 border-black-40 hp-border-color-dark-80"></div>

    <b-col cols="12" md="8">
      <h3>About</h3>
      <p class="hp-p1-body mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        sodales sit amet nunc et vehicula. Mauris sed lectus nisi. Suspendisse
        velit mi, pretium non euismod vitae Suspendisse velit mi, pretium non
        euismod vitae
      </p>
    </b-col>

    <div class="divider mx-16 border-black-40 hp-border-color-dark-80"></div>

    <b-col cols="12">
      <b-row align-v="center" align-h="between">
        <b-col cols="12" md="6">
          <h3>Contact</h3>
        </b-col>

        <b-col cols="12" md="6" class="hp-profile-action-btn text-right">
          <b-button
            variant="primary"
            class="btn-ghost"
            v-b-modal.modal-edit-contact
          >
            Edit
          </b-button>
        </b-col>

        <b-col cols="12" class="hp-profile-content-list mt-8 pb-0 pb-sm-120">
          <ul>
            <li>
              <span class="hp-p1-body">Full Name</span>
              <span
                class="mt-0 mt-sm-4 hp-p1-body text-black-100 hp-text-color-dark-0"
              >
                Edward Yıldırım
              </span>
            </li>
            <li class="mt-18">
              <span class="hp-p1-body">Display Name</span>
              <span
                class="mt-0 mt-sm-4 hp-p1-body text-black-100 hp-text-color-dark-0"
              >
                Edward.3
              </span>
            </li>
            <li class="mt-18">
              <span class="hp-p1-body">Email</span>
              <span
                class="mt-0 mt-sm-4 hp-p1-body text-black-100 hp-text-color-dark-0"
              >
                Add Email
              </span>
            </li>
            <li class="mt-18">
              <span class="hp-p1-body">Phone</span>
              <a
                class="mt-0 mt-sm-4 hp-p1-body text-black-100 hp-text-color-dark-0"
                href="tel:+900374323"
              >
                +90 037 43 23
              </a>
            </li>
            <li class="mt-18">
              <span class="hp-p1-body">Date of Birth</span>
              <span
                class="mt-0 mt-sm-4 hp-p1-body text-black-100 hp-text-color-dark-0"
              >
                02/03/94
              </span>
            </li>
            <li class="mt-18">
              <span class="hp-p1-body">Address</span>
              <span
                class="mt-0 mt-sm-4 hp-p1-body text-black-100 hp-text-color-dark-0"
              >
                Lorem ipsum dolor sit 07/6
              </span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-col>

    <div class="divider mx-16 border-black-40 hp-border-color-dark-80"></div>

    <b-col cols="12">
      <b-row align-v="center" align-h="between">
        <b-col cols="12" md="6">
          <h3>Preferance</h3>
        </b-col>

        <b-col cols="12" md="6" class="hp-profile-action-btn text-right">
          <b-button
            variant="primary"
            class="btn-ghost"
            v-b-modal.modal-edit-Preferance
          >
            Edit
          </b-button>
        </b-col>

        <b-col cols="12" class="hp-profile-content-list mt-8">
          <ul>
            <li class="mt-18">
              <span class="hp-p1-body">Language</span>
              <span
                class="mt-0 mt-sm-4 hp-p1-body text-black-100 hp-text-color-dark-0"
              >
                English
              </span>
            </li>
            <li class="mt-18">
              <span class="hp-p1-body">Date Format</span>
              <span
                class="mt-0 mt-sm-4 hp-p1-body text-black-100 hp-text-color-dark-0"
              >
                YYY.d.M
              </span>
            </li>
            <li class="mt-18">
              <span class="hp-p1-body">Timezone</span>
              <span
                class="mt-0 mt-sm-4 hp-p1-body text-black-100 hp-text-color-dark-0"
              >
                Cairo (GMT+3)
              </span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-col>

    <b-modal
      id="modal-edit-contact"
      cancel-variant="text"
      body-class="py-48"
      header-class="align-items-center flex-wrap pt-16 pb-0 px-0"
      centered
      hide-footer
      modal-class="hp-profile-modal-1"
    >
      <template #modal-header="{ close }">
        <div
          class="w-100 d-flex align-items-center justify-content-between mb-16 px-24"
        >
          <h5 class="mb-0">Contact Edit</h5>

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
        </div>

        <div class="divider my-0 p-0"></div>
      </template>

      <form>
        <b-row>
          <b-col cols="12">
            <b-form-group label="Full Name">
              <b-form-input type="text"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="12" class="mt-8">
            <b-form-group label="Display Name">
              <b-form-input type="text"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="12" class="mt-8">
            <b-form-group label="Email">
              <b-form-input type="email"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="12" class="mt-8">
            <b-form-group label="Phone">
              <b-form-input type="text" maxlength="14"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="12" class="mt-8 mb-8">
            <b-form-group label="Address">
              <b-form-textarea></b-form-textarea>
            </b-form-group>
          </b-col>

          <b-col cols="6 pr-12">
            <b-button
              variant="primary"
              block
              @click="$bvModal.hide('modal-edit-contact')"
            >
              Edit
            </b-button>
          </b-col>

          <b-col cols="6 pl-12">
            <b-button
              variant="none"
              block
              @click="$bvModal.hide('modal-edit-contact')"
            >
              Cancel
            </b-button>
          </b-col>
        </b-row>
      </form>
    </b-modal>

    <b-modal
      id="modal-edit-Preferance"
      cancel-variant="text"
      body-class="py-48"
      header-class="align-items-center flex-wrap pt-16 pb-0 px-0"
      centered
      hide-footer
      modal-class="hp-profile-modal-2"
    >
      <template #modal-header="{ close }">
        <div
          class="w-100 d-flex align-items-center justify-content-between mb-16 px-24"
        >
          <h5 class="mb-0">Preferance Edit</h5>

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
        </div>

        <div class="divider my-0 p-0"></div>
      </template>

      <form>
        <b-row>
          <b-col cols="12">
            <b-form-group label="Language">
              <b-form-input type="text"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="6 pr-12">
            <b-button
              variant="primary"
              block
              @click="$bvModal.hide('modal-edit-Preferance')"
            >
              Edit
            </b-button>
          </b-col>

          <b-col cols="6 pl-12">
            <b-button
              variant="none"
              block
              @click="$bvModal.hide('modal-edit-Preferance')"
            >
              Cancel
            </b-button>
          </b-col>
        </b-row>
      </form>
    </b-modal>
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BButton,
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BModal,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
  },
};
</script>
