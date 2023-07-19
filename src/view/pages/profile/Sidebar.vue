<template>
  <b-col class="hp-profile-menu py-24" style="flex: 0 0 240px">
    <div class="w-100">
      <div class="hp-profile-menu-header mt-16 mt-lg-0 text-center">
        <div class="hp-menu-header-btn mb-12 text-right">
          <b-dropdown variant="link" no-caret toggle-class="p-0">
            <template #button-content>
              <div class="d-inline-block">
                <b-button variant="text" class="btn btn-icon-only">
                  <i
                    class="ri-more-2-line text-black-100 hp-text-color-dark-30 lh-1"
                    style="font-size: 24px"
                  ></i>
                </b-button>
              </div>
            </template>
            <b-dropdown-item href="#">Change Avatar</b-dropdown-item>
          </b-dropdown>
        </div>

        <div class="d-flex justify-content-center">
          <div class="d-inline-block position-relative">
            <div
              class="avatar-item d-flex align-items-center justify-content-center rounded-circle"
              style="width: 80px; height: 80px"
            >
              <img :src="require('@/assets/img/memoji/memoji-1.png')" />
            </div>

            <b-badge
              pill
              class="position-absolute bg-primary text-white border-0"
            >
              12
            </b-badge>
          </div>
        </div>

        <h3 class="mt-24 mb-4">Dolores Bianca</h3>
        <a href="mailto:dolores@yoda.com" class="hp-p1-body">
          dolores@yoda.com
        </a>
      </div>
    </div>

    <div class="hp-profile-menu-body w-100 text-left mt-48 mt-lg-0">
      <ul class="ml-n1 mx-lg-n12">
        <li class="mt-4 mb-16">
          <b-link
            to="/pages/profile/personel-information"
            :class="`position-relative text-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-0 py-12 px-24 d-flex align-items-center${
              path == '/pages/profile/personel-information' ? ' active' : ''
            }`"
          >
            <i class="iconly-Curved-User mr-16"></i>
            <span>Personal Information</span>

            <span
              class="hp-menu-item-line position-absolute h-100 bg-primary hp-bg-dark-0"
              style="width: 2px"
            ></span>
          </b-link>
        </li>

        <li class="mt-4 mb-16">
          <b-link
            to="/pages/profile/notifications"
            :class="`position-relative text-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-0 py-12 px-24 d-flex align-items-center${
              path == '/pages/profile/notifications' ? ' active' : ''
            }`"
          >
            <i class="iconly-Curved-Notification mr-16"></i>
            <span>Notifications</span>

            <span
              class="hp-menu-item-line position-absolute h-100 bg-primary hp-bg-dark-0"
              style="width: 2px"
            ></span>
          </b-link>
        </li>

        <li class="mt-4 mb-16">
          <b-link
            to="/pages/profile/activity"
            :class="`position-relative text-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-0 py-12 px-24 d-flex align-items-center${
              path == '/pages/profile/activity' ? ' active' : ''
            }`"
          >
            <i class="iconly-Curved-Activity mr-16"></i>
            <span>Activity Monitor</span>

            <span
              class="hp-menu-item-line position-absolute h-100 bg-primary hp-bg-dark-0"
              style="width: 2px"
            ></span>
          </b-link>
        </li>

        <li class="mt-4 mb-16">
          <b-link
            to="/pages/profile/security"
            :class="`position-relative text-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-0 py-12 px-24 d-flex align-items-center${
              path == '/pages/profile/security' ? ' active' : ''
            }`"
          >
            <i class="iconly-Curved-Setting mr-16"></i>
            <span>Security Settings</span>

            <span
              class="hp-menu-item-line position-absolute h-100 bg-primary hp-bg-dark-0"
              style="width: 2px"
            ></span>
          </b-link>
        </li>

        <li class="mt-4 mb-16">
          <b-link
            to="/pages/profile/password-change"
            :class="`position-relative text-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-0 py-12 px-24 d-flex align-items-center${
              path == '/pages/profile/password-change' ? ' active' : ''
            }`"
          >
            <i class="iconly-Curved-Password mr-16"></i>
            <span>Password Change</span>

            <span
              class="hp-menu-item-line position-absolute h-100 bg-primary hp-bg-dark-0"
              style="width: 2px"
            ></span>
          </b-link>
        </li>

        <li class="mt-4 mb-16">
          <b-link
            to="/pages/profile/connect-with-social"
            :class="`position-relative text-black-80 hp-text-color-dark-30 hp-hover-text-color-primary-1 hp-hover-text-color-dark-0 py-12 px-24 d-flex align-items-center${
              path == '/pages/profile/connect-with-social' ? ' active' : ''
            }`"
          >
            <i class="iconly-Curved-Heart mr-16"></i>
            <span>Connect with Social</span>

            <span
              class="hp-menu-item-line position-absolute h-100 bg-primary hp-bg-dark-0"
              style="width: 2px"
            ></span>
          </b-link>
        </li>
      </ul>
    </div>

    <div class="hp-profile-menu-footer">
      <img
        :src="require('@/assets/img/pages/profile/menu-img.svg')"
        alt="Profile Image"
      />
    </div>
  </b-col>
</template>

<script>
import {
  BCol,
  BBadge,
  BButton,
  BLink,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";

export default {
  data() {
    return {
      path: "",
    };
  },
  components: {
    BCol,
    BBadge,
    BButton,
    BLink,
    BDropdown,
    BDropdownItem,
  },
  watch: {
    $route() {
      this.getRoute();
    },
  },
  methods: {
    getRoute() {
      this.path = this.$route.path;
    },
  },
  created() {
    this.getRoute();
  },
};
</script>
