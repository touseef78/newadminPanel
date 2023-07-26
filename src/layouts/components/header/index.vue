<template>
  <header>
    <b-row class="w-100 m-0">
      <b-col class="pl-18 pr-16 px-sm-24">
        <b-row
          align-v="center"
          align-h="between"
          class="w-100 position-relative"
        >
          <!-- <b-col
            class="w-auto hp-flex-none hp-mobile-sidebar-button ml-4 ml-lg-0 mr-24 px-0"
          >
            <b-button
              variant="text"
              class="btn-icon-only"
              @click="mobileSidebarShow = !mobileSidebarShow"
            >
              <i
                class="ri-menu-fill hp-text-color-black-80 hp-text-color-dark-30 lh-1"
                style="font-size: 24px"
              ></i>
            </b-button>
          </b-col> -->

          <header-text v-if="!searchActive" />

          <b-col
            v-if="searchActive"
            :class="`hp-header-search${searchClass ? ' active' : ''}`"
          >
            <header-search @searchClose="searchClose" />
          </b-col>

          <b-col class="hp-flex-none w-auto pr-0">
            <b-row align-v="center" align-h="end">
              <div class="w-auto px-0">
                <div
                  class="d-flex align-items-center mr-4 hp-header-search-button"
                >
                <!-- Search Button -->
                  <b-button
                    variant="text"
                    class="btn-icon-only"
                    @click="searchToggle()"
                  >
                    <i
                      v-if="!searchActive"
                      class="iconly-Curved-Search hp-text-color-black-60"
                    ></i>
                    <i
                      v-else
                      class="ri-close-line hp-text-color-black-60"
                      style="font-size: 24px"
                    ></i>
                  </b-button>

                  <!-- Ending Search Button -->
                </div>
              </div>

              <header-basket />

              <header-notifications />

              <header-user />
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-sidebar
      id="mobile-sidebar"
      backdrop-variant="black-100"
      backdrop
      no-close-on-backdrop
      shadow
      bg-variant="white"
      class="hp-mobile-sidebar"
      body-class="p-0 d-flex flex-column"
      no-header-close
      no-header
      width="256px"
      :visible="mobileSidebarShow"
    >
      <!-- <div
        class="d-flex align-items-center justify-content-between pt-16 pl-24 pr-16"
      >
        <logo />

        <div class="w-auto px-0">
          <b-button
            variant="text"
            class="btn-icon-only"
            @click="mobileSidebarShow = false"
          >
            <i
              class="ri-close-fill lh-1 hp-text-color-black-80"
              style="font-size: 24px"
            ></i>
          </b-button>
        </div>
      </div> -->

      <sidebar :header="false" />
    </b-sidebar>
  </header>
</template>

<script>
import { BCol, BRow, BButton, BSidebar, BLink } from "bootstrap-vue";

import HeaderText from "./HeaderText.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderBasket from "./HeaderBasket.vue";
import HeaderNotifications from "./HeaderNotifications.vue";
import HeaderUser from "./HeaderUser.vue";
import Sidebar from "../menu/Sidebar.vue";
import Logo from "../logo";

export default {
  data() {
    return {
      mobileSidebarShow: false,
      theme: this.$store.state.themeConfig.theme,
      version: this.$store.state.themeConfig.version,
      searchActive: false,
      searchClass: "",
    };
  },
  components: {
    BCol,
    BRow,
    BButton,
    BSidebar,
    BLink,
    HeaderText,
    HeaderSearch,
    HeaderBasket,
    HeaderNotifications,
    HeaderUser,
    Sidebar,
    Logo,
  },
  methods: {
    searchToggle() {
      this.searchActive = !this.searchActive;

      if (this.searchActive) {
        setTimeout(() => {
          this.searchClass = true;

          setTimeout(() => {
            document
              .querySelector(".hp-header-search-item .form-control")
              .focus();
          }, 100);
        }, 200);
      } else {
        this.searchClass = false;
      }
    },

    searchClose() {
      this.searchActive = false;
      this.searchClass = false;
    },
  },
};
</script>
