<template>
  <b-row class="mb-32">
    <b-col cols="12" class="mb-32">
      <b-row align-v="center" align-h="between">
        <b-col cols="12" md="6">
          <h3>Welcome back, Edward 👋</h3>
          <p class="hp-p1-body mb-0">
            Your current status and analytics are here
          </p>
        </b-col>

        <b-col class="hp-flex-none w-auto">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
      </b-row>
    </b-col>

    <b-col cols="12">
      <b-row>
        <b-col cols="12" md="6" xl="3" class="mb-32">
          <customer-feature-card />
        </b-col>

        <b-col cols="12" md="6" xl="3" class="mb-32">
          <orders-feature-card />
        </b-col>

        <b-col cols="12" md="6" xl="3" class="mb-32">
          <sale-feature-card />
        </b-col>

        <b-col cols="12" md="6" xl="3" class="mb-32">
          <profit-feature-card />
        </b-col>

        <b-col cols="12" xl="8">
          <b-row>
            <b-col cols="12" class="mb-32">
              <revenue-column-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <latest-orders />
            </b-col>

            <b-col cols="12" class="mb-32">
              <b-row>
                <b-col cols="12" md="6" class="mb-32">
                  <revenue-card />
                </b-col>

                <b-col cols="12" md="6" class="mb-32">
                  <browser-states />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" xl="4">
          <b-row>
            <b-col cols="12" class="mb-32">
              <earnings-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <cta-card-two />
            </b-col>

            <b-col cols="12" class="mb-32">
              <check-detail-card />
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12">
          <best-selling-products />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BFormSelect } from "bootstrap-vue";

import CustomerFeatureCard from "../../widgets/cards/advance/CustomerFeatureCard.vue";
import OrdersFeatureCard from "../../widgets/cards/advance/OrdersFeatureCard.vue";
import SaleFeatureCard from "../../widgets/cards/advance/SaleFeatureCard.vue";
import ProfitFeatureCard from "../../widgets/cards/advance/ProfitFeatureCard.vue";
import RevenueColumnCard from "../../widgets/cards/analytics/RevenueColumnCard.vue";
import CtaCardTwo from "../../widgets/cards/advance/CtaCardTwo.vue";
import RevenueCard from "../../widgets/cards/statistics/RevenueCard.vue";
import BrowserStates from "./BrowserStates.vue";
import EarningsCard from "./EarningsCard.vue";
import LatestOrders from "./LatestOrders.vue";
import CheckDetailCard from "./CheckDetailCard.vue";
import BestSellingProducts from "./BestSellingProducts.vue";

export default {
  data() {
    return {
      selected: "month",
      options: [
        { value: "month", text: "This Month" },
        { value: "week", text: "This Week" },
        { value: "year", text: "This Year" },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BFormSelect,
    CustomerFeatureCard,
    OrdersFeatureCard,
    SaleFeatureCard,
    ProfitFeatureCard,
    RevenueColumnCard,
    CtaCardTwo,
    RevenueCard,
    BrowserStates,
    EarningsCard,
    LatestOrders,
    CheckDetailCard,
    BestSellingProducts,
  },
};
</script>
