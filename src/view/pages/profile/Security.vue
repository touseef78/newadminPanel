<template>
  <b-row>
    <b-col cols="12">
      <h2>Security Settings</h2>
      <p class="hp-p1-body mb-0">
        These settings are helps you keep your account secure.
      </p>
    </b-col>

    <div class="divider mx-16 border-black-40 hp-border-color-dark-80"></div>

    <b-col cols="12">
      <b-row align-v="center">
        <b-col cols="12" md="6">
          <h3>Save my Activity Logs</h3>
          <p class="hp-p1-body mb-0">
            You can save your all activity logs including unusual activity
            detected.
          </p>
        </b-col>

        <b-col cols="12" md="6" class="text-md-right pr-0">
          <b-form-checkbox
            switch
            size="lg"
            checked="true"
            style="height: 39px"
          ></b-form-checkbox>
        </b-col>
      </b-row>
    </b-col>

    <div class="divider mx-16 border-black-40 hp-border-color-dark-80"></div>

    <b-col cols="12">
      <b-row align-v="center">
        <b-col cols="12" md="6">
          <h3>Change Password</h3>
          <p class="hp-p1-body mb-0">
            Set a unique password to protect your account.
          </p>
        </b-col>

        <b-col cols="12" md="6" class="text-md-right pr-0">
          <b-button variant="primary" to="/pages/profile/password-change">
            Change Password
          </b-button>
        </b-col>
      </b-row>
    </b-col>

    <div class="divider mx-16 border-black-40 hp-border-color-dark-80"></div>

    <b-col cols="12">
      <b-row align-v="center">
        <b-col cols="12" md="6">
          <h3>2 Factor Auth</h3>
          <p class="hp-p1-body mb-0">
            Secure your account with 2FA security. When it is activated you will
            need to enter not only your password, but also a special code using
            app. You can receive this code by in mobile app.
          </p>
        </b-col>

        <b-col cols="12" md="6" class="text-md-right pr-0">
          <b-button variant="primary"> Disable </b-button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BButton, BFormCheckbox } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BFormCheckbox,
  },
};
</script>
