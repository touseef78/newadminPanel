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
                    :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc" :sort-direction="sortDirection" show-empty @filtered="onFiltered" y
                    responsive>
                    <!-- Action Button Code -->
                    <template #cell(date)="row">
                        {{ formatDate(row.item.created_at) }}
                    </template>
                    <template #cell(care_taker)="row">
                        {{ `${row.item.care_taker.name}` }}
                    </template>
                    <template #cell(actions)="row">

                        <b-button @click="detailsChilds(row.item.careTaker_id)" variant="primary"
                            class="mb-8 mr-8">careTaker
                            Detail
                        </b-button>
                        <b-modal v-model="showDeleteConfirmation" title="Delete Confirmation">
                            <p>Are you sure you want to delete this item?</p>
                            <template #modal-footer>
                                <b-button variant="danger" @click="deleteItem(row.item.id)">Delete</b-button>
                                <b-button variant="secondary" @click="showDeleteConfirmation = false">Cancel</b-button>
                            </template>
                        </b-modal>

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


                        <div v-if="codeActive" class="col-12 mt-24 hljs-container" :class="{ active: codeActiveClass }">
                            <pre v-highlightjs>
                <code class="hljs html">
                    {{ codeText }}
                </code>
            </pre>
                        </div>
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
            users: [
            ], // Instead of 'items', use 'users' array to store fetched data
            fields: [
                // { key: "id", sortable: true },
                { key: "careTaker_id", sortable: true },
                { key: "care_taker", sortable: true },
                { key: "total_present", sortable: true },
                { key: "total_absent", sortable: true },
                { key: "actions", label: "Actions" },
            ],

            filter: "", // Define filter property for search functionality
            totalRows: 0, // Initialize totalRows to 0
            showDeleteConfirmation: false,
            itemIdToDelete: null,
            loading: false,
            created_at: new Date(), // Replace with your actual date data
            start_date: null,
            end_date: null,

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
        this.fetchData();

    },
    methods: {
        fetchData() {
            this.loading = true;
            // Define your API endpoint URL
            const apiUrl = "careTakerAttendance";

            // Create an object to hold the query parameters
            const queryParams = {
                start_date: this.start_date,
                end_date: this.end_date,
            };

            axios
                .get(apiUrl, { params: queryParams })
                .then((response) => {
                    this.users = response.data.data.filter((item) => {
                        const createdDate = new Date(item.created_at);
                        return (
                            (!this.start_date || createdDate >= new Date(this.start_date)) &&
                            (!this.end_date || createdDate <= new Date(this.end_date))
                        );
                    });
                    this.users.forEach((item, index) => {
                        item.srNo = index + 1;
                    });
                    this.totalRows = this.users.length;
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                })
                .finally(() => {
                    this.loading = false;
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


        // editUser(userId) {
        //     this.$router.push({ name: "DriverEdit", params: { id: userId } });
        // },

        // showDrivers(userId) {
        //     this.$router.push({ name: "ViewDriverAttendance", params: { id: userId } });
        // },


        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString();

        },

        detailsChilds(userId) {
            this.$router.push({ name: "ViewAttendanceCareTaker", params: { id: userId } });
        },
    },
};
</script>