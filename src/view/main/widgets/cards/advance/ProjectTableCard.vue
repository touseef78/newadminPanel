<template>
  <b-card class="hp-card-6 hp-project-table-card">
    <b-row align-v="center" align-h="between" class="mb-8">
      <b-col class="hp-flex-none w-auto">
        <h5 class="mb-0">Projects</h5>
      </b-col>

      <b-col class="hp-flex-none w-auto">
        <i
          class="ri-more-fill hp-text-color-dark-0"
          style="font-size: 24px"
        ></i>
      </b-col>
    </b-row>

    <b-table-simple responsive borderless class="mb-0">
      <b-thead>
        <b-tr>
          <b-th>
            <span
              class="hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
            >
              #
            </span>
          </b-th>
          <b-th>
            <span
              class="hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
            >
              Project Name
            </span>
          </b-th>
          <b-th>
            <span
              class="hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
            >
              Start Date
            </span>
          </b-th>
          <b-th>
            <span
              class="hp-badge-size font-weight-normal text-black-60 hp-text-color-dark-50 text-uppercase"
            >
              End Date
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
              Assign
            </span>
          </b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr :key="index" v-for="(item, index) in tableData">
          <b-td>
            <span
              class="mb-0 font-weight-medium text-black-100 hp-text-color-dark-0"
            >
              {{ index + 1 }}
            </span>
          </b-td>
          <b-td>
            <span class="mb-0 text-black-80 hp-text-color-dark-30">
              {{ item.name }}
            </span>
          </b-td>
          <b-td>
            <span class="mb-0 text-black-80 hp-text-color-dark-30">
              {{ item.startDate }}
            </span>
          </b-td>
          <b-td>
            <span class="mb-0 text-black-80 hp-text-color-dark-30">
              {{ item.endDate }}
            </span>
          </b-td>
          <b-td>
            <b-badge :variant="item.statusVariant">
              {{ item.status }}
            </b-badge>
          </b-td>
          <b-td>
            <span class="mb-0 text-black-80 hp-text-color-dark-30">
              {{ item.assign }}
            </span>
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
  BTr,
  BTh,
  BTd,
} from "bootstrap-vue";

export default {
  data() {
    return {
      tableData: [
        {
          name: "Yoda React",
          startDate: "12/05/2021",
          endDate: "12/08/2021",
          statusVariant: "primary",
          status: "Work",
          assign: "Justin Botosh",
        },
        {
          name: "Leia Html",
          startDate: "12/04/2021",
          endDate: "12/06/2021",
          statusVariant: "secondary",
          status: "Review",
          assign: "Leo Stanton",
        },
        {
          name: "Yoda Vue",
          startDate: "12/09/2021",
          endDate: "12/12/2021",
          statusVariant: "danger",
          status: "Soon",
          assign: "Mira Korsgaard",
        },
        {
          name: "Yoda Bootstrap",
          startDate: "12/09/2021",
          endDate: "12/12/2021",
          statusVariant: "danger",
          status: "Soon",
          assign: "Miracle Gouse",
        },
        {
          name: "Yoda Angular",
          startDate: "12/09/2021",
          endDate: "12/12/2021",
          statusVariant: "danger",
          status: "Soon",
          assign: "Miracle Gouse",
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
    BTr,
    BTh,
    BTd,
  },
};
</script>
