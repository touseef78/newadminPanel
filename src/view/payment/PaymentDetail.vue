<template>
    <b-card>
        <!-- filter  -->
        <div v-if="loading" class="text-center mt-4">
            <b-spinner label="Loading..."></b-spinner>
        </div>
        <div class="col-12 mt-16">
            <div>
                <b-row class="align-items-center">
                    <b-col lg="6" class="my-1">
                        <b-form-group label="" label-for="filter-input" label-cols-sm="1" label-align-sm="right"
                            label-size="sm" class="mb-0">
                            <b-input-group size="sm">
                                <b-form-input id="filter-input" v-model="filter" type="search"
                                    placeholder="Type to Search"></b-form-input>
                                <b-input-group-append>
                                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col lg="6" class="my-1 d-flex justify-content-end">
                        <b-button @click="exportDataToCSV" variant="primary" class="mb-8 mr-8">Export</b-button>
                    </b-col>

                    <!-- <b-col lg="6" class="my-1 d-flex justify-content-end">
            <b-button @click="openModal" variant="primary" class="mb-8 mr-8">
              Add Vehicle
            </b-button>
          </b-col> -->
                </b-row>
            </div>
        </div>
        <!-- filter end -->
        <b-row>
            <div class="col-12 mt-16">
                <b-table id="dataTable" :items="users" :fields="fields" :current-page="currentPage" :per-page="perPage"
                    :filter="filter" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" show-empty @filtered="onFiltered"
                    y responsive>
                    <!-- Action Button Code -->
                    <template #cell(date)="row">
                        {{ formatDate(row.item.created_at) }}
                    </template>
                    <template #cell(payments_status)="row">
                        <b-button @click="togglePaymentStatus(row.item)"
                            :variant="row.item.payments_status === 'paid' ? 'success' : 'danger'">
                            {{ row.item.payments_status === 'paid' ? 'Paid' : 'Unpaid' }}
                        </b-button>
                    </template>

                    <!-- image  show code here  -->
                    <template #cell(image)="row">
                        <img :src="'https://backendbigways.singsavatech.com/' + row.item.image" alt="Picture"
                            width="100" height="100" />
                    </template>
                    <!-- end image code here  -->
                    <template #cell(personal_number)="row">
                        {{ `${row.item.security_code} ` }}
                    </template>
                    <template #cell(actions)="row">

                        <!-- delete -->
                        <b-button @click="showDeleteConfirmation(row.item.id)" variant="link" class="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                style="color: red; margin-left: 6px; margin-bottom: 10px" class="bi bi-eye"
                                viewBox="0 0 16 16">
                                <!-- ... your SVG path ... -->
                                <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                        </b-button>
                        <b-modal v-model="showDeleteConfirmations" title="Delete Confirmation">
                            <p>Are you sure you want to delete this item?</p>
                            <template #modal-footer>
                                <b-button variant="danger" @click="deleteItem(itemIdToDelete)">Delete</b-button>
                                <b-button variant="secondary" @click="showDeleteConfirmations = false">Cancel</b-button>

                            </template>
                        </b-modal>
                        <!-- end delete -->

                    </template>

                    <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right"
                        label-size="sm" class="mb-0">
                        <b-input-group size="sm">
                            <b-form-input id="filter-input" v-model="filter" type="search"
                                placeholder="Type to Search"></b-form-input>

                            <b-input-group-append>
                                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </b-table>
                <div class="mx-8 d-flex justify-content-end">
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                        aria-controls="my-table"></b-pagination>
                </div>
                <b-row class="mt-16 align-items-center justify-content-end">

                    <b-row>

                    </b-row>
                </b-row>
            </div>
        </b-row>
    </b-card>
</template>

<script>
import {
    BRow,
    BCol,
    BCard,
    BButton,
    BTable,
    BFormGroup,
    BInputGroup,
    BFormInput,
    BFormSelect,
    BPagination,
    BInputGroupAppend,
    BSpinner,
} from "bootstrap-vue";
import axios from "axios";
import Papa from "papaparse";

// new code 
// import code from "./code";   
// new code end
export default {
    data() {
        return {
            perPage: 8,
            currentPage: 1,
            sortBy: "age",
            sortDesc: false,
            users: {}, // Instead of 'items', use 'users' array to store fetched data
            fields: [
                { key: "id", sortable: true },
                { key: "name", sortable: true },
                { key: "amount", sortable: true },
                { key: "total_students", sortable: true },
                // { key: "image", sortable: true },
                { key: "payments_status", sortable: true },
                // { key: "actions", label: "Actions" },
            ],

            filter: "", // Define filter property for search functionality
            totalRows: 0, // Initialize totalRows to 0
            showDeleteConfirmations: false,
            itemIdToDelete: null,
            loading: false,
            created_at: new Date(), // Replace with your actual date data
            start_date: null,
            end_date: null,
            image: "",
            image: null,
            payments_status: "",
            total_students: '',
            amount: "",
            name: '',


        };

    },
    watch: {
        start_date: 'fetchData',
        end_date: 'fetchData',
    },
    components: {
        BRow,
        BCol,
        BCard,
        BButton,
        BTable,
        BFormGroup,
        BInputGroup,
        BFormInput,
        BFormSelect,
        BPagination,
        BInputGroupAppend,
        BSpinner,

    },
    computed: {
        sortOptions() {
            return this.fields
                .filter((f) => f.sortable)
                .map((f) => {
                    return { text: f.label, value: f.key };
                });
        },
        rows() {
            return this.users.length;
        },
    },
    mounted() {
        const userId = this.$route.params.id;
        this.fetchData(userId);
    },

    methods: {
        fetchData(userId) {
            this.loading = true; // Set loading to true before fetching data
            // let apiUrl = "studentGet";
            axios
                .get(`registration/${userId}`) // Replace 'your_api_endpoint_url_here' with your actual API URL
                .then((response) => {
                    this.users = response.data.data;

                    this.totalRows = this.users.length;
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                })
                .finally(() => {
                    this.loading = false; // Set loading to false after fetching data, whether success or error
                });
        },
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        codeClick() {
            this.codeActive = !this.codeActive;
        },

        exportDataToCSV() {
            const csv = Papa.unparse(this.users);
            const blob = new Blob([csv], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "exported_data.csv";
            a.click();
            URL.revokeObjectURL(url);
        },
        showDeleteConfirmation(itemId) {
            this.itemIdToDelete = itemId;
            this.showDeleteConfirmations = true;
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString();

        },
        // ............... 
        togglePaymentStatus(user) {
            user.payments_status = user.payments_status === 'paid' ? 'unpaid' : 'paid';
            axios
                .post(`updateReguest/${user.id}`, user)
                .then((response) => {
                    console.log('Status updated successfully:', response.data);
                })
                .catch((error) => {
                    console.error('Error updating status:', error);
                });
            // You can also call another method here to update the status on the server
        },

    },
};
</script>