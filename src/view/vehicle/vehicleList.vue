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

          <b-col lg="6" class="my-1 d-flex justify-content-end">
            <b-button @click="openModal" variant="primary" class="mb-8 mr-8">
              Add Vehicle
            </b-button>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-modal v-model="modalVisible" title="Add Vehicle" hide-footer>
      <!-- Your form content goes here -->
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Name:" label-for="name">
              <b-form-input
                id="name"
                type="text"
                placeholder="Enter name"
                v-model="name"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group id="input-group-2" label="Reg No:" label-for="reg_no">
              <b-form-input
                id="reg_no"
                type="text"
                placeholder="Enter reg_no"
                v-model="reg_no"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group
              id="input-group-1"
              label=" Seating Capacity:"
              label-for="seating_capacity"
            >
              <b-form-input
                id="seating_capacity"
                type="text"
                placeholder="Enter seating_capacity "
                v-model="seating_capacity"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group
              id="input-group-1"
              label="Pickup Location"
              label-for="pickup_location"
            >
              <b-form-input
                id="pickup_location"
                type="text"
                placeholder="Enter pickup_location"
                v-model="pickup_location"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group
              id="input-group-1"
              label=" Drop Location"
              label-for="drop_location"
            >
              <b-form-input
                id="drop_location"
                type="text"
                placeholder="Enter drop_location"
                v-model="drop_location"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group
              id="input-group-1"
              label=" Charge Per Km"
              label-for="per_km"
            >
              <b-form-input
                id="per_km"
                type="text"
                placeholder="Enter Charge Per Km"
                v-model="per_km"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group
              id="input-group-2"
              label="Vehicle Type:"
              label-for="Vehicle Type"
            >
              <b-form-select id="vehicle_type" v-model="vehicle_type" required>
                <option value="">Select Type</option>
                <option>AC</option>
                <option>Non AC</option>
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-md-6 col-12">
            <b-form-group
              id="input-group-1"
              label="Vehicle Number"
              label-for="vehicle_number"
            >
              <b-form-input
                id="vehicle_number"
                type="text"
                placeholder="Enter vehicle number "
                v-model="vehicle_number"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <!-- <div class="col-md-6 col-12">
            <b-form-group id="input-group-1" label="Color" label-for="color">
              <b-form-input
                id="color"
                type="text"
                placeholder="Enter color"
                v-model="color"
                required
              ></b-form-input>
            </b-form-group>
          </div> -->
          <!-- <div class="col-md-6 col-12">
            <b-form-group
              id="input-group-2"
              label="Category:"
              label-for="category"
            >
              <b-form-select id="category" v-model="category" required>
                <option value="">Select Type</option>
                <option>AC</option>
                <option>Non AC</option>
              </b-form-select>
            </b-form-group>
          </div> -->
        </div>
        <div class="d-flex justify-content-end">
          <b-button type="submit" variant="primary">Submit</b-button>
        </div>
      </form>
    </b-modal>
    <!-- filter end -->
    <b-row>
      <div class="col-12 mt-16">
        <b-table
          id="dataTable"
          :items="users"
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
          <!-- Action Button Code -->
          <!-- <template #cell(actions)="row">
            <b-button @click="downloadFile(row.item.file)" variant="primary"
              >Download</b-button
            >
          </template> -->
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
            <b-button
              @click="showDeleteConfirmation = true"
              variant="link"
              class="p-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                style="color: red; margin-left: 6px; margin-bottom: 10px"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <!-- ... your SVG path ... -->
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                />
              </svg>
            </b-button>

            <b-modal
              v-model="showDeleteConfirmation"
              title="Delete Confirmation"
            >
              <p>Are you sure you want to delete this item?</p>
              <template #modal-footer>
                <b-button variant="danger" @click="deleteItem(row.item.id)"
                  >Delete</b-button
                >
                <b-button
                  variant="secondary"
                  @click="showDeleteConfirmation = false"
                  >Cancel</b-button
                >
              </template>
            </b-modal>

            <!-- <b-button
              @click="toggleCardModal(row.item)"
              variant="link"
              class="p-0"
            >
            </b-button> -->
          </template>

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
        { key: "name", sortable: true },
        { key: "reg_no", sortable: true },
        { key: "seating_capacity", sortable: true },
        { key: "pickup_location", sortable: true },
        { key: "drop_location", sortable: true },
        { key: "per_km", sortable: true },
        { key: "pickup_location", sortable: true },
        { key: "drop_location", sortable: true },
        { key: "vehicle_number", sortable: true },
        { key: "vehicle_type", sortable: true },
        { key: "actions", label: "Actions" },
      ],

      filter: "", // Define filter property for search functionality
      totalRows: 0, // Initialize totalRows to 0
      showDeleteConfirmation: false,
      itemIdToDelete: null,
      loading: false,
      startDateFilter: "",
      endDateFilter: "",
      category: "",
      pickup_location: "",
      drop_location: "",
      per_km: "",
      pickup_location: "",
      drop_location: "",
      vehicle_number: "",
      vehicle_type: "",
      seating_capacity: "",
      reg_no: "",
      name: "",
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
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true; // Set loading to true before fetching data
      let apiUrl = "vehicle";
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
      this.reg_no = "";
      this.name = "";
      this.seating_capacity = "";
      this.pickup_location = "";
      this.drop_location = "";
      this.per_km = "";
      this.pickup_location = "";
      this.drop_location = "";
      this.vehicle_number = "";
      this.vehicle_type = "";
      this.category = "";
      // ... reset other fields ...
    },

    submitForm() {
      if (this.editMode) {
        // Perform update logic based on the data in the form fields
        this.isLoading = true;
        // Create a FormData object to handle the image file
        const formData = new FormData();
        formData.append("vehicle_number", this.vehicle_number);
        formData.append("name", this.name);
        formData.append("category", this.category);
        formData.append("pickup_location", this.pickup_location);
        formData.append("drop_location", this.drop_location);
        formData.append("drop_location", this.drop_location);
        formData.append("pickup_location", this.pickup_location);
        formData.append("vehicle_type", this.vehicle_type);
        formData.append("per_km", this.per_km);
        formData.append("seating_capacity", this.seating_capacity);
        formData.append("reg_no", this.reg_no);
        axios
          .post(`vehicleUpdate/${this.your_vehicle_id}`, formData)
          .then((response) => {
            console.log(response.data);
            this.$bvToast.toast("Vehicle Updated successfully!", {
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
        formData.append("vehicle_number", this.vehicle_number);
        formData.append("name", this.name);
        formData.append("category", this.category);
        formData.append("pickup_location", this.pickup_location);
        formData.append("drop_location", this.drop_location);
        formData.append("drop_location", this.drop_location);
        formData.append("pickup_location", this.pickup_location);
        formData.append("vehicle_type", this.vehicle_type);
        formData.append("per_km", this.per_km);
        formData.append("seating_capacity", this.seating_capacity);
        formData.append("reg_no", this.reg_no);
        axios
          .post("vehicle", formData)
          .then((response) => {
            console.log(response.data);
            this.$bvToast.toast("Vehicle added successfully!", {
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
        const response = await axios.get(`vehicle/${userId}`);

        // Populate form fields with the fetched user data
        const userData = response.data.data; // Ensure the correct property is used (response.data.data)
        this.reg_no = userData.reg_no;
        this.name = userData.name;
        this.seating_capacity = userData.seating_capacity;
        this.pickup_location = userData.pickup_location;
        this.drop_location = userData.drop_location;
        this.per_km = userData.per_km;
        this.pickup_location = userData.pickup_location;
        this.drop_location = userData.drop_location;
        this.vehicle_number = userData.vehicle_number;
        this.vehicle_type = userData.vehicle_type;
        this.category = userData.category;
        this.your_vehicle_id = userId;

        // ... Populate other fields accordingly

        this.editMode = true;
        this.modalVisible = true;
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error, show a notification, etc.
      }
    },
  },
};
</script>
