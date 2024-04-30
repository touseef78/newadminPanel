<template>
    <b-col cols="12" xl="8">
        <b-card id="invoice" class="card border-0 hp-invoice-card">
            <b-row align-h="between">
                <b-col cols="12" lg="6">
                    <div class="col-lg-12 col-12" style="display: flex;">
                        <b-form-group id="input-group-2" label="Profile Picture:" label-for="profile_picture">
                            <div style="margin-left: 3px; margin-bottom: 15px;">
                                <img src="../../assets/img/logo/Awais.png" width="100px;" height="100px;"
                                    style="border-radius: 50%;" />
                            </div>

                        </b-form-group>
                        <div cols="12" style="float: right; margin-top:10px">
                            <p :style="{ fontSize: textSizes, marginLeft: marginLeft, marginTop: marginTop }">
                                <b>Name:</b> Awais
                                Safdar
                            </p>
                            <p :style="{ fontSize: textSizes, marginLeft: marginLeft, marginTop: marginTop, }">
                                <b>Company name:</b>
                                Technolyte
                            </p>
                            <p
                                :style="{ fontSize: textSizes, marginLeft: marginLeft, marginTop: marginTop, display: display }">
                                <b>Contact
                                    Number:</b>
                                12334556677
                            </p>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" md="4" class="text-left text-sm-right hp-print-info">
                    <p>Date Due: 15/11/2023</p>
                </b-col>
            </b-row>

            <div class="divider"></div>
            <b-row>
                <b-col cols="12"
                    style="margin-top: 10px; margin-left:5px; display:flex;text-align:center;justify-content:center;align-item:center;">
                    <p :style="{ fontSize: textSize, marginLeft: marginLeft, marginTop: marginTop }"><b>Salary Type:
                        </b> Fix</p>
                    <p :style="{ fontSize: textSize, marginLeft: marginLeft, marginTop: marginTop }"> <b>Amount:</b>
                        Rs.5000</p>
                    <p :style="{ fontSize: textSize, marginLeft: marginLeft, marginTop: marginTop }"><b> Status:</b>
                        Pending
                    </p>
                </b-col>
            </b-row>

            <div class="divider"></div>

            <b-row>
                <b-col cols="12" style="margin-top: 20px;">
                    <b-table-simple small caption-top responsive borderless>
                        <b-thead>
                            <b-tr class="text-center"> <!-- Add text-center class here -->
                                <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading"
                                    style="margin-top: 10px;">
                                    <span v-if="!isLoading"><b>See Vehicle</b></span>
                                    <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                                </b-button>

                                <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading"
                                    style="margin-top: 10px;">
                                    <span v-if="!isLoading"><b>Expense</b></span>
                                    <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                                </b-button>

                                <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading"
                                    style="margin-top: 10px;">
                                    <span v-if="!isLoading"><b>Report</b></span>
                                    <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                                </b-button>

                                <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading"
                                    style="margin-top: 10px;">
                                    <span v-if="!isLoading"><b>Invoice</b></span>
                                    <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                                </b-button>

                                <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading"
                                    style="margin-top: 10px;">
                                    <span v-if="!isLoading"><b>Earning Report</b></span>
                                    <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                                </b-button>

                                <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading"
                                    style="margin-top: 10px;">
                                    <span v-if="!isLoading"><b>Efficiency Report</b></span>
                                    <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                                </b-button>

                                <!-- Repeat the same structure for other buttons -->

                                <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading"
                                    style="margin-top: 10px;">
                                    <span v-if="!isLoading"><b>Vehicle Maintenance</b></span>
                                    <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                                </b-button>
                            </b-tr>
                        </b-thead>
                    </b-table-simple>
                </b-col>

            </b-row>

            <!-- <div class="divider"></div> -->

        </b-card>
    </b-col>
</template>

<script>
import {
    BRow,
    BLink,
    BButton,
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
    data() {
        return {
            textSize: '16px', // set your desired font size
            marginLeft: '20px', // set your desired margin left
            marginTop: '5px',
            textSizes: '11px',
            display: 'flex',
            //  profile_picture: 'assets/img/logo/car.png', 
        };

    },

    components: {
        BRow,
        BLink,
        BButton,
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
