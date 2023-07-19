<template>
  <div class="hp-card-6 hp-eCommerceCardOne">
    <div
      class="rounded overflow-hidden border border-black-40 hp-border-color-dark-80 bg-black-0 hp-bg-color-dark-100 h-100"
    >
      <div
        class="text-center bg-black-10 hp-bg-color-dark-80 hp-card-2 d-flex align-items-center justify-content-center"
      >
        <img :src="item.img" :alt="item.title" />
      </div>

      <div class="p-24">
        <div class="mb-16 mt-8">
          <h3 class="mb-4">{{ item.price }}</h3>
          <p
            class="mb-0 me-4 font-weight-medium text-black-60 hp-text-color-dark-50 text-decoration-line-through hp-badge"
          >
            {{ item.discount }}
          </p>
        </div>

        <div class="mb-8">
          <p class="mb-4 text-black-100 hp-text-color-dark-0 hp-p1-body">
            {{ item.title }}
          </p>
          <p class="mb-0 hp-caption text-black-60 hp-text-color-dark-50">
            {{ item.subTitle }}
          </p>
        </div>

        <div class="mt-16">
          <ul class="d-flex">
            <li class="mr-6">
              <i class="ri-star-fill text-warning" style="font-size: 20px"></i>
            </li>
            <li class="mr-6">
              <i class="ri-star-fill text-warning" style="font-size: 20px"></i>
            </li>
            <li class="mr-6">
              <i class="ri-star-fill text-warning" style="font-size: 20px"></i>
            </li>
            <li class="mr-6">
              <i class="ri-star-fill text-warning" style="font-size: 20px"></i>
            </li>
            <li>
              <i
                class="ri-star-fill text-black-40 hp-text-color-dark-70"
                style="font-size: 20px"
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BCard, BAvatar } from "bootstrap-vue";

export default {
  props: ["item"],
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
  },
};
</script>
