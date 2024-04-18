<template>
  <div style="color: blue;" class="hover-dropdown-fade w-auto px-0 ml-6 position-relative hp-cursor-pointer">
    <!-- <b-avatar variant="none" :src="require('@/assets/img/memoji/memoji-1.png')" size="40px" /> -->
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16" class="bi bi-car-front-fill"><path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"></path></svg> -->
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
        stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
    </svg>

    <div class="hp-header-profile-menu dropdown-fade position-absolute pt-18" style="top: 100%; width: 260px">
      <div class="rounded border hp-border-color-black-40 hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80 p-24">
        <span class="d-block h5 hp-text-color-black-100 hp-text-color-dark-0 mb-6">
          Profile Settings
        </span>

        <b-link to="/pages/profile/personel-information"
          class="hp-p1-body hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-2">
          View Profile
        </b-link>

        <div class="divider my-12"></div>

        <!-- <b-row>
          <b-col cols="12">
            <b-link
              to="#"
              class="d-flex align-items-center hp-p1-body py-4 px-10 hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded"
              style="margin-left: -10px; margin-right: -10px"
            >
              <i class="iconly-Curved-People mr-8" style="font-size: 16px"></i>

              <span>Explore Creators</span>
            </b-link>
          </b-col>

          <b-col cols="12">
            <b-link
              to="/pages/knowledge-base/knowledge-base-1"
              class="d-flex align-items-center hp-p1-body py-4 px-10 hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded"
              style="margin-left: -10px; margin-right: -10px"
            >
              <i class="iconly-Curved-Game mr-8" style="font-size: 16px"></i>

              <span>Help Desk</span>
            </b-link>
          </b-col>
        </b-row> -->

        <div class="divider my-12"></div>

        <b-link class="hp-p1-body" @click="logout">Logout</b-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { BRow, BCol, BAvatar, BLink, } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    BLink,
  },
  computed: {
    ...mapGetters(["user"]),
  },

  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },

};
</script>
