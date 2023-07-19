<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title
        title="Statistics Cards"
        desc="You can find special Statistics Cards we designed for Yoda Admin Template"
      />
    </b-col>

    <b-col cols="12">
      <b-row>
        <b-col cols="12" sm="6" xl="3" class="mb-32">
          <subscribe-card />
        </b-col>

        <b-col cols="12" sm="6" xl="3" class="mb-32">
          <order-card />
        </b-col>

        <b-col cols="12" sm="6" xl="3" class="mb-32">
          <ticket-card />
        </b-col>

        <b-col cols="12" sm="6" xl="3" class="mb-32">
          <users-card />
        </b-col>

        <b-col cols="12" xl="4" class="mb-32">
          <traffic-card />
        </b-col>

        <b-col cols="12" xl="8" class="mb-32">
          <statistics-card />
        </b-col>

        <b-col cols="12">
          <b-row>
            <b-col cols="12" xl="8">
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

            <b-col cols="12" xl="4" class="mb-32">
              <revenue-card />
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
import SubscribeCard from "./SubscribeCard.vue";
import OrderCard from "./OrderCard.vue";
import TicketCard from "./TicketCard.vue";
import UsersCard from "./UsersCard.vue";
import TrafficCard from "./TrafficCard.vue";
import StatisticsCard from "./StatisticsCard.vue";
import OrderVerticalCard from "./OrderVerticalCard.vue";
import UsersVerticalCard from "./UsersVerticalCard.vue";
import SubscribeVerticalCard from "./SubscribeVerticalCard.vue";
import TicketVerticalCard from "./TicketVerticalCard.vue";
import RevenueCard from "./RevenueCard.vue";

export default {
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    SubscribeCard,
    OrderCard,
    TicketCard,
    UsersCard,
    TrafficCard,
    StatisticsCard,
    OrderVerticalCard,
    UsersVerticalCard,
    SubscribeVerticalCard,
    TicketVerticalCard,
    RevenueCard,
  },
};
</script>
