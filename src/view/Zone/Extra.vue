<!-- today  code here  -->
<template>
    <div>
        <div v-if="successMessage" class="alert alert-success" style="color: rgb(5, 20, 48)">
            {{ successMessage }}
        </div>
        <b-card>
            <b-row>
                <div class="col-12 mt-16">
                    <b-form @submit.prevent="addUser" v-if="show">
                        <div style="
                background-color: rgb(97, 116, 152);
                height: 32px;
                border-radius: 4px;
              ">
                            <h4 style="
                  color: rgb(223, 227, 238);
                  margin-left: 5px;
                  font-weight: bold;
                ">

                                Zone Information
                            </h4>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Zone Title:" label-for="name">
                                    <b-form-input id="name" type="name" placeholder="Enter zone title " v-model="name"
                                        required>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="position-relative col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Pickup Location:" label-for="zone_pickup_name">
                                    <b-form-input id="zone_pickup_name" type="text" placeholder="Enter pickup location"
                                        autocomplete="off" v-model="zone_pickup_name" @change="geocodeAddress"
                                        @input="getLocationSuggestions" @keydown.down.prevent="moveDown"
                                        @keydown.up.prevent="moveUp" @keydown.enter.prevent="selectHighlightedLocation"
                                        required>
                                    </b-form-input>
                                    <ul class="dropdown-menu" v-if="suggestions.length > 0">
                                        <li v-for="(suggestion, index) in suggestions" :key="index"
                                            :class="{ 'highlighted': index === highlightedIndex }"
                                            @click="selectLocation(suggestion)">
                                            <strong>{{ suggestion.description }}</strong>
                                        </li>
                                    </ul>
                                    <div class="invalid-feedback" v-if="!zone_pickup_name">
                                        This field must be filled.
                                    </div>
                                </b-form-group>
                            </div>
                            <!-- <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Midpoint Location:">
                                    <div v-for="(mid_name, index) in mid_names" :key="index"
                                        class="mb-2 d-flex align-items-center">
                                        <b-form-input :id="'midpoint-' + index" type="text"
                                            placeholder="Enter midpoint location" autocomplete="off"
                                            v-model="mid_name.value" @input="getLocationSuggestions2(index)"
                                            @keydown.down.prevent="moveDown2(index)"
                                            @keydown.up.prevent="moveUp2(index)"
                                            @keydown.enter.prevent="selectHighlightedLocation2(index)"></b-form-input>
                                        <ul class="dropdown-menu"
                                            v-if="suggestions2[index] && suggestions2[index].length > 0">
                                            <li v-for="(suggestion, suggestionIndex) in suggestions2[index]"
                                                :key="suggestionIndex"
                                                :class="{ 'highlighted': suggestionIndex === highlightedIndex2[index] }"
                                                @click="selectLocation2(suggestion, index)">
                                                <strong>{{ suggestion.description }}</strong>
                                            </li>
                                        </ul>
                                        <b-button variant="danger" @click="removeMidpoint(index)"
                                            class="ml-2">Remove</b-button>
                                    </div>
                                    <b-button variant="primary" @click="addMidpoint">Add New Field</b-button>
                                </b-form-group>
                            </div> -->
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Midpoint Location:">
                                    <div v-for="(mid_name, index) in mid_names" :key="index"
                                        class="mb-2 d-flex align-items-center">
                                        <b-form-input :id="'midpoint-' + index" type="text"
                                            placeholder="Enter midpoint location" autocomplete="off"
                                            v-model="mid_name.value" @input="getLocationSuggestions2(index)"
                                            @keydown.down.prevent="moveDown2(index)"
                                            @keydown.up.prevent="moveUp2(index)"
                                            @keydown.enter.prevent="selectHighlightedLocation2(index)"></b-form-input>
                                        <ul class="dropdown-menu"
                                            v-if="suggestions2[index] && suggestions2[index].length > 0">
                                            <li v-for="(suggestion, suggestionIndex) in suggestions2[index]"
                                                :key="suggestionIndex"
                                                :class="{ 'highlighted': suggestionIndex === highlightedIndex2[index] }"
                                                @click="selectLocation2(suggestion, index)">
                                                <strong>{{ suggestion.description }}</strong>
                                            </li>
                                        </ul>
                                        <b-button variant="danger" @click="removeMidpoint(index)"
                                            class="ml-2">Remove</b-button>
                                    </div>
                                    <b-button variant="primary" @click="addMidpoint">Add Mid Point</b-button>
                                </b-form-group>
                            </div>


                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Select Dropoff Location:" label-for="schools_id"
                                    required>
                                    <b-form-select id="schools_id" placeholder="Select dropoff location"
                                        v-model="schools_id">
                                        <option value="">Select Dropoff Location</option>
                                        <option v-for="schools in schools" :key="schools.id" :value="schools.id">
                                            {{ schools.address }}
                                        </option>
                                    </b-form-select>
                                </b-form-group>
                            </div>

                        </div>
                        <template>
                            <div>
                                <!-- Your existing code -->

                                <!-- Loop through zone_times to display vehicle information -->
                                <b-card v-for="(zone, index) in editedUser.zone_times" :key="index">
                                    <div style="
          background-color: rgb(97, 116, 152);
          height: 32px;
          border-radius: 4px;
      ">
                                        <h4 style="
          color: rgb(223, 227, 238);
          margin-left: 5px;
          font-weight: bold;
        ">
                                            Vehicle Information {{ index + 1 }}
                                        </h4>
                                    </div>
                                    <div class="row">

                                        <div class="col-md-4 col-12">
                                            <b-form-group :id="'input-group-2-' + index"
                                                :label="'Car Name ' + (index + 1) + ':'"
                                                :label-for="'vehicle_id_' + index">
                                                <b-form-input :id="'vehicle_id_' + index" placeholder="Select car"
                                                    v-model="vehicleName" disabled>
                                                </b-form-input>
                                            </b-form-group>
                                        </div>



                                        <div class="col-md-4 col-12">
                                            <b-form-group id="input-group-2" label="Pickup Time:"
                                                label-for="pickup_time">
                                                <b-form-input id="pickup_time" type="time"
                                                    placeholder="Enter pickup time " v-model="zone.pickup_time"
                                                    disabled>
                                                </b-form-input>
                                            </b-form-group>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <b-form-group id="input-group-2" label="Dropoff Time:"
                                                label-for="return_time">
                                                <b-form-input id="return_time" type="time"
                                                    placeholder="Enter dropoff time " v-model="zone.return_time"
                                                    disabled>
                                                </b-form-input>
                                            </b-form-group>
                                        </div>
                                        <!-- Edit  code  here  -->
                                        <div>
                                            <!-- <div class="col-12 text-right mt-2">
                                                <b-button variant="primary" @click="editZone(index)">Edit</b-button>
                                                <b-button variant="danger" @click="deleteZone(index)">Delete</b-button>
                                            </div> -->
                                            <!-- delete -->
                                            <b-button @click="showDeleteConfirmation(zone.zoneTime_id)" variant="link"
                                                class="p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                    fill="currentColor"
                                                    style="color: red; margin-left: 6px; margin-bottom: 10px"
                                                    class="bi bi-eye" viewBox="0 0 16 16">
                                                    <!-- ... your SVG path ... -->
                                                    <path
                                                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                </svg>
                                            </b-button>

                                            <b-modal v-model="showDeleteConfirmations" title="Delete Confirmation">
                                                <p>Are you sure you want to delete this item?</p>
                                                <template #modal-footer>
                                                    <b-button variant="danger" @click="deleteItem(itemIdToDelete)"
                                                        :disabled="isLoading">
                                                        <b-spinner v-if="isLoading" small></b-spinner>
                                                        <span v-if="!isLoading">Delete</span>
                                                    </b-button>
                                                    <b-button variant="secondary" @click="cancelDelete"
                                                        :disabled="isLoading">Cancel</b-button>
                                                </template>
                                            </b-modal>
                                            <!-- end delete -->
                                            <b-button @click="editUser(zone.zoneTime_id)" variant="link" class="p-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                    fill="currentColor"
                                                    style="color: orange; margin-left: 10px; margin-bottom: 10px"
                                                    class="bi bi-pencil" viewBox="0 0 16 16">

                                                    <path
                                                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                </svg>
                                            </b-button>
                                        </div>

                                    </div>
                                </b-card>

                                <!-- Your existing code -->
                            </div>
                        </template>
                        <br />
                        <b-button type="submit" variant="primary" class="mb-8 mr-8" :disabled="isLoading">
                            <span v-if="!isLoading">Submit</span>
                            <b-spinner v-else class="mb-8 mr-8" variant="primary" small></b-spinner>
                        </b-button>
                    </b-form>
                </div>
                <div v-if="codeActive" class="col-12 mt-24 hljs-container" :class="{ active: codeActiveClass }">
                    <pre v-highlightjs>
        <code class="hljs html">
            {{ codeText }}
        </code>
    </pre>
                </div>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import {
    BRow,
    BCol,
    BCard,
    BButton,
    BForm,
    BFormGroup,
    BFormCheckboxGroup,
    BFormCheckbox,
    BFormSelect,
    BFormInput,
    BSpinner,
} from "bootstrap-vue";
import axios from "axios";
import { BToast } from "bootstrap-vue";
import code from "../components/data-entry/form/code";

