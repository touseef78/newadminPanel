<template>
  <b-row class="hp-authentication-page">
    <left-content />

    <b-col cols="12" lg="6" class="py-sm-64 py-lg-0">
      <b-row align-v="center" align-h="center" class="h-100 mx-4 mx-sm-n32">
        <b-col
          cols="12"
          md="9"
          xl="7"
          class="col-xxxl-5 px-8 px-sm-0 pt-24 pb-48"
        >
          <h1 class="mb-0 mb-sm-24">Recover Password</h1>
          <p class="mt-sm-8 mt-sm-0 text-black-60">
            We’ll e-mail you instructions on how to reset your password.
          </p>

          <b-form class="mt-16 mt-sm-32 mb-8">
            <b-form-group
              label="E-mail :"
              label-for="recoverEmail"
              class="mb-16"
            >
              <b-form-input
                id="recoverEmail"
                type="email"
                placeholder="you@example.com"
              ></b-form-input>
            </b-form-group>

            <b-button to="/pages/authentication/reset-password" type="submit" variant="primary" class="w-100">
              Reset Password
            </b-button>
          </b-form>

          <div class="hp-form-info">
            <span class="text-black-80 hp-text-color-dark-40 hp-caption mr-4">
              Go back to
            </span>

            <b-link
              class="hp-cursor-pointer text-primary-1 hp-text-color-dark-primary-2 hp-caption"
              to="/pages/authentication/login"
            >
              Login
            </b-link>
          </div>

          <div class="hp-other-links mt-24">
            <a href="javascript:;" class="text-black-80 hp-text-color-dark-40">
              Privacy Policy
            </a>

            <a href="javascript:;" class="text-black-80 hp-text-color-dark-40">
              Term of use
            </a>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BButton,
  BLink,
  BForm,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
} from "bootstrap-vue";
import LeftContent from "../LeftContent.vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BLink,
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    LeftContent,
  },
};
</script>
