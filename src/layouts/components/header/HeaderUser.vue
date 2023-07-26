<template>
  <div
    class="hover-dropdown-fade w-auto px-0 ml-6 position-relative hp-cursor-pointer"
  >
    <b-avatar variant="none" :src="require('@/assets/img/memoji/memoji-1.png')" size="40px" />

    <div
      class="hp-header-profile-menu dropdown-fade position-absolute pt-18"
      style="top: 100%; width: 260px"
    >
      <div
        class="rounded border hp-border-color-black-40 hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80 p-24"
      >
        <span
          class="d-block h5 hp-text-color-black-100 hp-text-color-dark-0 mb-6"
        >
          Profile Settings
        </span>

        <b-link
          to="/pages/profile/personel-information"
          class="hp-p1-body hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-2"
        >
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

        <b-link class="hp-p1-body" to="/">Logout</b-link>
      </div>
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BAvatar, BLink } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    BLink,
  },
};
</script>
