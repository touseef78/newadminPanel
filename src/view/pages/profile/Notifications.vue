<template>
  <b-row>
    <b-col cols="12">
      <h2>Notification Settings</h2>
      <p class="hp-p1-body mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        sodales sit amet nunc et vehicula. Mauris sed lectus nisi.
      </p>
    </b-col>

    <div class="divider mx-16 border-black-40 hp-border-color-dark-80"></div>

    <b-col cols="12">
      <h3>Contact</h3>

      <ul class="hp-profile-notifications mt-24">
        <li class="d-flex align-items-center justify-content-between">
          <span class="hp-caption text-black-80 hp-text-color-dark-30 pr-8">
            System Notification
          </span>

          <b-form-checkbox
            switch
            size="lg"
            checked="true"
          ></b-form-checkbox>
        </li>

        <li class="d-flex align-items-center justify-content-between mt-4">
          <span class="hp-caption text-black-80 hp-text-color-dark-30 pr-8">
            Mail notification
          </span>

          <b-form-checkbox
            switch
            size="lg"
          ></b-form-checkbox>
        </li>

        <li class="d-flex align-items-center justify-content-between mt-4">
          <span class="hp-caption text-black-80 hp-text-color-dark-30 pr-8">
            Notify me by email about sales and latest news
          </span>

          <b-form-checkbox
            switch
            size="lg"
          ></b-form-checkbox>
        </li>

        <li class="d-flex align-items-center justify-content-between mt-4">
          <span class="hp-caption text-black-80 hp-text-color-dark-30 pr-8">
            Email me about tips on using account
          </span>

          <b-form-checkbox
            switch
            size="lg"
            checked="true"
          ></b-form-checkbox>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BFormCheckbox } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BFormCheckbox,
  },
};
</script>
