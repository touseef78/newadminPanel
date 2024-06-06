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
                    <b-col lg="4" class="my-1 d-flex justify-content-end">
                        <b-button @click="openModal" variant="primary" class="mb-8 mr-8">Add Child</b-button>
                    </b-col>
                    <b-col lg="2" class="my-1 d-flex justify-content-end">
                        <b-button @click="exportDataToCSV" variant="primary" class="mb-8 mr-8">Export</b-button>
                    </b-col>
                </b-row>
            </div>
        </div>
        <!-- model -->
        <b-modal v-model="modalVisible" title="Add Child" hide-footer>
            <!-- Your form content goes here -->
            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <b-form-group id="input-group-1" label="Student Name:" label-for="name">
                            <b-form-input id="student_name" type="text" placeholder="Enter name" v-model="student_name"
                                required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group id="input-group-2" label="School Name:" label-for="school_name">
                            <b-form-input id="school_name" type="text" placeholder="Enter name" v-model="school_name"
                                required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group id="input-group-1" label="Notes" label-for="notes">
                            <b-form-input id="notes" type="text" placeholder="Enter notes" v-model="notes"
                                required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group id="input-group-1" label=" School Pickup Time" label-for="pickup_time">
                            <b-form-input id="pickup_time" type="time" placeholder="Enter pickup_time"
                                v-model="pickup_time" required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group id="input-group-1" label="School Drop Time" label-for="drop_time">
                            <b-form-input id="drop_time" type="time" placeholder="Enter time " v-model="drop_time"
                                required></b-form-input>
                        </b-form-group>
                    </div>
                    <!-- Zone Add  -->
                    <div class="col-md-6 col-12">
                        <b-form-group id="input-group-2" label="Zone Title:" label-for="name">
                            <b-form-input id="name" type="name" placeholder="Enter zone title " v-model="name" required>
                            </b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6 col-12">
                        <b-form-group id="input-group-2" label="Select Zone Type:" label-for="zone_id">
                            <b-form-select id="zone_id" placeholder="Select car" v-model="zone_id" required>
                                <option value="" disabled>Select Zone Type</option>
                                <option v-for="zone in zones" :key="zone.id" :value="zone.id">
                                    {{ zone.name }}/ {{ zone.pickup_name }}/ {{ zone.drop_name }}
                                </option>
                            </b-form-select>
                        </b-form-group>
                    </div>

                    <!-- ..... -->
                    <div class="col-md-4 col-12">
                        <b-form-group id="input-group-2" label="Picture:" label-for="image">
                            <div style="margin-left: 3px; margin-bottom: 15px">
                                <input type="file" accept="image/*" id="image" @change="onProfilePictureChange" />
                            </div>
                        </b-form-group>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
                    <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading">
                        <span v-if="!isLoading">Submit</span>
                        <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                    </b-button>
                </div>
            </form>
        </b-modal>
        <!-- end model -->
        <!-- filter end -->
        <b-row>
            <div class="col-12 mt-16">
                <b-table id="dataTable" :items="users" :fields="fields" :current-page="currentPage" :per-page="perPage"
                    :filter="filter" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" show-empty @filtered="onFiltered"
                    y responsive>

                    <template #cell(image)="row">
                        <img :src="'https://backendbigways.singsavatech.com/' + row.item.image" alt="Picture"
                            width="100" height="100" />
                    </template>

                    <!-- Action Button Code -->
                    <template #cell(actions)="row">
                        <b-button @click="editUser(row.item.id)" variant="link" class="p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                style="color: orange; margin-left: 10px; margin-bottom: 10px" class="bi bi-pencil"
                                viewBox="0 0 16 16">
                                <!-- ... your existing SVG path ... -->
                                <path
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                        </b-button>
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
            isLoading: false,
            editMode: false,
            users: [], // Instead of 'items', use 'users' array to store fetched data
            fields: [
                { key: "id", sortable: true },
                { key: "student_name", sortable: true },
                { key: "school_name", sortable: true },
                { key: "notes", sortable: true },
                { key: "pickup_time", sortable: true },
                { key: "drop_time", sortable: true },
                { key: "image", sortable: true },
                { key: "actions", label: "Actions" },
            ],

            filter: "", // Define filter property for search functionality
            totalRows: 0, // Initialize totalRows to 0
            showDeleteConfirmations: false,
            itemIdToDelete: null,
            loading: false,
            startDateFilter: "",
            endDateFilter: "",
            your_vehicle_id: null,
            notes: "",
            name: "",
            pickup_time: "",
            image: "",
            notes: "",
            pickup_time: "",
            student_name: "",
            drop_time: "",
            school_name: "",
            zone_id: "",
            vehicle_id: "",
            schools_id: "",
            vehicles: [],
            schools: [],
            image: null,
            studentId: null,
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
        const userId = this.$route.params.id;
        this.fetchData(userId);
    },
    created() {
        axios
            .get("notAssign")
            .then((response) => {
                this.vehicles = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get("schools")
            .then((response) => {
                this.schools = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
        const userId = this.$route.params.id;
        this.fetchData(userId);
    },
    methods: {
        fetchData(userId) {
            this.loading = true; // Set loading to true before fetching data
            // let apiUrl = "studentGet";
            axios
                .get(`studentGet/${userId}`) // Replace 'your_api_endpoint_url_here' with your actual API URL
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
            this.notes = "";
            this.name = "";
            this.zone_id = "";
            this.vehicle_id = "";
            this.pickup_time = "";
            this.image = "";
            this.notes = "";
            this.pickup_time = "";
            this.student_name = "";
            this.drop_time = "";
            this.school_name = "";
            this.image = null;
            // ... reset other fields ...
        },

        submitForm() {
            if (this.editMode) {
                // Perform update logic based on the data in the form fields
                this.isLoading = true;
                // Create a FormData object to handle the image file
                const formData = new FormData();
                formData.append("name", this.name);
                formData.append("vehicle_id", this.vehicle_id);
                formData.append("student_name", this.student_name);
                formData.append("school_name", this.school_name);
                formData.append("notes", this.notes);
                formData.append("pickup_time", this.pickup_time);
                formData.append("drop_time", this.drop_time);
                formData.append("image", this.image);
                axios
                    .post(`studentUpdated/${this.studentId}`, formData)
                    .then((response) => {
                        console.log(response.data);
                        this.$bvToast.toast("Child Updated successfully!", {
                            title: "Success",
                            variant: "success",
                            solid: true,
                            appendToast: true,
                            toaster: "b-toaster-top-right",
                            autoHideDelay: 5000,
                            variant: "primary", // Background color
                        });
                        // Reset form fields
                        this.resetFormFields();
                        // Fetch updated data
                        const userId = this.$route.params.id;
                        this.fetchData(userId);
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
                formData.append("name", this.name);
                formData.append("zone_id", this.zone_id);
                formData.append("vehicle_id", this.vehicle_id);
                formData.append("student_name", this.student_name);
                formData.append("school_name", this.school_name);
                formData.append("notes", this.notes);
                formData.append("pickup_time", this.pickup_time);
                formData.append("pickup_time", this.pickup_time);
                formData.append("drop_time", this.drop_time);
                formData.append("image", this.image);
                formData.append("parent_id", this.params || this.$route.params.id);
                axios
                    .post("studentadd", formData)
                    .then((response) => {
                        console.log(response.data);
                        this.$bvToast.toast("Child added successfully!", {
                            title: "Success",
                            variant: "success",
                            solid: true,
                            appendToast: true,
                            toaster: "b-toaster-top-right",
                            autoHideDelay: 5000,
                            variant: "primary", // Background color
                        });
                        // Reset form fields
                        this.resetFormFields();
                        // Fetch updated data
                        const userId = this.$route.params.id;
                        this.fetchData(userId);
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

        onProfilePictureChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.image = file;
            }
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
        deleteItem(itemId) {
            this.itemIdToDelete = itemId; // Set the item ID to be deleted
            axios
                .delete(`destroyStudent/${itemId}`)
                .then((response) => {
                    this.showDeleteConfirmations = false;
                    const userId = this.$route.params.id;
                    this.fetchData(userId);
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
        updateStatus(user) {
            user.status = user.status === "Approved" ? "Pending" : "Approved";
            axios
                .post(`registrationUpdate/${user.id}`, user)
                .then((response) => {
                    console.log("Status updated successfully:", response.data);
                })
                .catch((error) => {
                    console.error("Error updating status:", error);
                });
        },
        toggleCardModal(item) {
            this.selectedCardOption = ""; // Reset the selected card option
            this.rowToUpdate = item; // Set the row to be updated
            this.isCardModalVisible = true; // Show the modal
        },


        async editUser(userId) {
            try {
                // Make an API call to fetch user data based on userId
                const response = await axios.get(`studentShow/${userId}`);

                // Populate form fields with the fetched user data
                const userData = response.data.data; // Ensure the correct property is used (response.data.data)
                this.name = userData.name;
                this.zone_id = userData.zone_id;
                this.school_name = userData.school_name;
                this.student_name = userData.student_name;
                this.notes = userData.notes;
                this.pickup_time = userData.pickup_time;
                this.drop_time = userData.drop_time;
                this.image = userData.image;
                this.studentId = userData.id

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
