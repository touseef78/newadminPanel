<template>
    <b-col cols="12" xl="8">
        <b-card id="invoice" class="card border-0 hp-invoice-card">
            <b-row align-h="between">
                <b-col cols="12" lg="6">
                    <div class="hp-header-logo d-flex align-items-end">
                        <b-link to="/">

                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" color="blue"
                                class="bi bi-car-front-fill" viewBox="0 0 16 16">
                                <path
                                    d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                            </svg>
                        </b-link>

                        <a href="https://hypeople-studio.gitbook.io/yoda/change-log" target="_blank" class="d-flex">
                            <span class="h3 font-weight-bold hp-text-color-1 mb-6">Vehicle</span>

                        </a>
                    </div>
                </b-col>

                <b-col cols="12" lg="6">
                    <p class="hp-p1-body mb-16 text-right">
                        Date:30/08/2023
                    </p>
                </b-col>

            
            </b-row>



            <div class="divider"></div>

            <b-row>
                <b-col cols="12">
                    <b-table-simple small caption-top responsive borderless>
                        <b-thead>
                            <b-tr>
                                <b-th scope="col" class="pt-0 pl-0 pb-18 bg-transparent">
                                    Number
                                </b-th>
                                <b-th scope="col" class="pt-0 pb-18 bg-transparent hp-invoice-table-desc">
                                    Description
                                </b-th>
                               
                                <b-th scope="col" class="pt-0 pr-0 pb-18 bg-transparent hp-invoice-table-th text-right">
                                    Price
                                </b-th>
                            </b-tr>
                        </b-thead>

                        <b-tbody>
                            <b-tr>
                                <b-td class="py-6 pl-0">
                                    <p>1</p>
                                </b-td>
                                <b-td class="py-6">
                                    <p>Total Amount</p>
                                </b-td>

                                <b-td class="py-6 pr-0 text-right">
                                    <h5>$ 28</h5>
                                </b-td>
                            </b-tr>

                            <b-tr>
                                <b-td class="py-6 pl-0">
                                    <p>2</p>
                                </b-td>
                                <b-td class="py-6">
                                    <p>Expense Deduct From Salary</p>
                                </b-td>

                                <b-td class="py-6 pr-0 text-right">
                                    <h5>$ 220</h5>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="py-6 pl-0">
                                    <p>3</p>
                                </b-td>
                                <b-td class="py-6">
                                    <p>Total Payable</p>
                                </b-td>

                                <b-td class="py-6 pr-0 text-right">
                                    <h5>$ 1000</h5>
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
            
            
            
<!--             
     <b-col cols="12" xl="3" class="pb-16 hp-print-checkout">
        <b-card id="invoice" class="card border-0 hp-invoice-card" ref="invoiceSection">
          <button class="print-button"  @click="printInvoice">Print</button>
        </b-card>
      </b-col> -->
      <b-col cols="12" xl="3" class="pb-16 hp-print-checkout">
        <b-card id="invoice" class="card border-0 hp-invoice-card" ref="invoiceSection">
          <!-- ... Your existing invoice card content ... -->
        </b-card>
        <b-row align-v="center" align-h="start">
          <b-button @click="downloadInvoice" type="submit" variant="primary">Download Invoice</b-button>
        </b-row>
      </b-col>


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
    BButton
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
        BButton
    },
    //   methods: {
    //     // ... Your other methods ...

    //     printInvoice() {
    //         // Print the invoice content
    //         window.print();
    //     }
    // },

        methods: {
        downloadInvoice() {
            const invoiceSection = this.$refs.invoiceSection;
            const invoiceContent = invoiceSection.innerHTML;
            const blob = new Blob([invoiceContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);

            // Create a temporary anchor element for downloading
            const a = document.createElement('a');
            a.href = url;
            a.download = 'invoice.html';
            a.click();

            // Clean up
            a.remove();
            URL.revokeObjectURL(url);
        }
    }
};
</script>
