<template>
  <b-card class="hp-card-6 hp-order-table-card">
    <h5 class="mb-8">Recent Orders</h5>

    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-th>
            <span
              class="hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
            >
              Order Id
            </span>
          </b-th>
          <b-th>
            <span
              class="hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
            >
              Product
            </span>
          </b-th>
          <b-th>
            <span
              class="hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
            >
              Date
            </span>
          </b-th>
          <b-th>
            <span
              class="hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
            >
              Status
            </span>
          </b-th>
          <b-th>
            <span
              class="hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
            >
              Price
            </span>
          </b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr :key="index" v-for="(item, index) in tableData">
          <b-td class="align-middle">
            <span class="text-color-dark-0">#{{ item.orderId }}</span>
          </b-td>
          <b-td class="align-middle">
            <div
              class="bg-black-20 hp-bg-color-dark-70 hp-img-container rounded text-center p-4"
            >
              <img :src="item.img" alt="Product" />
            </div>
          </b-td>
          <b-td class="align-middle">
            <span class="text-color-dark-0">{{ item.date }}</span>
          </b-td>
          <b-td class="align-middle">
            <b-badge :variant="item.statusVariant" class="text-uppercase">{{ item.status }}</b-badge>
          </b-td>
          <b-td class="align-middle">
            <span class="text-color-dark-0">{{ item.price }}</span>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </b-card>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BBadge,
  BTableSimple,
  BThead,
  BTbody,
  BTh,
  BTr,
  BTd,
} from "bootstrap-vue";

export default {
  data() {
    return {
      tableData: [
        {
          orderId: "1341234123",
          img: require("@/assets/img/product/watch-1.png"),
          date: "04/05/2021",
          statusVariant: "primary",
          status: "Pending",
          price: "$200",
        },
        {
          orderId: "1123412123",
          img: require("@/assets/img/product/wireless-bluetooth-1.png"),
          date: "04/05/2021",
          statusVariant: "warning",
          status: "Delayed",
          price: "$345",
        },
        {
          orderId: "242367123",
          img: require("@/assets/img/product/xbox-1.png"),
          date: "04/05/2021",
          statusVariant: "danger",
          status: "Closed",
          price: "$277",
        },
        {
          orderId: "255167123",
          img: require("@/assets/img/product/white-cam-1.png"),
          date: "04/05/2021",
          statusVariant: "success",
          status: "Done",
          price: "$100",
        },
        {
          orderId: "242367123",
          img: require("@/assets/img/product/3d-glasses-1.png"),
          date: "04/05/2021",
          statusVariant: "success",
          status: "Done",
          price: "$100",
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BBadge,
    BTableSimple,
    BThead,
    BTbody,
    BTh,
    BTr,
    BTd,
  },
};
</script>
