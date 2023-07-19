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
      <h1 class="mb-0">Hello! How can we help you?</h1>
      <h5 class="mb-0 text-black-80 hp-text-color-dark-30">
        or choose a category to quickly find the help you need.
      </h5>
    </b-col>

    <b-col cols="12" class="mb-32">
      <b-row>
        <b-col cols="12" xl="7" class="col-xxxl-5">
          <b-input-group size="lg">
            <b-form-input
              type="text"
              placeholder="Search for anything"
            ></b-form-input>

            <template #append>
              <b-button
                variant="primary"
                class="px-16 px-sm-64 hp-hover-text-color-black-0"
                type="button"
              >
                Search
              </b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row class="mt-24">
        <b-col class="hp-flex-none w-auto pr-8">
          <p class="hp-p1-body mb-0 mb-8 mb-sm-0">For Example:</p>
        </b-col>

        <b-col class="hp-flex-none w-auto">
          <b-row>
            <b-col class="hp-flex-none w-auto px-4">
              <b-badge variant="none">Marketing</b-badge>
            </b-col>

            <b-col class="hp-flex-none w-auto px-4">
              <b-badge variant="none">Accessing Data</b-badge>
            </b-col>

            <b-col class="hp-flex-none w-auto px-4">
              <b-badge variant="none">Service Details</b-badge>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>

    <card-items :data="data" />
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BButton,
  BBadge,
  BInputGroup,
  BFormInput,
} from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import ActionButton from "@/layouts/components/content/action-button/ActionButton.vue";
import CardItems from "./CardItems.vue";

export default {
  data() {
    return {
      data: [
        {
          img: require("@/assets/img/pages/knowledgebase/contact.png"),
          title: "Call Center",
          desc: "Lorem Ipsum Dolor Sit Amet",
        },
        {
          img: require("@/assets/img/pages/knowledgebase/location.png"),
          title: "Shipping & Logistics",
          desc: "Lorem Ipsum Dolor Sit Amet",
        },
        {
          img: require("@/assets/img/pages/knowledgebase/save-money.png"),
          title: "Finance",
          desc: "Lorem Ipsum Dolor Sit Amet",
        },
        {
          img: require("@/assets/img/pages/knowledgebase/analyse.png"),
          title: "Charts",
          desc: "Lorem Ipsum Dolor Sit Amet",
        },
        {
          img: require("@/assets/img/pages/knowledgebase/newsletter.png"),
          title: "Mailings",
          desc: "Lorem Ipsum Dolor Sit Amet",
        },
        {
          img: require("@/assets/img/pages/knowledgebase/seo.png"),
          title: "SEO & Ads",
          desc: "Lorem Ipsum Dolor Sit Amet",
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BButton,
    BBadge,
    BInputGroup,
    BFormInput,
    Breadcrumb,
    PageTitle,
    ActionButton,
    CardItems,
  },
};
</script>
