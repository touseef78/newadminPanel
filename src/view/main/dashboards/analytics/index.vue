<template>
    <b-row class="mb-32">
        <!-- <b-col cols="12" class="mb-32">
            <h3>Welcome back, Edward 👋</h3>
            <p class="hp-p1-body mb-0">Your current status and analytics are here</p>
        </b-col> -->

        <b-col cols="12">
            <b-row>
                <b-col class="flex-grow-1 overflow-hidden">
                    <b-row>
                        <b-col cols="12" class="mb-32">

                        </b-col>
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


                        <!-- new code  -->
                        <b-col cols="12" md="6" xl="3" class="mb-32">
                            <vehicle-feature-card />
                        </b-col>

                        <b-col cols="12" md="6" xl="3" class="mb-32">
                            <earning-feature-card />
                        </b-col>

                        <b-col cols="12" md="6" xl="3" class="mb-32">
                            <total-profit-card />
                        </b-col>

                        <b-col cols="12" md="6" xl="3" class="mb-32">
                            <total-expense-card />
                        </b-col>
                    </b-row>
                </b-col>


            </b-row>
            <b-row>
                <!-- new code  -->
                 <b-col cols="12" xl="8">
                  <b-row>
                    <b-col cols="12" class="mb-32">
                      <new-revenue-colum />
                    </b-col>
        
                  </b-row>
              
                </b-col>
                <b-col cols="12" xl="4">
                  <b-row>
                    <b-col cols="12" class="mb-32">
                      <new-earning-card />
                    </b-col>
                  </b-row>
                </b-col>
            </b-row>
            
            
             

        </b-col>
    </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import CustomerFeatureCard from "../../widgets/cards/advance/CustomerFeatureCard.vue";
import OrdersFeatureCard from "../../widgets/cards/advance/OrdersFeatureCard.vue";
import SaleFeatureCard from "../../widgets/cards/advance/SaleFeatureCard.vue";
import ProfitFeatureCard from "../../widgets/cards/advance/ProfitFeatureCard.vue";
import UpgradePlanCardOneBg from "../../widgets/cards/advance/UpgradePlanCardOneBg.vue";
import VisitersCard from "../../widgets/cards/analytics/VisitersCard.vue";
import OrderVerticalCard from "../../widgets/cards/statistics/OrderVerticalCard.vue";
import UsersVerticalCard from "../../widgets/cards/statistics/UsersVerticalCard.vue";
import SubscribeVerticalCard from "../../widgets/cards/statistics/SubscribeVerticalCard.vue";
import TicketVerticalCard from "../../widgets/cards/statistics/TicketVerticalCard.vue";
import BestTeamCard from "../../widgets/cards/advance/BestTeamCard.vue";
import EarningsCard from "../../widgets/cards/advance/EarningsCard.vue";
import ProjectTableCard from "./ProjectTableCard.vue";
import ExpensesCard from "../../widgets/cards/advance/ExpensesCard.vue";
import DownloadCard from "../../widgets/cards/advance/DownloadCard.vue";
import RevenueRadarCard from '../../widgets/cards/analytics/RevenueRadarCard.vue';
//  new code 
import VehicleFeatureCard from "../../widgets/cards/advance/VehicleFeatureCard.vue";
import EarningFeatureCard from "../../widgets/cards/advance/EarningFeatureCard.vue";
import TotalProfitCard from "../../widgets/cards/advance/TotalProfitCard.vue";
import TotalExpenseCard from "../../widgets/cards/advance/TotalExpenseCard.vue";
import NewEarningCard from "../../widgets/cards/advance/NewEarningCard.vue";
import NewRevenueColum from "../../widgets/cards/advance/NewRevenueColum.vue";
export default {
    // data() {
    //     const cards = [
    //         {
    //             title: "hello",
    //             count: "23",
    //             icon:
    //         }
    //     ]
    // },



    components: {
        BRow,
        BCol,
        UpgradePlanCardOneBg,
        VisitersCard,
        OrderVerticalCard,
        UsersVerticalCard,
        SubscribeVerticalCard,
        TicketVerticalCard,
        BestTeamCard,
        EarningsCard,
        ProjectTableCard,
        ExpensesCard,
        DownloadCard,
        RevenueRadarCard,
        CustomerFeatureCard,
        OrdersFeatureCard,
        SaleFeatureCard,
        ProfitFeatureCard,
        // new code 
        VehicleFeatureCard,
        EarningFeatureCard,
        TotalProfitCard,
        TotalExpenseCard,
        // NewRevenuCard,
        NewRevenueColum,
        NewEarningCard,
    },
};
</script>
