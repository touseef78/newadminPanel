<template>
  <b-row class="hp-authentication-page">
    <left-content />
    <b-col cols="12" lg="6" class="py-sm-64 py-lg-0">
      <b-row align-v="center" align-h="center" class="h-100 mx-4 mx-sm-n32">
        <b-col cols="12" md="9" xl="7" class="col-xxxl-5 px-8 px-sm-0 pt-24 pb-48">
          <h1 class="mb-0 mb-sm-24">Login</h1>
          <p class="mt-sm-8 mt-sm-0 text-black-60">
            Welcome back, please login to your account.
          </p>
          <b-form class="user" @submit.prevent="login">
            <b-form-group label="Email :" label-for="email" class="mb-16">
              <b-form-input id="email" type="text" v-model="email" required></b-form-input>
            </b-form-group>
            <b-form-group label="Password :" label-for="password" class="mb-16">
              <b-form-input id="password" type="password" v-model="password" required></b-form-input>
            </b-form-group>

            <b-row align-v="center" align-h="between" class="mb-16">
              <b-col class="hp-flex-none w-auto">
                <b-form-checkbox>Remember me</b-form-checkbox>
              </b-col>
            </b-row>

            <b-button type="submit" variant="primary" class="w-100">
              Sign in
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";
import {
  BRow,
  BCol,
  BButton,
  BLink,
  BForm,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BToast,
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
    BToast, // Add BToast component
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async login() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("token", response.data.token);
        this.$store.dispatch("user", response.data.user);
        // this.$bvToast.toast("Login successful!", {
        //   title: "Success",
        //   variant: "success",
        //   solid: true,
        // });
        this.$router.push("/dashboard");
      } catch (error) {
        this.$bvToast.toast("Login failed. Please check your credentials.", {
          title: "Error",
          variant: "primary",
          solid: true,
        });
      }
    },
  },
};
</script>
