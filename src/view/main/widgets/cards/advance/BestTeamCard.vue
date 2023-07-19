<template>
  <b-card>
    <b-row align-h="between">
      <b-col cols="12" md="6">
        <h5>Best team</h5>
        <p class="hp-p1-body text-black-60 hp-text-color-dark-50 mb-0">
          Highest income this month
        </p>
        <div class="d-flex align-items-center flex-wrap">
          <h4 class="mb-0">$442.98</h4>
          <p class="hp-p1-body text-black-60 hp-text-color-dark-50 ml-8 mb-0">
            Highest income this month
          </p>
        </div>
      </b-col>

      <b-col cols="12" md="6">
        <h5 class="text-center">Marketing team</h5>

        <b-row align-h="center" align-v="center">
          <b-col class="hp-flex-none w-auto px-4">
            <b-avatar
              size="36"
              class="bg-primary-3"
              :src="
                require('@/assets/img/dasboard/analytics-marketing-team-1.svg')
              "
            />
          </b-col>

          <b-col class="hp-flex-none w-auto px-4">
            <b-avatar
              size="36"
              class="bg-info-3"
              :src="
                require('@/assets/img/dasboard/analytics-marketing-team-2.svg')
              "
            />
          </b-col>

          <b-col class="hp-flex-none w-auto px-4">
            <b-avatar
              size="36"
              class="bg-black-60"
              :src="
                require('@/assets/img/dasboard/analytics-marketing-team-3.svg')
              "
            />
          </b-col>

          <b-col class="hp-flex-none w-auto px-4">
            <b-avatar
              size="36"
              class="bg-danger-3"
              :src="
                require('@/assets/img/dasboard/analytics-marketing-team-4.svg')
              "
            />
          </b-col>

          <b-col class="hp-flex-none w-auto px-4">
            <b-avatar
              size="36"
              class="bg-secondary-3"
              :src="
                require('@/assets/img/dasboard/analytics-marketing-team-5.svg')
              "
            />
          </b-col>

          <b-col class="hp-flex-none w-auto px-4">
            <b-avatar
              size="36"
              class="bg-warning-3"
              :src="
                require('@/assets/img/dasboard/analytics-marketing-team-6.svg')
              "
            />
          </b-col>

          <b-col class="hp-flex-none w-auto px-4">
            <i
              class="ri-arrow-right-line hp-text-color-dark-30"
              style="font-size: 24px"
            ></i>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BAvatar } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
  },
};
</script>
