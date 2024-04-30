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
            <b-form-group label="" label-for="filter-input" label-cols-sm="1" label-align-sm="right" label-size="sm"
              class="mb-0">
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


          <b-col lg="6" class="my-1 d-flex justify-content-end">
            <b-button @click="openModal" variant="primary" class="mb-8 mr-8">
              Add Booking
            </b-button>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-modal v-model="modalVisible" title="Add Booking" hide-footer>
      <!-- Your form content goes here -->
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Transaction Id:" label-for="transaction_id">
              <b-form-input id="transaction_id" type="text" placeholder="Enter transaction id" v-model="transaction_id"
                required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-2" label="Booking No:" label-for="booking_no">
              <b-form-input id="booking_no" type="text" placeholder="Enter booking_no" v-model="booking_no"
                required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label=" Captain Name:" label-for="captain_name">
              <b-form-input id="captain_name" type="text" placeholder="Enter captain_name " v-model="captain_name"
                required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Vehicle Class" label-for="vehicle_class">
              <b-form-input id="vehicle_class" type="text" placeholder="Enter vehicle class" v-model="vehicle_class"
                required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label=" Vehicle No" label-for="vehicle_no">
              <b-form-input id="vehicle_no" type="text" placeholder="Enter vehicle no" v-model="vehicle_no"
                required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label=" Customer Name" label-for="customer_name">
              <b-form-input id="customer_name" type="text" placeholder="Enter customer name " v-model="customer_name"
                required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Pickup Location" label-for="pickup_location">
              <b-form-input id="pickup_location" type="text" placeholder="Enter pickup location"
                v-model="pickup_location" required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Drop Location" label-for="drop_location">
              <b-form-input id="drop_location" type="text" placeholder="Enter drop location" v-model="drop_location"
                required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Booking Date" label-for="booking_date">
              <b-form-input id="booking_date" type="date" placeholder="Enter booking date"
                v-model="booking_date"></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Amount" label-for="amount">
              <b-form-input id="amount" type="text" placeholder="Enter amount " v-model="amount"
                required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Kilometer" label-for="kilometer">
              <b-form-input id="kilometer" type="text" placeholder="Enter kilometer" v-model="kilometer"
                required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Day Status" label-for="day_status">
              <b-form-input id="day_status" type="text" placeholder="Enter day_status" v-model="day_status"
                required></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <b-button type="submit" variant="primary">Submit</b-button>
        </div>
      </form>
    </b-modal>
    <!-- filter end -->
    <b-row>
      <div class="col-12 mt-16">
        <b-table id="dataTable" :items="users" :fields="fields" :current-page="currentPage" :per-page="perPage"
          :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection" show-empty @filtered="onFiltered" y responsive>

          <!-- Action Button Code -->
          <!-- <template #cell(actions)="row">
            <b-button @click="downloadFile(row.item.file)" variant="primary"
              >Download</b-button
            >
          </template> -->
          <template #cell(actions)="row">
            <b-button @click="showBooking(row.item.id)" variant="link" class="p-0">
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

            <b-button @click="editUser(row.item.id)" variant="link" class="p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                style="color: orange; margin-left: 10px; margin-bottom: 10px" class="bi bi-pencil" viewBox="0 0 16 16">
                <!-- ... your existing SVG path ... -->
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </b-button>
            <b-button @click="showDeleteConfirmation = true" variant="link" class="p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                style="color: red; margin-left: 6px; margin-bottom: 10px" class="bi bi-eye" viewBox="0 0 16 16">
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

            <!-- <b-button
              @click="toggleCardModal(row.item)"
              variant="link"
              class="p-0"
            >
            </b-button> -->

          </template>


          <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm"
            class="mb-0">
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
        { key: "id", sortable: true },
        { key: "transaction_id", sortable: true },
        { key: "booking_no", sortable: true },
        { key: "captain_name", sortable: true },
        { key: "vehicle_class", sortable: true },
        { key: "vehicle_no", sortable: true },
        { key: "customer_name", sortable: true },
        { key: "pickup_location", sortable: true },
        { key: "drop_location", sortable: true },
        { key: "booking_date", sortable: true },
        { key: "amount", sortable: true },
        { key: "kilometer", sortable: true },
        { key: "day_status", sortable: true },
        { key: "actions", label: "Actions" },
      ],

      filter: "", // Define filter property for search functionality
      totalRows: 0, // Initialize totalRows to 0
      showDeleteConfirmation: false,
      itemIdToDelete: null,
      loading: false,
      startDateFilter: "",
      endDateFilter: "",
      day_status: "",
      pickup_location: "",
      drop_location: "",
      customer_name: "",
      vehicle_class: "",
      vehicle_no: "",
      amount: "",
      booking_date: "",
      kilometer: "",
      captain_name: "",
      transaction_id: "",
      booking_no: "",
      your_booking_id: null,

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
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true; // Set loading to true before fetching data
      let apiUrl = "booking";
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

    openModal() {
      this.resetFormFields();

      this.modalVisible = true;
    },

    resetFormFields() {
      this.transaction_id = '';
      this.booking_no = '';
      this.captain_name = '';
      this.vehicle_class = '';
      this.vehicle_no = '';
      this.customer_name = '';
      this.pickup_location = '';
      this.drop_location = '';
      this.amount = '';
      this.kilometer = '';
      this.booking_date = '';
      this.day_status = '';
      // ... reset other fields ...
    },

    submitForm() {
      if (this.editMode) {
        // Perform update logic based on the data in the form fields
        this.isLoading = true;
        // Create a FormData object to handle the image file
        const formData = new FormData();
        formData.append("transaction_id", this.transaction_id);
        formData.append("amount", this.amount);
        formData.append("day_status", this.day_status);
        formData.append("pickup_location", this.pickup_location);
        formData.append("drop_location", this.drop_location);
        formData.append("vehicle_no", this.vehicle_no);
        formData.append("vehicle_class", this.vehicle_class);
        formData.append("booking_date", this.booking_date);
        formData.append("customer_name", this.customer_name);
        formData.append("kilometer", this.kilometer);
        formData.append("captain_name", this.captain_name);
        formData.append("booking_no", this.booking_no);
        axios.post(`bookingUpdate/${this.your_booking_id}`, formData)
          .then((response) => {
            console.log(response.data);
            this.$bvToast.toast("Booking Updated successfully!", {
              title: "Success",
              variant: "success",
              solid: true,
              appendToast: true,
              toaster: "b-toaster-top-right",
              autoHideDelay: 5000,
              variant: "primary", // Background color
            });
            this.isLoading = false;
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
            console.log(error.response.data);
            this.isLoading = false;
          });

        // Reset editMode
        this.editMode = false;
      } else {
        this.isLoading = true;
        // Create a FormData object to handle the image file
        const formData = new FormData();
        formData.append("transaction_id", this.transaction_id);
        formData.append("amount", this.amount);
        formData.append("day_status", this.day_status);
        formData.append("pickup_location", this.pickup_location);
        formData.append("drop_location", this.drop_location);
        formData.append("vehicle_no", this.vehicle_no);
        formData.append("vehicle_class", this.vehicle_class);
        formData.append("booking_date", this.booking_date);
        formData.append("customer_name", this.customer_name);
        formData.append("kilometer", this.kilometer);
        formData.append("captain_name", this.captain_name);
        formData.append("booking_no", this.booking_no);
        axios
          .post("booking", formData)
          .then((response) => {
            console.log(response.data);
            this.$bvToast.toast("Booking added successfully!", {
              title: "Success",
              variant: "success",
              solid: true,
              appendToast: true,
              toaster: "b-toaster-top-right",
              autoHideDelay: 5000,
              variant: "primary", // Background color
            });
            this.isLoading = false;
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
            console.log(error.response.data);
            this.isLoading = false;
          });
      }


      this.modalVisible = false;
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
        .delete(`booking/${itemId}`)
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


    async editUser(userId) {
      try {
        // Make an API call to fetch user data based on userId
        const response = await axios.get(`booking/${userId}`);

        // Populate form fields with the fetched user data
        const userData = response.data.data; // Ensure the correct property is used (response.data.data)
        this.transaction_id = userData.transaction_id;
        this.booking_no = userData.booking_no;
        this.captain_name = userData.captain_name;
        this.vehicle_class = userData.vehicle_class;
        this.vehicle_no = userData.vehicle_no;
        this.customer_name = userData.customer_name;
        this.pickup_location = userData.pickup_location;
        this.drop_location = userData.drop_location;
        this.amount = userData.amount;
        this.kilometer = userData.kilometer;
        this.booking_date = userData.booking_date;
        this.day_status = userData.day_status;
        this.your_booking_id = userId;


        // ... Populate other fields accordingly

        this.editMode = true;
        this.modalVisible = true;
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error, show a notification, etc.
      }
    },

    showBooking(userId) {
      this.$router.push({ name: "bookingReport", params: { id: userId } });
    },


  },
};
</script>
