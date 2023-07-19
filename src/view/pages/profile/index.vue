<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <b-row align-h="between" class="mt-n32">
        <b-col class="hp-flex-none w-auto mt-32">
          <breadcrumb />
        </b-col>

        <action-button />
      </b-row>
    </b-col>

    <b-col cols="12" class="mb-32">
      <b-row
        class="hp-profile-mobile-menu-btn bg-black-0 hp-bg-color-dark-100 rounded py-12 px-8 px-sm-12 mb-16 mx-0"
      >
        <div class="d-inline-block">
          <b-button
            variant="none"
            class="border-0 btn-icon-only"
            v-b-toggle.sidebar-profile
          >
            <i
              class="ri-menu-fill hp-text-color-black-80 hp-text-color-dark-30 lh-1"
              style="font-size: 24px"
            ></i>
          </b-button>
        </div>
      </b-row>

      <b-row
        class="bg-black-0 hp-bg-color-dark-100 rounded pr-16 pr-sm-32 mx-0"
      >
        <sidebar />

        <b-col class="pl-16 pl-sm-32 py-24 py-sm-32 overflow-hidden">
          <personel-information
            v-if="$route.name == 'profile-personel-information'"
          />

          <notifications v-if="$route.name == 'profile-notifications'" />

          <activity v-if="$route.name == 'profile-activity'" />

          <security v-if="$route.name == 'profile-security'" />

          <password-change v-if="$route.name == 'profile-password-change'" />

          <connect-with-social
            v-if="$route.name == 'profile-connect-with-social'"
          />
        </b-col>
      </b-row>

      <b-sidebar
        id="sidebar-profile"
        no-header
        shadow
        bg-variant="white"
        body-class="pt-16 px-0"
        class="hp-profile-mobile-menu"
        backdrop
      >
        <template #default="{ hide }">
          <div class="px-24 mb-32 d-flex align-items-center justify-content-between">
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

            <b-button variant="text" class="btn-icon-only" @click="hide">
              <i
                class="ri-close-fill text-black-80 lh-1"
                style="font-size: 24px"
              ></i>
            </b-button>
          </div>

          <sidebar />
        </template>
      </b-sidebar>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BBadge,
  BButton,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import ActionButton from "@/layouts/components/content/action-button/ActionButton.vue";
import Sidebar from "./Sidebar.vue";
import PersonelInformation from "./PersonelInformation.vue";
import Notifications from "./Notifications.vue";
import Activity from "./Activity.vue";
import Security from "./Security.vue";
import PasswordChange from "./PasswordChange.vue";
import ConnectWithSocial from "./ConnectWithSocial.vue";

export default {
  data() {
    return {
      routeName: "",
    };
  },
  components: {
    BRow,
    BCol,
    BBadge,
    BButton,
    BDropdown,
    BDropdownItem,
    Breadcrumb,
    ActionButton,
    Sidebar,
    PersonelInformation,
    Notifications,
    Activity,
    Security,
    PasswordChange,
    ConnectWithSocial,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
