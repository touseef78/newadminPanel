<template>
  <!-- <b-row
    align-v="center"
    align-h="between"
    class="hp-sidebar-footer pb-24 px-24 mx-0 hp-bg-color-dark-100"
  >
    <div
      v-if="!collapsed"
      class="divider border-black-20 hp-border-color-dark-70 px-0"
    ></div>

    <b-col>
      <b-row align-v="center">
        <div class="mr-8 w-auto px-0">
          <b-avatar
            variant="none"
            :src="require('@/assets/img/memoji/memoji-1.png')"
            size="36px"
          ></b-avatar>
        </div>

        <div v-if="!collapsed" class="w-auto px-0">
          <span
            class="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1"
          >
            Jane Doe
          </span>

          <b-link
            to="/pages/profile/personel-information"
            class="hp-badge-text hp-text-color-dark-30"
          >
            View Profile
          </b-link>
        </div>
      </b-row>
    </b-col>

    <b-col v-if="!collapsed" class="hp-flex-none w-auto px-0">
      <b-link to="/pages/profile/personel-information">
        <i
          class="hp-text-color-black-100 hp-text-color-dark-0 ri-settings-3-line"
          style="font-size: 24px"
        ></i>
      </b-link>
    </b-col>
  </b-row> -->
</template>

<script>
import { BRow, BCol, BAvatar, BLink } from "bootstrap-vue";

export default {
  props: ["collapsed"],
  components: {
    BRow,
    BCol,
    BAvatar,
    BLink,
  },
};
</script>
