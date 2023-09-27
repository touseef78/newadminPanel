<template>
  <b-card>
    <!-- filter  -->
    <div v-if="loading" class="text-center mt-4">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div class="col-12 mt-16">
      <div>
        <b-row class="align-items-center">
          <b-col lg="3" class="my-1">
            <b-form-group
              label-for="filter-input"
              label-cols-sm="1"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-input
                  id="filter-input"
                  v-model="filter"
                  type="search"
                  placeholder="Type to Search"
                ></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''"
                    >Clear</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col lg="3" class="my-1">
            <b-form-group
              label="Start Date"
              label-for="start-date"
              label-cols-sm="5"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-form-input
                id="start-date"
                v-model="start_date"
                type="date"
                placeholder="Select start date"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="3" class="my-1">
            <b-form-group
              label="End Date"
              label-for="end-date"
              label-cols-sm="4"
              label-align-sm="right"
              label-size="sm"
              class="mb-0"
            >
              <b-form-input
                id="end-date"
                v-model="end_date"
                type="date"
                placeholder="Select end date"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="3" class="my-1 d-flex justify-content-end">
            <b-button
              @click="exportDataToCSV"
              variant="primary"
              class="mb-8 mr-8"
              >Export</b-button
            >
          </b-col>
        </b-row>
      </div>
    </div>
    <!-- filter end -->
    <b-row>
      <div class="col-12 mt-16">
        <b-table id="dataTable" :items="users" :fields="fields" :current-page="currentPage" :per-page="perPage"
          :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection" show-empty @filtered="onFiltered" y responsive>
          <!-- Action Button Code -->
          <template #cell(date)="row">
            {{ formatDate(row.item.created_at) }}
          </template>
          <template #cell(vehicle_name)="row">
            {{ `${row.item.name} ` }}
          </template>
          <!-- <template #cell(company_name)="row">
            {{ `${row.item.company.company_name} ` }}
          </template>
          <template #cell(owner_name)="row">
            {{ `${row.item.company.owner_name} ` }}
          </template> -->
          

          <template #cell(actions)="row">
            <b-button @click="showVehicle(row.item.id)" variant="link" class="p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style="
                    color: rgba(0, 255, 195, 0.87);
                    margin-left: 6px;
                    margin-bottom: 10px;
                  " class="bi bi-eye" viewBox="0 0 16 16">
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </b-button>

            <b-button @click="showDeleteConfirmation = true" variant="link" class="p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style="
                    color: rgba(0, 255, 195, 0.87);
                    margin-left: 6px;
                    margin-bottom: 8px;
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
            <b-button @click="editVehicle(row.item.id)" variant="link" class="p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                style="color: orange; margin-left: 10px; margin-bottom: 10px" class="bi bi-pencil" viewBox="0 0 16 16">
                <!-- ... your existing SVG path ... -->
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </b-button>

            <!-- ... your existing action button code ... -->
            <!-- <b-button @click="updateStatus(row.item)"
                              :variant="row.item.status === 'Approved' ? 'warning' : 'primary'" class="mb-8 mr-8">
                              {{ row.item.status === "Approved" ? "Pending" : "Approved" }}
                          </b-button> -->
          </template>

          <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm"
            class="mb-0">
            <b-input-group size="sm">
              <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search"></b-form-input>

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
      users: [], // Instead of 'items', use 'users' array to store fetched data
      fields: [
        { key: "id", sortable: true },
        { key: "vehicle_name", sortable: true },
        { key: "registration_number", sortable: true },
        { key: "vehicle_type", sortable: true },
        { key: "texameter_inspection_date", sortable: true },
        { key: "car_make", sortable: true },
        { key: "car_model", sortable: true },
        { key: "car_color", sortable: true },
        { key: "car_number", sortable: true },
        { key: "date", sortable: true },
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
    start_date: "fetchData",
    end_date: "fetchData",
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
      const apiUrl = "B2BIndex";

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
    // fetchData() {
    //   this.loading = true; // Set loading to true before fetching data
    //   axios
    //     .get("B2BIndex") // Replace 'your_api_endpoint_url_here' with your actual API URL
    //     .then((response) => {
    //       this.users = response.data.data;
    //       this.totalRows = this.users.length;
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     })
    //     .finally(() => {
    //       this.loading = false; // Set loading to false after fetching data, whether success or error
    //     });
    // },
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

    editVehicle(userId) {
      this.$router.push({ name: "editVehicle", params: { id: userId } });
    },

    showVehicle(userId) {
      this.$router.push({ name: "viewVehicle", params: { id: userId } });
    },
        formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },

    deleteItem(itemId) {
      this.itemIdToDelete = itemId; // Set the item ID to be deleted
      axios
        .delete(`vehicle/${itemId}`)
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
  