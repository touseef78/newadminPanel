<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title
        title="Advance Cards"
        desc="You can find special cards we designed for Yoda Admin Template"
      />
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

        <b-col
          cols="12"
          md="4"
          :key="index"
          v-for="(item, index) in ecommerceProductData"
          class="mb-24"
        >
          <e-commerce-product-card :item="item" />
        </b-col>

        <b-col cols="12" sm="6" xl="4">
          <b-row>
            <b-col cols="12" class="mb-32">
              <categories-of-the-week />
            </b-col>

            <b-col cols="12" class="mb-32">
              <best-selling-categories />
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" sm="6" xl="4">
          <b-row>
            <b-col cols="12" class="mb-32">
              <ecommerce-card-one />
            </b-col>

            <b-col cols="12" class="mb-32">
              <attendence-card />
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" xl="4">
          <b-row>
            <b-col cols="12" sm="6" xl="12" class="mb-32">
              <browser-states />
            </b-col>

            <b-col cols="12" sm="6" xl="12" class="mb-32">
              <ecommerce-card-two />
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" md="6" class="mb-32">
          <credit-visa-card />
        </b-col>

        <b-col cols="12" md="6" class="mb-32">
          <credit-master-card />
        </b-col>

        <b-col cols="12" xl="4" class="mb-32">
          <cta-card-one />
        </b-col>

        <b-col cols="12" xl="4" class="mb-32">
          <cta-card-two />
        </b-col>

        <b-col cols="12" xl="4" class="mb-32">
          <subscribe-card />
        </b-col>

        <b-col cols="12" xl="9">
          <b-row>
            <b-col cols="12" class="mb-32">
              <ecommerce-card-three />
            </b-col>

            <b-col cols="12" class="mb-32">
              <ecommerce-card-six />
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" xl="3">
          <b-row>
            <b-col cols="12" class="mb-32">
              <ecommerce-card-four />
            </b-col>

            <b-col cols="12" class="mb-32">
              <ecommerce-card-five />
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="12" class="mb-32">
          <orderlist-table-card />
        </b-col>

        <b-col cols="12" xl="4" class="mb-32">
          <social-media-card />
        </b-col>

        <b-col cols="12" xl="8" class="mb-32">
          <project-table-card />
        </b-col>

        <b-col cols="12" xl="4" class="mb-32">
          <meeting-card />
        </b-col>

        <b-col cols="12" xl="4" class="mb-32">
          <notification-card-one />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import CustomerFeatureCard from "./CustomerFeatureCard.vue";
import OrdersFeatureCard from "./OrdersFeatureCard.vue";
import SaleFeatureCard from "./SaleFeatureCard.vue";
import ProfitFeatureCard from "./ProfitFeatureCard.vue";
import ECommerceProductCard from "./ECommerceProductCard.vue";
import CategoriesOfTheWeek from "./CategoriesOfTheWeek.vue";
import BestSellingCategories from "./BestSellingCategories.vue";
import EcommerceCardOne from "./EcommerceCardOne.vue";
import AttendenceCard from "./AttendenceCard.vue";
import BrowserStates from "./BrowserStates.vue";
import EcommerceCardTwo from "./EcommerceCardTwo.vue";
import CreditVisaCard from "./CreditVisaCard.vue";
import CreditMasterCard from "./CreditMasterCard.vue";
import CtaCardOne from "./CtaCardOne.vue";
import CtaCardTwo from "./CtaCardTwo.vue";
import SubscribeCard from "./SubscribeCard.vue";
import EcommerceCardThree from "./EcommerceCardThree.vue";
import EcommerceCardSix from "./EcommerceCardSix.vue";
import EcommerceCardFive from "./EcommerceCardFive.vue";
import EcommerceCardFour from "./EcommerceCardFour.vue";
import OrderlistTableCard from "./OrderlistTableCard.vue";
import SocialMediaCard from "./SocialMediaCard.vue";
import ProjectTableCard from "./ProjectTableCard.vue";
import MeetingCard from "./MeetingCard.vue";
import NotificationCardOne from './NotificationCardOne.vue';

export default {
  data() {
    return {
      ecommerceProductData: [
        {
          img: require("@/assets/img/product/ecommerce-product-img-1.png"),
          price: "$69.00",
          discount: "$79.00",
          title: "Rales Wireless Earbuds Bluetooth 5.0",
          subTitle: "By Urbanears",
        },
        {
          img: require("@/assets/img/product/ecommerce-product-img-2.png"),
          price: "$69.00",
          discount: "$79.00",
          title: "Rales Wireless Earbuds Bluetooth 5.0",
          subTitle: "By Urbanears",
        },
        {
          img: require("@/assets/img/product/ecommerce-product-img-1.png"),
          price: "$69.00",
          discount: "$79.00",
          title: "Rales Wireless Earbuds Bluetooth 5.0",
          subTitle: "By Urbanears",
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    CustomerFeatureCard,
    OrdersFeatureCard,
    SaleFeatureCard,
    ProfitFeatureCard,
    ECommerceProductCard,
    CategoriesOfTheWeek,
    BestSellingCategories,
    EcommerceCardOne,
    AttendenceCard,
    BrowserStates,
    EcommerceCardTwo,
    CreditVisaCard,
    CreditMasterCard,
    CtaCardOne,
    CtaCardTwo,
    SubscribeCard,
    EcommerceCardThree,
    EcommerceCardSix,
    EcommerceCardFour,
    EcommerceCardFive,
    OrderlistTableCard,
    SocialMediaCard,
    ProjectTableCard,
    MeetingCard,
    NotificationCardOne,
  },
};
</script>
