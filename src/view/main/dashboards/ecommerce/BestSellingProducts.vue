<template>
  <div class="best-selling-product-slide overflow-hidden">
    <b-row align-v="center" align-h="between" class="mb-16">
      <b-col cols="6">
        <h4 class="mb-0">Best Selling Products</h4>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <div class="d-flex">
          <b-button
            variant="none"
            class="bg-white hp-bg-dark-100 hp-hover-border-color-dark-primary-2 hp-hover-text-color-dark-primary-2 btn-icon-only"
            @click="prev()"
          >
            <i
              class="ri-arrow-left-s-line remix-icon mb-0"
              style="font-size: 24px"
            ></i>
          </b-button>

          <b-button
            variant="none"
            class="bg-white hp-bg-dark-100 hp-hover-border-color-dark-primary-2 hp-hover-text-color-dark-primary-2 btn-icon-only ml-8"
            @click="next()"
          >
            <i
              class="ri-arrow-right-s-line remix-icon mb-0"
              style="font-size: 24px"
            ></i>
          </b-button>
        </div>
      </b-col>
    </b-row>

    <div class="hp-dashboard-ecommerce-product-slider">
      <slick ref="slick" :options="slickOptions">
        <e-commerce-product-card
          :key="index"
          v-for="(item, index) in slideData"
          :item="item"
          class="px-16"
        />
      </slick>
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";

import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";

import ECommerceProductCard from "../../widgets/cards/advance/ECommerceProductCard.vue";

export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        infinite: false,
        speed: 800,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      slideData: [
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
        {
          img: require("@/assets/img/product/ecommerce-product-img-2.png"),
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
    BCard,
    BButton,
    Slick,
    ECommerceProductCard,
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log("handleAfterChange", event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log("handleBeforeChange", event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log("handleBreakpoint", event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log("handleDestroy", event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log("handleEdge", event, slick, direction);
    },
    handleInit(event, slick) {
      console.log("handleInit", event, slick);
    },
    handleReInit(event, slick) {
      console.log("handleReInit", event, slick);
    },
    handleSetPosition(event, slick) {
      console.log("handleSetPosition", event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log("handleSwipe", event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log("handleLazyLoaded", event, slick, image, imageSource);
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log("handleLazeLoadError", event, slick, image, imageSource);
    },
  },
};
</script>
