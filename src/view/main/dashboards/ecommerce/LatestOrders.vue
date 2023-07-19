<template>
  <b-card class="hp-project-ecommerce-table-card">
    <b-row>
      <b-col cols="12">
        <div class="d-flex align-items-center justify-content-between mb-32">
          <h5 class="mb-0">Latest Orders</h5>
          <p
            class="hp-p1-body mb-0 font-weight-medium text-black-100 hp-text-color-dark-0"
          >
            View all orders
          </p>
        </div>

        <b-table-simple borderless responsive class="align-middle mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 110px">
                <span
                  class="hp-badge-size d-block pb-16 font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
                >
                  Date
                </span>
              </b-th>
              <b-th style="min-width: 180px">
                <span
                  class="hp-badge-size d-block pb-16 font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
                >
                  Billing Name
                </span>
              </b-th>
              <b-th>
                <span
                  class="hp-badge-size d-block pb-16 font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
                >
                  Amount
                </span>
              </b-th>
              <b-th>
                <span
                  class="hp-badge-size d-block pb-16 font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
                >
                  Status
                </span>
              </b-th>
              <b-th class="text-center">
                <span
                  class="hp-badge-size d-block pb-16 font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
                >
                  Invoice
                </span>
              </b-th>
            </b-tr>
          </b-thead>

          <tbody>
            <b-tr :key="index" v-for="(item, index) in tableData">
              <b-td class="ps-0">
                <span
                  class="mb-0 font-weight-medium text-black-100 hp-text-color-dark-0"
                >
                  {{ item.date }}
                </span>
              </b-td>

              <b-td>
                <span class="mb-0 text-black-80 hp-text-color-dark-30">
                  {{ item.name }}
                </span>
              </b-td>

              <b-td>
                <span class="mb-0 text-black-80 hp-text-color-dark-30">
                  {{ item.amount }}
                </span>
              </b-td>

              <b-td>
                <b-badge :variant="item.statusVariant">
                  {{ item.status }}
                </b-badge>
              </b-td>

              <b-td>
                <span
                  class="d-block text-black-60 hp-text-color-dark-50 text-center"
                >
                  <i class="iconly-Light-Download"></i>
                </span>
              </b-td>
            </b-tr>
          </tbody>
        </b-table-simple>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BTableSimple,
  BThead,
  BTbody,
  BTh,
  BTr,
  BTd,
  BBadge,
} from "bootstrap-vue";

export default {
  data() {
    return {
      tableData: [
        {
          date: "June 9, 2020",
          name: "Elon Musk",
          amount: "$1,322.45",
          statusVariant: "success",
          status: "Paid",
        },
        {
          date: "June 9, 2020",
          name: "Christiano Ronaldo",
          amount: "$733.32",
          statusVariant: "success",
          status: "Paid",
        },
        {
          date: "June 10, 2020",
          name: "Jeff Bezos",
          amount: "$1,923.32",
          statusVariant: "warning",
          status: "Refund",
        },
        {
          date: "June 9, 2020",
          name: "Richard Hamilton",
          amount: "$922.12",
          statusVariant: "success",
          status: "Paid",
        },
        {
          date: "June 10, 2020",
          name: "Lebron James",
          amount: "$323.98",
          statusVariant: "danger",
          status: "Charge Back",
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BTableSimple,
    BThead,
    BTbody,
    BTh,
    BTr,
    BTd,
    BBadge,
  },
};
</script>
