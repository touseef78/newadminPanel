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
      <b-card class="pb-0 pb-sm-64">
        <b-row>
          <b-col cols="12">
            <h1 class="mb-4">Simple &amp; Flexible Plans</h1>
            <p class="hp-p1-body mb-0">
              Get unlimited versions with our detailed plans
            </p>
          </b-col>

          <b-col cols="12">
            <billed-switch
              :switchChecked="switchChecked"
              @switchChange="switchChange"
            />

            <item :switchChecked="switchChecked" :data="data" />
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import ActionButton from "@/layouts/components/content/action-button/ActionButton.vue";
import Item from "./Item.vue";
import BilledSwitch from "./BilledSwitch.vue";

export default {
  data() {
    return {
      switchChecked: true,
      data: [
        {
          title: "Basic",
          subTitle: "Simple explanation",
          priceYearly: "$ 199",
          priceMonthly: "$ 59",
          billedYearly: "Billed yearly",
          billedMonthly: "Billed monthly",
          special: false,
          best: false,
          button: "Try it for free",
          list: ["10gb Space", "1 User", "Team inbox"],
        },
        {
          title: "Starter",
          subTitle: "Simple explanation",
          priceYearly: "$ 199",
          priceMonthly: "$ 59",
          billedYearly: "Billed yearly",
          billedMonthly: "Billed monthly",
          special: false,
          best: true,
          button: "Try it for free",
          list: [
            "10gb Space",
            "1 User",
            "Team inbox",
            "Website Analitcs",
            "Promotional Pop-ups",
          ],
        },
        {
          title: "Proffesional",
          subTitle: "Simple explanation",
          priceYearly: "$ 399",
          priceMonthly: "$ 289",
          billedYearly: "Billed yearly",
          billedMonthly: "Billed monthly",
          special: true,
          best: false,
          button: "Get Started Now",
          list: [
            "10gb Space",
            "4 User",
            "Team inbox",
            "Lorem Ipsum",
            "Dolor Sit",
            "Website Analitcs",
            "Promotional Pop-ups",
            "24/7 Customer Support",
          ],
        },
        {
          title: "Advanced",
          subTitle: "Simple explanation",
          priceYearly: "$ 499",
          priceMonthly: "$ 359",
          billedYearly: "Billed yearly",
          billedMonthly: "Billed monthly",
          special: false,
          best: false,
          button: "Try it for free",
          list: [
            "10gb Space",
            "4 User",
            "Team inbox",
            "Website Analitcs",
            "Promotional Pop-ups",
            "Lorem Ipsum",
            "Dolor Sit",
            "Website Analitcs",
            "24/7 Customer Support",
            "Consectetur Adipiscing",
          ],
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    Breadcrumb,
    ActionButton,
    Item,
    BilledSwitch,
  },
  methods: {
    switchChange() {
      this.switchChecked = !this.switchChecked;
    },
  },
};
</script>
