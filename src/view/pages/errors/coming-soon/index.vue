<template>
  <b-row class="bg-primary-4 hp-bg-color-dark-90 text-center">
    <b-col cols="12" class="hp-error-content py-32">
      <b-row align-v="center" align-h="center" class="row h-100">
        <b-col cols="12">
          <div class="position-relative mt-0 mt-sm-64 mb-32">
            <div class="hp-error-content-circle hp-bg-dark-100"></div>

            <img
              v-bind:src="require('@/assets/img/pages/error/coming-soon.svg')"
              class="position-relative d-block mx-auto"
              alt="Coming Soon"
            />
          </div>

          <h2 class="h1 mb-0 mb-sm-16">We are launching soon</h2>

          <div class="d-flex align-items-center justify-content-center">
            <div class="hp-comingsoon-timer-item">
              <span class="d-block text-primary">{{ days._value }}</span>
              <span class="d-block text-black-80 hp-text-color-dark-30 h4">
                DAYS
              </span>
            </div>

            <div class="hp-comingsoon-timer-item">
              <span class="d-block text-primary">{{ hours._value % 24 }}</span>
              <span class="d-block text-black-80 hp-text-color-dark-30 h4">
                HOURS
              </span>
            </div>

            <div class="hp-comingsoon-timer-item">
              <span class="d-block text-primary">{{ minutes._value % 60 }}</span>
              <span class="d-block text-black-80 hp-text-color-dark-30 h4">
                MINUTES
              </span>
            </div>

            <div class="hp-comingsoon-timer-item">
              <span class="d-block text-primary">{{ seconds._value % 60 }}</span>
              <span class="d-block text-black-80 hp-text-color-dark-30 h4">
                SECONDS
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>

    <footer-item />
  </b-row>
</template>

<script>
import { BRow, BCol, BButton } from "bootstrap-vue";
import { ref } from "@vue/reactivity";

import FooterItem from "../FooterItem.vue";

export default {
  data() {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const launchDate = new Date("01-02-2030");

    setInterval(() => {
      const currDate = new Date();
      const launchTime = launchDate - currDate;

      seconds.value = parseInt(launchTime / 1000);
      minutes.value = parseInt(seconds.value / 60);
      hours.value = parseInt(minutes.value / 60);
      days.value = parseInt(hours.value / 24);
    }, 1000);

    return { days, hours, minutes, seconds };
  },
  components: {
    BRow,
    BCol,
    BButton,
    FooterItem,
  },
};
</script>
