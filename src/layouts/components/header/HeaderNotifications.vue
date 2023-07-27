<template>
  <div
    class="hover-dropdown-fade w-auto px-0 d-flex align-items-center mr-8 mr-sm-16 position-relative"
  >
    <b-button variant="text" class="btn-icon-only">
      <!-- <i
        class="iconly-Curved-Notification hp-text-color-black-60 position-relative"
      >
        <span
          class="position-absolute translate-middle rounded-circle bg-primary hp-notification-circle"
          style="width: 6px; height: 6px; top: 2px"
        ></span>
      </i> -->
    </b-button>

    <!-- <div
      class="hp-notification-menu dropdown-fade position-absolute pt-18"
      style="width: 288px; top: 100%"
    >
      <div
        class="pt-32 pb-18 px-18 rounded border hp-border-color-black-40 hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80"
      >
        <b-row align-v="center" align-h="between" class="mb-18">
          <b-col
            class="hp-flex-none w-auto h5 hp-text-color-black-100 hp-text-color-dark-10 hp-text-color-dark-0 mr-64 mb-0"
          >
            Notifications
          </b-col>

          <b-col
            class="hp-flex-none w-auto hp-bg-color-primary-1 rounded-pill hp-badge-text hp-text-color-black-0 py-4 px-6 mr-12"
          >
            4 New
          </b-col>
        </b-row>

        <div class="divider my-4"></div>

        <div
          class="hp-overflow-y-auto px-10"
          style="max-height: 300px; margin-right: -10px; margin-left: -10px"
        >
          <b-row
            align-v="center"
            class="hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10"
            style="margin-left: -10px; margin-right: -10px"
          >
            <div class="w-auto px-0 mr-8">
              <b-avatar
                variant="none"
                size="38px"
                :src="require('@/assets/img/memoji/memoji-5.png')"
              />
            </div>

            <b-col class="w-auto px-0">
              <span class="d-block w-100 mb-4 font-weight-medium hp-p1-body">
                New message received 💌
              </span>

              <span
                class="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 font-weight-normal"
              >
                24 unread messages.
              </span>
            </b-col>
          </b-row>

          <div class="divider my-4"></div>

          <b-row
            align-v="center"
            class="hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10"
            style="margin-left: -10px; margin-right: -10px"
          >
            <div class="w-auto px-0 mr-8">
              <b-avatar variant="success-4" size="38px">
                <i class="iconly-Curved-TickSquare hp-text-color-success-1"></i>
              </b-avatar>
            </div>

            <b-col class="w-auto px-0">
              <span class="d-block w-100 mb-4 font-weight-medium hp-p1-body">
                Congratulations team 🎉
              </span>

              <span
                class="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 font-weight-normal"
              >
                You have 12 new sales!
              </span>
            </b-col>
          </b-row>

          <div class="divider my-4"></div>

          <b-row
            align-v="center"
            class="hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10"
            style="margin-left: -10px; margin-right: -10px"
          >
            <div class="w-auto px-0 mr-8">
              <b-avatar variant="danger-4" size="38px">
                <i class="iconly-Curved-CloseSquare hp-text-color-danger-1"></i>
              </b-avatar>
            </div>

            <b-col class="w-auto px-0">
              <span class="d-block w-100 mb-4 font-weight-medium hp-p1-body">
                Network p⛔️
              </span>

              <span
                class="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 font-weight-normal"
              >
                Operation couldn’t be completed
              </span>
            </b-col>
          </b-row>

          <div class="divider my-4"></div>

          <b-row
            align-v="center"
            class="hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10"
            style="margin-left: -10px; margin-right: -10px"
          >
            <div class="w-auto px-0 mr-8">
              <b-avatar variant="warning-4" size="38px">
                <i class="iconly-Curved-Danger hp-text-color-warning-1"></i>
              </b-avatar>
            </div>

            <b-col class="w-auto px-0">
              <span class="d-block w-100 mb-4 font-weight-medium hp-p1-body">
                Disk Utility 💥
              </span>

              <span
                class="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 font-weight-normal"
              >
                You have not enough disk capacity
              </span>
            </b-col>
          </b-row>
        </div>

        <div class="divider my-4"></div>

        <div class="mt-8">
          <b-button
            variant="text"
            block
            class="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-bg-primary-4 hp-hover-bg-dark-primary"
          >
            <b-row align-v="center" class="mx-0">
              <i class="w-auto px-0 mr-8 ri-delete-bin-line"></i>
              <span class="w-auto px-0">Clear all notifications</span>
            </b-row>
          </b-button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { BRow, BCol, BAvatar, BButton } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    BButton,
  },
};
</script>
