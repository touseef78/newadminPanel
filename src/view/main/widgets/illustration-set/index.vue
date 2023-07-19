<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title
        desc="We used Bangalore Illustration Set and customized it for Yoda"
      />
    </b-col>

    <b-col cols="12">
      <illustration-item :propsIllustrations="illustrations" />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import IllustrationItem from "./IllustrationItem.vue";

export default {
  data() {
    return {
      illustrations: [
        {
          img: require("@/assets/img/illustrations/ab-testing.svg"),
          imgDark: require("@/assets/img/illustrations/ab-testing-dark.svg"),
          title: "A/B Testing",
        },
        {
          img: require("@/assets/img/illustrations/about-us.svg"),
          imgDark: require("@/assets/img/illustrations/about-us-dark.svg"),
          title: "About Us About Our Team",
        },
        {
          img: require("@/assets/img/illustrations/add-products.svg"),
          imgDark: require("@/assets/img/illustrations/add-products-dark.svg"),
          title: "Add Products",
        },
        {
          img: require("@/assets/img/illustrations/being-creative.svg"),
          imgDark: require("@/assets/img/illustrations/being-creative-dark.svg"),
          title: "Being Creative",
        },
        {
          img: require("@/assets/img/illustrations/bring-solutions.svg"),
          imgDark: require("@/assets/img/illustrations/bring-solutions-dark.svg"),
          title: "Bring Solutions",
        },
        {
          img: require("@/assets/img/illustrations/business-deal.svg"),
          imgDark: require("@/assets/img/illustrations/business-deal-dark.svg"),
          title: "Business Deal",
        },
        {
          img: require("@/assets/img/illustrations/charts-pie-and-bars.svg"),
          imgDark: require("@/assets/img/illustrations/charts-pie-and-bars-dark.svg"),
          title: "Charts Pie And Bars",
        },
        {
          img: require("@/assets/img/illustrations/clickbait.svg"),
          imgDark: require("@/assets/img/illustrations/clickbait-dark.svg"),
          title: "Clickbait",
        },
        {
          img: require("@/assets/img/illustrations/coding.svg"),
          imgDark: require("@/assets/img/illustrations/coding-dark.svg"),
          title: "Coding",
        },
        {
          img: require("@/assets/img/illustrations/coming-soon.svg"),
          imgDark: require("@/assets/img/illustrations/coming-soon-dark.svg"),
          title: "Coming Soon",
        },
        {
          img: require("@/assets/img/illustrations/design-thinking.svg"),
          imgDark: require("@/assets/img/illustrations/design-thinking-dark.svg"),
          title: "Design Thinking",
        },
        {
          img: require("@/assets/img/illustrations/digital-ads-performance.svg"),
          imgDark: require("@/assets/img/illustrations/digital-ads-performance-dark.svg"),
          title: "Digital Ads Performance",
        },
        {
          img: require("@/assets/img/illustrations/downloading.svg"),
          imgDark: require("@/assets/img/illustrations/downloading-dark.svg"),
          title: "Downloading",
        },
        {
          img: require("@/assets/img/illustrations/fixing-bugs.svg"),
          imgDark: require("@/assets/img/illustrations/fixing-bugs-dark.svg"),
          title: "Fixing Bugs",
        },
        {
          img: require("@/assets/img/illustrations/get-inspired.svg"),
          imgDark: require("@/assets/img/illustrations/get-inspired-dark.svg"),
          title: "Get Inspired",
        },
        {
          img: require("@/assets/img/illustrations/gifting-online.svg"),
          imgDark: require("@/assets/img/illustrations/gifting-online-dark.svg"),
          title: "Online Gifting",
        },
        {
          img: require("@/assets/img/illustrations/illustrator-drawing.svg"),
          imgDark: require("@/assets/img/illustrations/illustrator-drawing-dark.svg"),
          title: "Illustrator Drawing",
        },
        {
          img: require("@/assets/img/illustrations/interface.svg"),
          imgDark: require("@/assets/img/illustrations/interface-dark.svg"),
          title: "Interface",
        },
        {
          img: require("@/assets/img/illustrations/investing.svg"),
          imgDark: require("@/assets/img/illustrations/investing-dark.svg"),
          title: "Investing",
        },
        {
          img: require("@/assets/img/illustrations/listening-feedback.svg"),
          imgDark: require("@/assets/img/illustrations/listening-feedback-dark.svg"),
          title: "Listening Feedback",
        },
        {
          img: require("@/assets/img/illustrations/loading.svg"),
          imgDark: require("@/assets/img/illustrations/loading-dark.svg"),
          title: "Loading",
        },
        {
          img: require("@/assets/img/illustrations/marketing-target.svg"),
          imgDark: require("@/assets/img/illustrations/marketing-target-dark.svg"),
          title: "Marketing Target",
        },
        {
          img: require("@/assets/img/illustrations/modular-coding.svg"),
          imgDark: require("@/assets/img/illustrations/modular-coding-dark.svg"),
          title: "Modular Coding Application",
        },
        {
          img: require("@/assets/img/illustrations/newsletter.svg"),
          imgDark: require("@/assets/img/illustrations/newsletter-dark.svg"),
          title: "Newsletter",
        },
        {
          img: require("@/assets/img/illustrations/office-desk.svg"),
          imgDark: require("@/assets/img/illustrations/office-desk-dark.svg"),
          title: "Office Desk",
        },
        {
          img: require("@/assets/img/illustrations/overworked-employee.svg"),
          imgDark: require("@/assets/img/illustrations/overworked-employee-dark.svg"),
          title: "Overworked Employee",
        },
        {
          img: require("@/assets/img/illustrations/page-under-construction.svg"),
          imgDark: require("@/assets/img/illustrations/page-under-construction-dark.svg"),
          title: "Page Under Construction",
        },
        {
          img: require("@/assets/img/illustrations/payment-with-card.svg"),
          imgDark: require("@/assets/img/illustrations/payment-with-card-dark.svg"),
          title: "Payment With Card",
        },
        {
          img: require("@/assets/img/illustrations/protect-privacy.svg"),
          imgDark: require("@/assets/img/illustrations/protect-privacy-dark.svg"),
          title: "Protect Privacy",
        },
        {
          img: require("@/assets/img/illustrations/searching.svg"),
          imgDark: require("@/assets/img/illustrations/searching-dark.svg"),
          title: "Searching",
        },
        {
          img: require("@/assets/img/illustrations/share.svg"),
          imgDark: require("@/assets/img/illustrations/share-dark.svg"),
          title: "Share",
        },
        {
          img: require("@/assets/img/illustrations/social-media-discussion.svg"),
          imgDark: require("@/assets/img/illustrations/social-media-discussion-dark.svg"),
          title: "Social Media Discussion",
        },
        {
          img: require("@/assets/img/illustrations/success.svg"),
          imgDark: require("@/assets/img/illustrations/success-dark.svg"),
          title: "Success",
        },
        {
          img: require("@/assets/img/illustrations/trophy-awards.svg"),
          imgDark: require("@/assets/img/illustrations/trophy-awards-dark.svg"),
          title: "Trophy Awards",
        },
        {
          img: require("@/assets/img/illustrations/video-conference.svg"),
          imgDark: require("@/assets/img/illustrations/video-conference-dark.svg"),
          title: "Video Conference",
        },
        {
          img: require("@/assets/img/illustrations/virtual-reality.svg"),
          imgDark: require("@/assets/img/illustrations/virtual-reality-dark.svg"),
          title: "Virtual Reality",
        },
        {
          img: require("@/assets/img/illustrations/we-are-hiring.svg"),
          imgDark: require("@/assets/img/illustrations/we-are-hiring-dark.svg"),
          title: "We Are Hiring",
        },
        {
          img: require("@/assets/img/illustrations/we-got-a-problem.svg"),
          imgDark: require("@/assets/img/illustrations/we-got-a-problem-dark.svg"),
          title: "We Got A Problem",
        },
        {
          img: require("@/assets/img/illustrations/welcome.svg"),
          imgDark: require("@/assets/img/illustrations/welcome-dark.svg"),
          title: "Welcome",
        },
        {
          img: require("@/assets/img/illustrations/work-from-home.svg"),
          imgDark: require("@/assets/img/illustrations/work-from-home-dark.svg"),
          title: "Work From Home",
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    IllustrationItem,
  },
};
</script>