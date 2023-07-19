<template>
  <b-col cols="12" xl="8">
    <b-card id="invoice" class="card border-0 hp-invoice-card">
      <b-row align-h="between">
        <b-col cols="12" lg="6">
          <img
            class="hp-logo mb-16"
            :src="
              this.$store.state.themeConfig.theme == 'dark'
                ? require('@/assets/img/logo/logo-dark.svg')
                : require('@/assets/img/logo/logo.svg')
            "
            alt="logo"
          />
        </b-col>

        <b-col cols="12" lg="6">
          <p class="hp-p1-body mb-16 text-right">
            INVOICE NUMBER #125863478945
          </p>
        </b-col>

        <b-col cols="12">
          <p>Company name</p>
          <p>1065 Mandan Road, Columbia MO, Missouri. (123)-65202</p>
          <p>demo@gmail.com</p>
          <p>+91 919-91-91-919</p>
        </b-col>
      </b-row>

      <div class="divider"></div>

      <b-row align-h="between">
        <b-col cols="12" md="4" class="pb-16 hp-print-info">
          <p
            class="hp-text-color-black-100 hp-text-color-dark-0 hp-input-label"
          >
            CLIENT INFORMATION:
          </p>
          <p>Edward Yildirim</p>
          <p>1065 Atasehir/Istanbul</p>
          <p>(123)-65202</p>
          <p>(1234) - 567891</p>
          <p>demo@gmail.com</p>
        </b-col>

        <b-col cols="12" md="4" class="pb-16 hp-print-info">
          <p
            class="hp-text-color-black-100 hp-text-color-dark-0 hp-input-label"
          >
            ORDER INFORMATION:
          </p>
          <p>Date: November 14</p>
          <p>Status: Pending</p>
          <p>Id : #146859</p>
        </b-col>

        <b-col cols="12" md="4" class="text-left text-sm-right hp-print-info">
          <p>Date Issue: 08/10/2019</p>
          <p>Date Due: 08/10/2019</p>
        </b-col>
      </b-row>

      <div class="divider"></div>

      <b-row>
        <b-col cols="12">
          <b-table-simple small caption-top responsive borderless>
            <b-thead>
              <b-tr>
                <b-th scope="col" class="pt-0 pl-0 pb-18 bg-transparent">
                  Item
                </b-th>
                <b-th
                  scope="col"
                  class="pt-0 pb-18 bg-transparent hp-invoice-table-desc"
                >
                  Description
                </b-th>
                <b-th
                  scope="col"
                  class="pt-0 pl-0 pb-18 bg-transparent hp-invoice-table-th"
                >
                  Cost
                </b-th>
                <b-th
                  scope="col"
                  class="pt-0 px-0 pb-18 bg-transparent hp-invoice-table-th text-center"
                >
                  QTY
                </b-th>
                <b-th
                  scope="col"
                  class="pt-0 pr-0 pb-18 bg-transparent hp-invoice-table-th text-right"
                >
                  Price
                </b-th>
              </b-tr>
            </b-thead>

            <b-tbody>
              <b-tr>
                <b-td class="py-6 pl-0">
                  <p>Yoda Admin</p>
                </b-td>
                <b-td class="py-6">
                  <p>HTML Admin Template</p>
                </b-td>
                <b-td class="py-6 pl-0">
                  <p>28 $</p>
                </b-td>
                <b-td class="py-6 px-0 text-center">
                  <p>1</p>
                </b-td>
                <b-td class="py-6 pr-0 text-right">
                  <h5>$ 28</h5>
                </b-td>
              </b-tr>

              <b-tr>
                <b-td class="py-6 pl-0">
                  <p>Logo Design</p>
                </b-td>
                <b-td class="py-6">
                  <p>Guideline, Idea,Color Combinations,LogoTYPE</p>
                </b-td>
                <b-td class="py-6 pl-0">
                  <p>220 $</p>
                </b-td>
                <b-td class="py-6 px-0 text-center">
                  <p>1</p>
                </b-td>
                <b-td class="py-6 pr-0 text-right">
                  <h5>$ 220</h5>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>
      </b-row>

      <div class="divider"></div>

      <b-row align-h="end" class="mr-0">
        <b-col cols="12" xl="3" class="pb-16 hp-print-checkout">
          <b-row align-v="center" align-h="between">
            <p class="hp-badge-text hp-flex-none w-auto">Subtotal</p>
            <h5 class="mb-4 hp-flex-none w-auto">$ 248.00</h5>
          </b-row>

          <b-row align-v="center" align-h="between">
            <p class="hp-badge-text hp-flex-none w-auto">Discount %10</p>
            <h5 class="mb-4 hp-flex-none w-auto">-$ 24.80</h5>
          </b-row>

          <b-row align-v="center" align-h="between">
            <p class="hp-badge-text hp-flex-none w-auto">Tax %20</p>
            <h5 class="hp-flex-none w-auto">$ 49.60</h5>
          </b-row>

          <b-row>
            <div class="divider"></div>
          </b-row>

          <b-row align-v="center" align-h="between">
            <h5 class="text-primary hp-flex-none w-auto">Total</h5>
            <h5 class="text-primary hp-flex-none w-auto">$ 272.80</h5>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
import {
  BRow,
  BCol,
  BTableSimple,
  BThead,
  BTbody,
  BTr,
  BTh,
  BTd,
  BCard,
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BTableSimple,
    BThead,
    BTbody,
    BTr,
    BTh,
    BTd,
    BCard,
  },
};
</script>
