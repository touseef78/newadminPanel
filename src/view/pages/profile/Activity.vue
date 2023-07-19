<template>
  <b-row>
    <b-col cols="12">
      <h2>Login Activity</h2>
      <p class="hp-p1-body mb-0">Here is your last 6 login activities log.</p>
    </b-col>

    <div class="divider mx-16 border-black-40 hp-border-color-dark-80"></div>

    <b-col cols="12">
      <b-table-simple responsive class="border rounded mb-0 hp-border-color-dark-80">
        <b-thead>
          <b-tr>
            <b-th>Name</b-th>
            <b-th>IP</b-th>
            <b-th>Time</b-th>
            <b-th class="text-right">#</b-th>
          </b-tr>
        </b-thead>

        <b-tbody>
          <b-tr>
            <b-td style="min-width: 200px; width: 200px">
              <span
                class="hp-p1-body text-black-100 hp-text-color-dark-0 font-weight-lighter"
              >
                Chrome on Mac
              </span>
            </b-td>

            <b-td style="min-width: 200px; width: 200px">
              <span
                class="hp-p1-body text-black-100 hp-text-color-dark-0 font-weight-lighter"
              >
                211.281.456.111
              </span>
            </b-td>

            <b-td style="min-width: 200px; width: 200px">
              <span
                class="hp-p1-body text-black-100 hp-text-color-dark-0 font-weight-lighter"
              >
                Nov 12, 2019 08:56 PM
              </span>
            </b-td>

            <b-td class="text-right">
              <b-button
                variant="text"
                class="p-0 hp-p1-body text-black-100 hp-text-color-dark-0 font-weight-medium"
                style="margin-top: -4px; min-height: 0"
              >
                <span>Delete</span>
              </b-button>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BButton,
  BTableSimple,
  BThead,
  BTbody,
  BTh,
  BTr,
  BTd,
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BTableSimple,
    BThead,
    BTbody,
    BTh,
    BTr,
    BTd,
  },
};
</script>
