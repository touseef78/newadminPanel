<template>
  <b-card class="hp-card-5">
    <b-badge variant="primary" class="mb-16">05 May 2021</b-badge>

    <h5 class="mb-4">Sales Meeting</h5>
    <p class="hp-p1-body mb-16">
      2020 Overview of yearly sales over Covid-19 pandemic situation.
    </p>

    <p class="hp-badge-text mb-8 text-black-100 hp-text-color-dark-0">Teams</p>
    <b-badge variant="danger" class="mr-4 mb-4">Sales</b-badge>
    <b-badge variant="info" class="mr-4 mb-4">Marketing</b-badge>

    <p class="hp-badge-text mb-8 text-black-100 hp-text-color-dark-0 mt-16">
      Members
    </p>
    <b-avatar-group size="32px">
      <b-avatar :src="require('@/assets/img/memoji/memoji-1.png')"></b-avatar>

      <b-avatar class="bg-danger-4 hp-bg-dark-danger hp-text-color-danger-1">
        A
      </b-avatar>

      <b-avatar class="bg-black-20 text-black-100">
        <i class="iconly-Curved-User" style="font-size: 20px"></i>
      </b-avatar>

      <b-avatar class="bg-primary-4 hp-bg-dark-primary hp-text-color-primary-1">
        W
      </b-avatar>

      <b-avatar class="bg-warning-4 hp-bg-dark-warning hp-text-color-warning-1">
        X
      </b-avatar>
    </b-avatar-group>

    <b-button variant="primary" block class="mt-16"> Join Meeting </b-button>
  </b-card>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BAvatarGroup,
  BAvatar,
  BBadge,
  BButton,
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatarGroup,
    BAvatar,
    BBadge,
    BButton,
  },
};
</script>
