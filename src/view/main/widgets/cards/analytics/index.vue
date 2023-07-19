<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title
        title="Analytic Cards"
        desc="You can find special Analytic Cards we designed for Yoda Admin Template"
      />
    </b-col>

    <b-col cols="12">
      <b-row>
        <b-col cols="12" xl="8">
          <b-row>
            <b-col cols="12" class="mb-32">
              <revenue-column-card />
            </b-col>
          
            <b-col cols="12" class="mb-32">
              <visiters-card />
            </b-col>
          
            <b-col cols="12" class="mb-32">
              <trafic-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <b-row>
                <b-col cols="12" xl="6">
                  <marketplace-card />
                </b-col>

                <b-col cols="12" xl="6">
                  <visit-customers-card />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" xl="4">
          <b-row>
            <b-col cols="12" class="mb-32">
              <expenses-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <revenue-radar-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <revenue-line-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <energy-card />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import RevenueColumnCard from "./RevenueColumnCard.vue";
import ExpensesCard from "./ExpensesCard.vue";
import VisitersCard from './VisitersCard.vue';
import RevenueRadarCard from './RevenueRadarCard.vue';
import TraficCard from './TraficCard.vue';
import RevenueLineCard from './RevenueLineCard.vue';
import EnergyCard from './EnergyCard.vue';
import MarketplaceCard from './MarketplaceCard.vue';
import VisitCustomersCard from './VisitCustomersCard.vue';

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    RevenueColumnCard,
    ExpensesCard,
    VisitersCard,
    RevenueRadarCard,
    TraficCard,
    RevenueLineCard,
    EnergyCard,
    MarketplaceCard,
    VisitCustomersCard,
  },
};
</script>