export default {
    data() {
        return {
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            selectedOption: "",
            inputField1: "",
            inputField2: "",
            inputField3: "",
            showModal: false,
            isLoading: false,
            successMessage: "",
            name: "",
            address: "",
            suggestions: [],
            highlightedIndex: -1,
            dropoff_location: "",
            pickup_time: "",
            return_time: "",
            mid_names: [{ value: '' }],
            suggestions2: [[]],
            highlightedIndex2: [-1],
            highlightedIndex: -1,
            vehicle_id: "",
            schools_id: "",
            vehicles: [],
            schools: [],
            zone_pickup_latitude: "",
            zone_pickup_longitude: "",
            mid_latitude: "",
            mid_longitude: "",
            editedUser: null,
            zone_pickup_name: "",
            pickup_location: "",
            showDeleteConfirmations: false,
            itemIdToDelete: null,
            isLoading: false,
            vehicleName: "",




        };
    },
    components: {
        BRow,
        BCol,
        BCard,
        BButton,
        BForm,
        BFormGroup,
        BFormCheckboxGroup,
        BFormCheckbox,
        BFormSelect,
        BFormInput,
        BToast, // Add this line
        BSpinner,
    },

    created() {
        // Load the clients data when the component is created
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
        axios
            .get(`zonesShow/${userId}`)
            .then((response) => {

                this.editedUser = response.data.data;
                this.name = this.editedUser.name;
                this.pickup_time = this.editedUser.zone_times[0].pickup_time;
                this.return_time = this.editedUser.zone_times[0].return_time;
                this.zone_pickup_name = this.editedUser.zone_pickup_name;
                this.schools_id = this.editedUser.schools.address;
                this.vehicle_id = this.editedUser.zone_times[0].vehicle_id;
                this.zoneTime_id = this.editedUser.zone_times[0].zoneTime_id;
                // ............ 
                // this.vehicle_id = this.editedUser.zone_times[0].vehicles.name;
                // Set the vehicle name directly from the nested vehicle object
                this.vehicleName = this.editedUser.zone_times[0].vehicles.name;

                this.schools_id = this.editedUser.schools_id;
                this.mid_latitude = this.editedUser.mid_latitude;
                this.mid_longitude = this.editedUser.mid_longitude;

                this.zone_pickup_longitude = this.editedUser.zone_pickup_longitude;
                this.zone_pickup_latitude = this.editedUser.zone_pickup_latitude;
                this.mid_names = this.editedUser.midpoints.map(point => ({
                    value: point.mid_name
                }));

            })

            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    },
    methods: {
        getLocationSuggestions() {
            if (this.address.length > 2) {
                fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.address}&key=AIzaSyDRL4y2_cSzAcP0bedr-67CkG1kifDKYfg`)
                    .then(response => response.json())
                    .then(data => {
                        this.suggestions = data.predictions;
                    })
                    .catch(error => console.error(error));
            } else {
                this.suggestions = [];
            }
        },
        getLocationSuggestions2(index) {
            if (this.mid_names[index].value.length > 2) {
                fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.mid_names[index].value}&key=AIzaSyDRL4y2_cSzAcP0bedr-67CkG1kifDKYfg`)
                    .then(response => response.json())
                    .then(data => {
                        this.$set(this.suggestions2, index, data.predictions);
                    })
                    .catch(error => console.error(error));
            } else {
                this.$set(this.suggestions2, index, []);
            }
        },
        selectLocation2(suggestion, index) {
            this.$set(this.mid_names[index], 'value', suggestion.description);
            this.$set(this.suggestions2, index, []);
        },
        moveDown2(index) {
            if (this.highlightedIndex2[index] < this.suggestions2[index].length - 1) {
                this.$set(this.highlightedIndex2, index, this.highlightedIndex2[index] + 1);
            }
        },
        moveUp2(index) {
            if (this.highlightedIndex2[index] > 0) {
                this.$set(this.highlightedIndex2, index, this.highlightedIndex2[index] - 1);
            }
        },
        selectHighlightedLocation2(index) {
            if (this.highlightedIndex2[index] >= 0 && this.highlightedIndex2[index] < this.suggestions2[index].length) {
                this.selectLocation2(this.suggestions2[index][this.highlightedIndex2[index]], index);
            }
        },

        selectLocation(suggestion) {
            this.address = suggestion.description;
            this.suggestions = [];
        },
        moveDown() {
            if (this.highlightedIndex < this.suggestions.length - 1) {
                this.highlightedIndex++;
            }
        },
        moveUp() {
            if (this.highlightedIndex > 0) {
                this.highlightedIndex--;
            }
        },
        selectHighlightedLocation() {
            if (this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
                this.selectLocation(this.suggestions[this.highlightedIndex]);
            }
        },
        // latitude code here 

        geocodeAddress() {
            var geocoder = new google.maps.Geocoder();
            var address = this.address;
            var self = this; // Store reference to Vue component

            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == 'OK') {
                    self.zone_pickup_latitude = results[0].geometry.location.lat();
                    self.zone_pickup_longitude = results[0].geometry.location.lng();
                    console.log("Latitude: " + self.zone_pickup_latitude + ", Longitude: " + self.zone_pickup_longitude);
                    // You can use drop_latitude and drop_longitude here as needed
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }
            });
        },


        // end latitude code here 
        showMsgBoxOne() {
            debugger;
        },
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            // debugger
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.email = "";
            this.form.name = "";
            this.form.food = null;
            this.form.checked = [];
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },

        addUser() {
            this.isLoading = true;
            // Create a FormData object to handle the image file

            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("pickup_time", this.pickup_time);

            this.mid_names.forEach((midpoint, index) => {
                formData.append(`mid_name[${index}]`, midpoint.value);
            });

            formData.append("return_time", this.return_time);
            formData.append("zone_pickup_name", this.zone_pickup_name);
            formData.append("schools_id", this.schools_id);
            formData.append("zone_pickup_longitude", this.zone_pickup_longitude);
            formData.append("zone_pickup_latitude", this.zone_pickup_latitude);
            formData.append("vehicle_id", this.vehicle_id);

            formData.append("mid_latitude", this.mid_latitude);
            formData.append("mid_longitude", this.mid_longitude);

            this.editedUser.zone_times.forEach((zone, index) => {
                formData.append(`zone_times[${index}][vehicle_id]`, zone.vehicle_id);
                formData.append(`zone_times[${index}][pickup_time]`, zone.pickup_time);
                formData.append(`zone_times[${index}][return_time]`, zone.return_time);
            });

            axios
                .post(`zonesUpdate/${this.editedUser.id}`, formData)
                .then((response) => {
                    console.log(response.data);
                    this.$bvToast.toast("Zone Update successfully!", {
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
        },


        onProfilePictureChange(event) {
            const file = event.target.files[0];
            if (file) {
                // Set the selected file to the data property
                this.profile_picture = file;
            }
        },

        vehicleImageChange(event) {
            const files = event.target.files;
            if (files && files.length > 0) {
                // Convert FileList to an array
                this.vehicle_image = Array.from(files);
            }
        },

        BnakImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                // Set the selected file to the data property
                this.bank_upload_document = file;
            }
        },

        codeClick() {
            this.codeActive = !this.codeActive;

            //   setTimeout(() => {
            //     this.codeActiveClass = !this.codeActiveClass;
            //   }, 100);
        },

        saveOwnCar() {
            this.showModal = false;
        },
        addMidpoint() {
            this.mid_names.push({ value: '' });
        },
        removeMidpoint(index) {
            if (this.mid_names.length > 1) {
                this.mid_names.splice(index, 1);
            } else {
                this.mid_names[index].value = '';
            }
        },
        // Edit  code  here 

        editUser(userId) {
            this.$router.push({ name: "ZoneTimeVehicle", params: { id: userId } });
        },
        ///  delete
        showDeleteConfirmation(itemId) {
            this.itemIdToDelete = itemId;
            this.showDeleteConfirmations = true;
        },

        deleteItem(itemId) {
            this.isLoading = true; // Set loading to true when starting the deletion
            axios
                .delete(`destroyVehicle/${itemId}`)
                .then((response) => {
                    // Remove the deleted item from the zone_times array
                    this.editedUser.zone_times = this.editedUser.zone_times.filter(zone => zone.zoneTime_id !== itemId);
                    this.showDeleteConfirmations = false;
                })
                .catch((error) => {
                    // Handle error
                    console.error("Error deleting item:", error);
                })
                .finally(() => {
                    this.isLoading = false; // Set loading to false when the deletion is complete
                });
        },
        cancelDelete() {
            this.showDeleteConfirmations = false;
            this.itemIdToDelete = null; // Reset itemIdToDelete
        },
    },
};
</script>
<style>
.dropdown-menu {
    display: block;
    /* Ensure the dropdown is displayed */
    max-height: 200px;
    /* Limit the height of the dropdown */
    overflow-y: auto;
    /* Enable scrolling for overflowing content */
    border: 1px solid #ccc;
    padding: 0;
}

.dropdown-menu li {
    padding: 10px;
    cursor: pointer;
}

.dropdown-menu li.highlighted {
    background-color: #617498;
    color: white;
}

.dropdown-menu li strong {
    font-weight: bold;
    /* Make suggestion descriptions bold */
}
</style>
