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
                        <!-- <b-button type="submit" variant="primary" class="mb-8 mr-8"
              >Import</b-button
            > -->
                        <b-button @click="exportDataToCSV" variant="primary" class="mb-8 mr-8">Export</b-button>
                    </b-col>
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


                    <template #cell(name)="row">
                        {{ `${row.item.driver.name}` }}
                    </template>

                    <template #cell(actions)="row">
                        <b-button @click="showDeleteConfirmation = true" variant="link" class="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                style="color: red; margin-left: 6px; margin-bottom: 10px" class="bi bi-eye"
                                viewBox="0 0 16 16">
                                <!-- ... your SVG path ... -->
                                <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                        </b-button>


                        <b-modal v-model="showDeleteConfirmation" title="Delete Confirmation">
                            <p>Are you sure you want to delete this item?</p>
                            <template #modal-footer>
                                <b-button variant="danger" @click="deleteItem(row.item.id)">Delete</b-button>
                                <b-button variant="secondary" @click="showDeleteConfirmation = false">Cancel</b-button>
                            </template>
                        </b-modal>
                        <!-- <b-button @click="updateStatus(row.item)"
                            :variant="row.item.status === 'Approved' ? 'warning' : 'primary'" class="mb-8 mr-8">
                            {{ row.item.status === "Approved" ? "Pending" : "Approved" }}
                        </b-button> -->

                        <!-- <b-button
              @click="toggleCardModal(row.item)"
              variant="link"
              class="p-0"
            >
            </b-button> -->
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
            selectedCardOption: "",
            rowToUpdate: null,
            modalVisible: false,
            editMode: false,
            users: [], // Instead of 'items', use 'users' array to store fetched data
            fields: [
                { key: "driver_id", sortable: true },
                { key: "name", sortable: true },
                { key: "attendance", sortable: true },
                // { key: "actions", label: "Actions" },
            ],

            filter: "", // Define filter property for search functionality
            totalRows: 0, // Initialize totalRows to 0
            showDeleteConfirmation: false,
            itemIdToDelete: null,
            loading: false,
            startDateFilter: "",
            endDateFilter: "",
            your_vehicle_id: null,
        };
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
        this.fetchData(userId);
    },
    created() {
        const userId = this.$route.params.id;
        this.fetchData(userId);
    },
    methods: {
        fetchData(userId) {
            this.loading = true; // Set loading to true before fetching data
            // let apiUrl = "studentGet";
            axios
                .get(`DriverAttendance/${userId}`) // Replace 'your_api_endpoint_url_here' with your actual API URL
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

        deleteItem(itemId) {
            this.itemIdToDelete = itemId; // Set the item ID to be deleted
            axios
                .delete(`destroyStudent/${itemId}`)
                .then((response) => {
                    this.showDeleteConfirmation = false;
                    this.fetchData(); // Refresh the data after deletion
                })
                .catch((error) => {
                    // Handle error
                    console.error("Error deleting item:", error);
                });
        },

        downloadFile(fileUrl) {
            // Construct a download link for the file
            const link = document.createElement("a");
            link.href = "https://boltapi.fastnetstaffing.in/" + fileUrl;
            link.download = "downloaded_file"; // Specify the default filename for the downloaded file
            link.target = "_blank"; // Open the link in a new tab
            link.click();
        },

        handleButtonClick(item) {
            this.updateStatus(item);
            this.toggleCardModal(item);
        },

        toggleCardModal(item) {
            this.selectedCardOption = ""; // Reset the selected card option
            this.rowToUpdate = item; // Set the row to be updated
            this.isCardModalVisible = true; // Show the modal
        },

    },


};
</script>
