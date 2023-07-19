<template>
  <b-row>
    <b-col cols="12">
      <h2>Change Password</h2>
      <p class="hp-p1-body mb-0">
        Set a unique password to protect your account.
      </p>
    </b-col>

    <div class="divider mx-16 border-black-40 hp-border-color-dark-80"></div>

    <b-col cols="12">
      <b-row>
        <b-col cols="12" sm="8" md="7" xl="5" class="col-xxxl-3">
          <b-form>
            <b-form-group
              label="Old Password :"
              label-for="oldPassword"
              class="mb-24"
            >
              <b-form-input
                id="oldPassword"
                type="password"
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="New Password :"
              label-for="newPassword"
              class="mb-24"
            >
              <b-form-input
                id="newPassword"
                type="password"
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Confirm Password :"
              label-for="confirmPassword"
              class="mb-24"
            >
              <b-form-input
                id="confirmPassword"
                type="password"
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-button variant="primary" block> Change Password </b-button>
          </b-form>
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
  BForm,
  BFormGroup,
  BFormInput,
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
  },
};
</script>
