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
              label=""
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
                id="start-date-input"
                v-model="startDateFilter"
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
                id="end-date-input"
                v-model="endDateFilter"
                type="date"
                placeholder="Select end date"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col lg="3" class="my-1 d-flex justify-content-end">
            <!-- <b-button type="submit" variant="primary" class="mb-8 mr-8"
              >Import</b-button
            > -->
            <b-button
              @click="exportDataToCSV"
              variant="primary"
              class="mb-8 mr-8"
              >Export</b-button
            >
            <b-button
              @click="exportDataToPDF"
              variant="primary"
              class="mb-8 mr-8"
              >PDF</b-button
            >
          </b-col>
        </b-row>
      </div>
    </div>

    
    <!-- filter end -->
    <b-row>
      <div class="col-12 mt-16">
        <b-table
          id="dataTable"
          :items="filteredUsers"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          show-empty
          @filtered="onFiltered"
          y
          responsive
        >
          <template #cell(driver_name)="row">
            {{ `${row.item.driver_first_name}` }}
          </template>
          <template v-slot:cell(SR_NO)="data">
        {{ data.index + 1 }}
      </template>
          <template #cell(actions)="row">
            <b-button @click="editUser(row.item.id)" variant="link" class="p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                style="color: orange; margin-left: 10px; margin-bottom: 10px"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <!-- ... your existing SVG path ... -->
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                />
              </svg>
            </b-button>
          </template>
         
          <!-- Action Button Code -->
          <!-- <template #cell(actions)="row">
            <b-button @click="downloadFile(row.item.file)" variant="primary"
              >Download</b-button
            >
          </template> -->

          <b-form-group
            label="Filter"
            label-for="filter-input"
            label-cols-sm="3"
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
        </b-table>
        <div class="mx-8 d-flex justify-content-end">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </div>
        <b-row class="mt-16 align-items-center justify-content-end">
          <b-row>
            <div
              v-if="codeActive"
              class="col-12 mt-24 hljs-container"
              :class="{ active: codeActiveClass }"
            >
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
import jsPDF from "jspdf";
import 'jspdf-autotable';

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
      users: [], // Instead of 'items', use 'users' array to store fetched data
      fields: [
        { key: "SR_NO", sortable: true },
        { key: "driver_name", sortable: true },
        { key: "vehicle_number", sortable: true },
        { key: "uber_ride", sortable: true },
        { key: "uber_total_earnings", sortable: true },
        { key: "cash_balance_uber", sortable: true },
        { key: "careem_ride", sortable: true },
        { key: "careem_total_earnings", sortable: true },
        { key: "cash_balance_careem", sortable: true },
        { key: "total_earnings", sortable: true },
        { key: "total_cash_balance_in_uber_and_careem", sortable: true },
        { key: "machine_earning", sortable: true },
        { key: "salk_amount", sortable: true },
        { key: "fuel_amount", sortable: true },
        { key: "net_amount", sortable: true },
        { key: "total_ride", sortable: true },
        { key: "rms_trip", sortable: true },
        { key: "diff", sortable: true },
        { key: "start_date", sortable: true },
        { key: "end_date", sortable: true },
        { key: "actions", label: "Actions" },
      ],

      filter: "", // Define filter property for search functionality
      totalRows: 0, // Initialize totalRows to 0
      showDeleteConfirmation: false,
      itemIdToDelete: null,
      loading: false,
      startDateFilter: "",
      endDateFilter: "",

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
    filteredUsers() {
      const filteredUsers = this.users.filter((user) => {
        const startDate = new Date(user.start_date);
        const endDate = new Date(user.end_date);
        const filterStartDate = this.startDateFilter
          ? new Date(this.startDateFilter)
          : null;
        const filterEndDate = this.endDateFilter
          ? new Date(this.endDateFilter)
          : null;
        if (filterStartDate && startDate < filterStartDate) {
          return false;
        }

        if (filterEndDate && endDate > filterEndDate) {
          return false;
        }

        return true;
      });

      return filteredUsers;
    },

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
      this.loading = true; // Set loading to true before fetching data
      let apiUrl = "uberdata";
      axios
        .get(apiUrl) // Replace 'your_api_endpoint_url_here' with your actual API URL
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

    editUser(userId) {
      this.$router.push({ name: "editDriver", params: { id: userId } });
    },

    exportDataToCSV() {
      const csv = Papa.unparse(this.users);
      const blob = new Blob([csv] , { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "exported_data.csv";
      a.click();
      URL.revokeObjectURL(url);
    },


    exportDataToPDF() {
  const pdf = new jsPDF();
  const columns = [
    { title: "Driver Name", dataKey: "driver_first_name" },
    { title: "Vehicle Number", dataKey: "vehicle_number" },
    { title: "Uber Ride", dataKey: "uber_ride" },
    { title: "uber Earnings", dataKey: "uber_total_earnings" },
    { title: "Cash Balance", dataKey: "cash_balance_uber" },
    { title: "Careem Ride", dataKey: "careem_ride" },
    { title: "Careem Earnings", dataKey: "careem_total_earnings" },
    { title: "Total Earnings", dataKey: "total_earnings" },
    { title: "Machine Earning", dataKey: "machine_earnings" },
    { title: "Salk Amount", dataKey: "salk_amount" },
    { title: "Fuel Amount", dataKey: "fuel_amount" },
    { title: "Net Amount", dataKey: "net_amount" },
    { title: "Diff", dataKey: "diff" },




    // Add other columns as needed
  ];

  const rows = this.filteredUsers.map(user => {
    return {
      driver_first_name: user.driver_first_name,
      vehicle_number: user.vehicle_number,
      uber_ride: user.uber_ride,
      uber_total_earnings: user.uber_total_earnings,
      cash_balance_uber: user.cash_balance_uber,
      careem_ride: user.careem_ride,
      careem_total_earnings: user.careem_total_earnings,
      total_earnings: user.total_earnings,
      machine_earnings: user.machine_earnings,
      salk_amount: user.salk_amount,
      fuel_amount: user.fuel_amount,
      net_amount: user.net_amount,
      diff: user.diff,
      
      // Map other properties
    };
  });

  pdf.autoTable({
    head: [columns.map(col => col.title)],
    body: rows.map(row => Object.values(row)),
  });

  pdf.save("exported_data.pdf");
},



    deleteItem(itemId) {
      this.itemIdToDelete = itemId; // Set the item ID to be deleted
      axios
        .delete(`fileDelete/${itemId}`)
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
    
  },
};
</script>
