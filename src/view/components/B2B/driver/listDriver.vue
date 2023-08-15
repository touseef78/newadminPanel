<!-- <template> -->
    <!-- <b-card> -->
        <!-- filter  -->
        <!-- <div>

            <b-row class="align-items-center">
                <b-col lg="6" class="my-1">
                    <b-form-group label="Filter" label-for="filter-input" label-cols-sm="1" label-align-sm="right"
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
                    <b-button type="submit" variant="primary" class="mb-8 mr-8">Import</b-button>
                    <b-button type="submit" variant="primary" class="mb-8 mr-8">Export</b-button>
                </b-col>
            </b-row>

        </div> -->
        <!-- filter end -->
        <!-- <b-row>
            <div class="col-12 mt-16">
                <b-table :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" responsive="sm">
                  
                    <template #cell(actions)="row">

                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                            style="color: rgba(0, 255, 195, 0.87); margin-bottom:10px; " class="bi bi-eye"
                            viewBox="0 0 16 16">
                            <path
                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path
                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                            style="color: orange;margin-left:20px; margin-bottom:10px;" class="bi bi-pencil"
                            viewBox="0 0 16 16">
                            <path
                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                            style="color: red; margin-left:20px; margin-bottom:10px;" class="bi bi-trash3"
                            viewBox="0 0 16 16">
                            <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                        <b-button type="submit" variant="primary" class="mb-8 mr-8">Approved</b-button>
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
                <b-row class="mt-16 align-items-center justify-content-end">
                    <b-col class="hp-flex-none w-auto">
                        <b-form-group label-for="per-page-select" label-size="sm" class="mb-0">
                            <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions"></b-form-select>
                        </b-form-group>
                    </b-col>

                    <b-col class="hp-flex-none w-auto">
                        <b-pagination align="end" v-model="currentPage" :total-rows="totalRows"
                            :per-page="perPage"></b-pagination>
                    </b-col>
                </b-row>
            </div>



        </b-row> -->
    <!-- </b-card> -->
<!-- </template> -->

<!-- <script>
import { BRow, BCol, BCard, BButton, BTable, BFormGroup, BInputGroup, BFormInput, BFormSelect, BPagination, BInputGroupAppend } from "bootstrap-vue";


export default {
    data() {
        return {
            sortBy: 'age',
            sortDesc: false,
            fields: [
                { key: 'name', sortable: true },
                { key: 'mobile', sortable: true },
                { key: 'email', sortable: true },
                { key: 'reference_name', sortable: true },
                { key: 'reference_number', sortable: true },
                { key: 'CNIC', sortable: true },
                { key: 'selection', sortable: true },
                { key: 'status', sortable: true },
                { key: 'car_name', sortable: true },
                { key: 'car_model', sortable: true },
                { key: 'car_number', sortable: true },
                { key: "actions", label: "Actions" },


            ],
            items: [
                { isActive: true, name: 'Ali', mobile: '098765', email: 'ali@gmail.com', reference_name: 'Hannan', reference_number: '098467', CNIC: '35201-9876543-1', selection: 'empty', status: 'pending', car_name: 'Toyota', car_model: '2014', car_number: 'LEX 7865' },
                { isActive: true, name: 'Ayyan', mobile: '098765', email: 'ali@gmail.com', reference_name: 'Ali', reference_number: '098467', CNIC: '35201-9876543-1', selection: 'empty', status: 'approved', car_name: 'Honda', car_model: '2017', car_number: 'LDT 0896' },
                { isActive: true, name: 'Abbas', mobile: '098765', email: 'ali@gmail.com', reference_name: 'Musa', reference_number: '098467', CNIC: '35201-9876543-1', selection: 'empty', status: 'pending', car_name: 'Toyota', car_model: '2018', car_number: 'LKH 4505' },
                { isActive: true, name: 'Usman', mobile: '098765', email: 'ali@gmail.com', reference_name: 'Usama', reference_number: '098467', CNIC: '35201-9876543-1', selection: 'empty', status: 'approved', car_name: 'Honda', car_model: '2020', car_number: 'LTX 2345' },

            ],
            codeActive: false,
            codeActiveClass: false,
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
        BInputGroupAppend
    }, computed: {
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter((f) => f.sortable)
                .map((f) => {
                    return { text: f.label, value: f.key };
                });
        },
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
    },
    methods: {
        info(item, index, button) {
            this.infoModal.title = `Row index: ${index}`;
            this.infoModal.content = JSON.stringify(item, null, 2);
            this.$root.$emit("bv::show::modal", this.infoModal.id, button);
        },
        resetInfoModal() {
            this.infoModal.title = "";
            this.infoModal.content = "";
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },

        codeClick() {
            this.codeActive = !this.codeActive;

            setTimeout(() => {
                this.codeActiveClass = !this.codeActiveClass;
            }, 100);
        },
    },
    methods: {
        codeClick() {
            this.codeActive = !this.codeActive;

            setTimeout(() => {
                this.codeActiveClass = !this.codeActiveClass;
            }, 100);
        },
    },
};

