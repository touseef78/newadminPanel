<template>
  <b-row
    align-v="center"
    align-h="center"
    class="hp-lock-screen bg-primary-1 hp-bg-color-dark-100"
  >
    <div
      class="hp-screen-bg"
      :style="`
        background-image: url(${require('@/assets/img/pages/lock-screen/lock-pattern.svg')});
      `"
    ></div>

    <b-col cols="12">
      <div class="mb-32 mb-sm-64 text-center">
        <img :src="require('@/assets/img/logo/logo-vector.svg')" alt="Logo" />
      </div>

      <b-row
        class="hp-lock-screen-row mx-auto text-center rounded overflow-hidden pt-42 pb-64 px-8 px-sm-24"
      >
        <b-col cols="12">
          <img
            :src="require('@/assets/img/memoji/memoji-2.svg')"
            alt="Avatar"
          />
        </b-col>

        <b-col cols="12" class="mt-12">
          <b-badge
            variant="danger"
            class="d-inline-flex align-items-center justify-content-center"
          >
            <i class="iconly-Curved-User mr-8" style="font-size: 12px"></i>
            <span>Locked</span>
          </b-badge>
        </b-col>

        <b-col class="mt-24">
          <h3 class="hp-text-color-black-0 mb-0">Edward Yıldırım</h3>
          <a
            href="mailto:edward@Hypeople.com"
            class="hp-p1-body hp-text-color-black-0 mb-0"
          >
            edward@Hypeople.com
          </a>
        </b-col>

        <b-col cols="12" class="mt-32 px-32">
          <b-input-group>
            <template #prepend>
              <b-input-group-text
                class="border-right-0 bg-white hp-bg-dark-100 pr-0"
              >
                <i
                  class="iconly-Curved-User text-black-80"
                  style="font-size: 16px"
                ></i>
              </b-input-group-text>
            </template>

            <b-form-input
              placeholder="Enter your pin"
              class="border-left-0"
              style="height: 40px;"
            ></b-form-input>

            <template #append>
              <b-input-group-text>
                <i class="ri-settings-3-line lh-1" style="font-size: 14px"></i>
              </b-input-group-text>
            </template>
          </b-input-group>
        </b-col>

        <b-col cols="12" class="mt-18">
          <b-button
            variant="none"
            class="bg-transparent border-0 hp-text-color-black-60 hp-hover-text-color-primary-2"
          >
            I forgot my pin
          </b-button>
        </b-col>

        <b-col cols="12" class="mt-8">
          <b-button
            variant="none"
            class="bg-transparent border-0 hp-text-color-black-60 hp-hover-text-color-primary-2"
          >
            Sign-in options
          </b-button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BButton,
  BBadge,
  BFormInput,
  BInputGroup,
  BInputGroupText,
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BBadge,
    BFormInput,
    BInputGroup,
    BInputGroupText,
  },
};
</script>
