<template>
  <b-row class="mb-32">
    <b-col cols="12" class="mb-32">
      <h3>Welcome back, Edward 👋</h3>
      <p class="hp-p1-body mb-0">Your current status and analytics are here</p>
    </b-col>

    <b-col cols="12">
      <b-row>
        <b-col class="flex-grow-1 overflow-hidden">
          <b-row>
            <b-col cols="12" class="mb-32">
              <upgrade-plan-card-one-bg />
            </b-col>

            <b-col cols="12" class="mb-32">
              <visiters-card />
            </b-col>

            <b-col cols="12">
              <b-row>
                <b-col cols="6" md="3" class="mb-32">
                  <order-vertical-card />
                </b-col>

                <b-col cols="6" md="3" class="mb-32">
                  <users-vertical-card />
                </b-col>

                <b-col cols="6" md="3" class="mb-32">
                  <subscribe-vertical-card />
                </b-col>

                <b-col cols="6" md="3" class="mb-32">
                  <ticket-vertical-card />
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="12" class="mb-32">
              <best-team-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <earnings-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <project-table-card />
            </b-col>
          </b-row>
        </b-col>

        <b-col class="hp-analytics-col-2">
          <b-row>
            <b-col cols="12" class="mb-32">
              <expenses-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <download-card />
            </b-col>

            <b-col cols="12" class="mb-32">
              <revenue-radar-card />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import UpgradePlanCardOneBg from "../../widgets/cards/advance/UpgradePlanCardOneBg.vue";
import VisitersCard from "../../widgets/cards/analytics/VisitersCard.vue";
import OrderVerticalCard from "../../widgets/cards/statistics/OrderVerticalCard.vue";
import UsersVerticalCard from "../../widgets/cards/statistics/UsersVerticalCard.vue";
import SubscribeVerticalCard from "../../widgets/cards/statistics/SubscribeVerticalCard.vue";
import TicketVerticalCard from "../../widgets/cards/statistics/TicketVerticalCard.vue";
import BestTeamCard from "../../widgets/cards/advance/BestTeamCard.vue";
import EarningsCard from "../../widgets/cards/advance/EarningsCard.vue";
import ProjectTableCard from "./ProjectTableCard.vue";
import ExpensesCard from "../../widgets/cards/advance/ExpensesCard.vue";
import DownloadCard from "../../widgets/cards/advance/DownloadCard.vue";
import RevenueRadarCard from '../../widgets/cards/analytics/RevenueRadarCard.vue';

export default {
  components: {
    BRow,
    BCol,
    UpgradePlanCardOneBg,
    VisitersCard,
    OrderVerticalCard,
    UsersVerticalCard,
    SubscribeVerticalCard,
    TicketVerticalCard,
    BestTeamCard,
    EarningsCard,
    ProjectTableCard,
    ExpensesCard,
    DownloadCard,
    RevenueRadarCard,
  },
};
</script>