</script> -->


<template>
    <b-card>
        <!-- filter  -->
        <div>
            <b-row class="align-items-center">
                <b-col lg="6" class="my-1">
                    <b-form-group label="Filter" label-for="filter-input" label-cols-sm="1" label-align-sm="right"
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
                    <b-button type="submit" variant="primary" class="mb-8 mr-8">Import</b-button>
                    <b-button @click="exportDataToCSV" variant="primary" class="mb-8 mr-8">Export</b-button>
                </b-col>
            </b-row>
        </div>
        <!-- filter end -->
        <b-row>
            <div class="col-12 mt-16">
                <b-table id="dataTable" :items="users" :fields="fields" :current-page="currentPage" :per-page="perPage"
                    :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                    :sort-direction="sortDirection" show-empty @filtered="onFiltered" y responsive>
                    <!-- Action Button Code -->
                    <template #cell(actions)="row">
                        <b-button @click="showDriver(row.item.id)" variant="link" class="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style="
                color: rgba(0, 255, 195, 0.87);
                margin-left: 6px;
                margin-bottom: 10px;
              " class="bi bi-eye" viewBox="0 0 16 16">
                                <path
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </b-button>

                        <b-button @click="showDeleteConfirmation = true" variant="link" class="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style="
                  color: rgba(0, 255, 195, 0.87);
                  margin-left: 6px;
                  margin-bottom: 10px;
                " class="bi bi-eye" viewBox="0 0 16 16">
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
                        <b-button @click="editUser(row.item.id)" variant="link" class="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                style="color: orange; margin-left: 10px; margin-bottom: 10px" class="bi bi-pencil"
                                viewBox="0 0 16 16">
                                <!-- ... your existing SVG path ... -->
                                <path
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                        </b-button>

                        <!-- ... your existing action button code ... -->
                        <b-button @click="updateStatus(row.item)"
                            :variant="row.item.status === 'Approved' ? 'warning' : 'primary'" class="mb-8 mr-8">
                            {{ row.item.status === "Approved" ? "Pending" : "Approved" }}
                        </b-button>
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
} from "bootstrap-vue";
import axios from "axios";
import Papa from "papaparse";

// new code 
// import code from "./code";   
// new code end
export default {
    data() {
        return {

            perPage: 10,
            currentPage: 1,
            sortBy: "age",
            sortDesc: false,
            users: [
            ], // Instead of 'items', use 'users' array to store fetched data
            fields: [
                { key: "id", sortable: true },
                { key: "name", sortable: true },
                { key: "mobile", sortable: true },
                { key: "email", sortable: true },
                { key: "reference_name", sortable: true },
                { key: "reference_number", sortable: true },
                { key: "ssn", sortable: true },
                // { key: "selection", sortable: true },
                { key: "status", sortable: true },
                // { key: "car_name", sortable: true },
                // { key: "car_model", sortable: true },
                // { key: "car_number", sortable: true },
                { key: "actions", label: "Actions" },
            ],

            filter: "", // Define filter property for search functionality
            totalRows: 0, // Initialize totalRows to 0
            showDeleteConfirmation: false,
            itemIdToDelete: null,

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
            axios
                .get("drivers") // Replace 'your_api_endpoint_url_here' with your actual API URL
                .then((response) => {
                    this.users = response.data.data;
                    this.totalRows = this.users.length;
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
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

        updateStatus(user) {
            user.status = user.status === 'Approved' ? 'Pending' : 'Approved';
            axios
                .put(`drivers/${user.id}`, user)
                .then(response => {
                    console.log('Status updated successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error updating status:', error);
                });
        },


        editUser(userId) {
            this.$router.push({ name: "B2B/driver/edit", params: { id: userId } });
        },

        showDriver(userId) {
            this.$router.push({ name: "B2B/driver/view", params: { id: userId } });
        },

        deleteItem(itemId) {
            this.itemIdToDelete = itemId; // Set the item ID to be deleted
            axios
                .delete(`drivers/${itemId}`)
                .then((response) => {
                    this.showDeleteConfirmation = false;
                    this.fetchData(); // Refresh the data after deletion
                })
                .catch((error) => {
                    // Handle error
                    console.error("Error deleting item:", error);
                });
        },
    },
};
</script>
