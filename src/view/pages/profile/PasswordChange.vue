<template>
  <b-row>
    <b-col cols="12">
      <b-row v-if="successMessage" class="mb-16">
        <b-col>
          <b-alert variant="danger" show dismissible @dismissed="clearSuccessMessage">
            {{ successMessage }}
          </b-alert>
        </b-col>
      </b-row>
    </b-col>
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
          <b-form @submit.prevent="handleChangePassword">
            <b-form-group label="Old Password :" label-for="oldPassword" class="mb-24">
              <b-form-input id="oldPassword" type="password" placeholder="Old Password" v-model="oldPassword" required ></b-form-input>
            </b-form-group>

            <b-form-group label="New Password :" label-for="newPassword" class="mb-24">
              <b-form-input id="newPassword" type="password" placeholder="New Password" v-model="newPassword" required></b-form-input>
            </b-form-group>

            <b-form-group label="Confirm Password :" label-for="confirmPassword" class="mb-24">
              <b-form-input id="confirmPassword" type="password" placeholder="Password" v-model="confirmPassword" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="w-100"> Change Password </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";
import { BRow, BCol, BButton, BForm, BFormGroup, BFormInput, BAlert } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BAlert,
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      successMessage: "",
      errorMessage: "", // Added data property for error message
    };
  },
  methods: {
    handleChangePassword() {
      // Call the API to change the password
      // Replace 'PasswordChanged' with the actual API endpoint to call the Laravel backend
      axios
        .post("PasswordChanged", {
          old_password: this.oldPassword,
          password: this.newPassword,
        })
        .then((response) => {
          this.successMessage = 'Success! Password has been changed';
        })
        .catch((error) => {
          // Handle error if password change failed
          console.error(error);
        });
    },
    clearSuccessMessage() {
      this.successMessage = "password changed"; // Clear the success message
    },
  },
};
</script>
