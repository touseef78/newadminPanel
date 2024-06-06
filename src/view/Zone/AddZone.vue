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
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Pickup Time:" label-for="pickup_time">
                                    <b-form-input id="pickup_time" type="time" placeholder="Enter pickup time "
                                        v-model="pickup_time" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Dropoff Time:" label-for="return_time">
                                    <b-form-input id="return_time" type="time" placeholder="Enter dropoff time "
                                        v-model="return_time" required>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Select Car:" label-for="vehicle_id">
                                    <b-form-select id="vehicle_id" placeholder="Select car" v-model="vehicle_id"
                                        required>
                                        <option value="">Select Car</option>
                                        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                                            {{ vehicle.name }}
                                        </option>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <div class="position-relative col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Pickup Location:" label-for="address">
                                    <b-form-input id="address" type="text" placeholder="Enter pickup location"
                                        autocomplete="off" v-model="address" @change="geocodeAddress"
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
                                    <div class="invalid-feedback" v-if="!address">
                                        This field must be filled.
                                    </div>
                                </b-form-group>
                            </div>

                            <!-- Mid  point  code  here  -->
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Midpoint Location:">
                                    <div v-for="(mid, index) in mid_name" :key="index"
                                        class="mb-2 d-flex flex-column align-items-start">
                                        <div class="d-flex align-items-center w-100">
                                            <b-form-input :id="'midpoint-' + index" type="text"
                                                placeholder="Enter midpoint location" autocomplete="off"
                                                v-model="mid.value" @input="getLocationSuggestions2(index)"
                                                @keydown.down.prevent="moveDown2(index)"
                                                @keydown.up.prevent="moveUp2(index)"
                                                @keydown.enter.prevent="selectHighlightedLocation2(index)"
                                                @blur="geocodeAddress2(index)">
                                            </b-form-input>
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
                                        <!-- <div v-if="mid.mid_latitude && mid.mid_longitude" class="mt-2">
                                            <b-badge variant="info">Lat: {{ mid.mid_latitude }}</b-badge>
                                            <b-badge variant="info" class="ml-2">Lng: {{ mid.mid_longitude }}</b-badge>
                                        </div> -->
                                    </div>
                                    <b-button variant="primary" @click="addMidpoint">Add Mid Point</b-button>
                                </b-form-group>
                            </div>



                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Select Dropoff Location:"
                                    label-for="schools_id">
                                    <b-form-select id="schools_id" placeholder="Select dropoff location"
                                        v-model="schools_id" required>
                                        <option value="">Select Dropoff Location</option>
                                        <option v-for="schools in schools" :key="schools.id" :value="schools.id">
                                            {{ schools.address }}
                                        </option>
                                    </b-form-select>
                                </b-form-group>
                            </div>



                        </div>

                        <!-- Bank Information End -->
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
            select_vehicle_type: "",
            selectedImage: null,
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
            selectedOption: "",
            fixSalary: "",
            inputField1: "",
            inputField2: "",
            inputField3: "",
            showModal: false,
            isLoading: false,
            // Add Driver
            name: "",
            address: "",
            suggestions: [],
            // mid_name: [{ value: '' }],
            mid_name: [{ value: '', mid_latitude: null, mid_longitude: null }],
            suggestions2: [[]],
            highlightedIndex2: [-1],
            highlightedIndex: -1,
            // highlightedIndex2: -1,
            dropoff_location: "",
            pickup_time: "",
            return_time: "",
            // suggestions: [[]],
            vehicle_id: "",
            schools_id: "",
            vehicles: [],
            schools: [],
            zone_pickup_latitude: "",
            zone_pickup_longitude: "",
            mid_latitude: "",
            mid_longitude: "",





        };
    },
    created() {
        // Load the existing midpoints if they are present in the API response
        axios
            .get("AIzaSyDRL4y2_cSzAcP0bedr-67CkG1kifDKYfg")
            .then((response) => {
                // Assuming response.data.midpoints is an array of existing midpoints
                if (response.data.midpoints && response.data.midpoints.length) {
                    this.mid_name = response.data.midpoints.map(midpoint => ({ value: midpoint }));
                    this.suggestions2 = new Array(this.mid_name.length).fill([]);
                    this.highlightedIndex2 = new Array(this.mid_name.length).fill(-1);
                }
            })
            .catch((error) => {
                console.error(error);
            });
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
        // Load the vehicles data when the component is created
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
    },

    methods: {
        // Fetch suggestions based on the entered text
        fetchSuggestions(text, index) {
            // Perform API call or use a predefined list of locations
            // For demo, let's assume we have a predefined list of locations
            const predefinedLocations = ['Location A', 'Location B', 'Location C', 'Location D'];
            this.suggestions[index] = predefinedLocations.filter(location =>
                location.toLowerCase().includes(text.toLowerCase())
            );
        },
        // Select suggestion from the list
        selectSuggestion(suggestion, index) {
            this.mid_name[index].value = suggestion;
            this.suggestions[index] = []; // Clear suggestion list
        },
        // Add new midpoint field
        addMidpoint() {
            this.mid_name.push({ value: '' });
            this.suggestions.push([]);
        },
        // Remove midpoint field
        removeMidpoint(index) {
            this.mid_name.splice(index, 1);
            this.suggestions.splice(index, 1);
        }
        ,
        // ............... 
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
            if (this.mid_name[index].value.length > 2) {
                fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.mid_name[index].value}&key=AIzaSyDRL4y2_cSzAcP0bedr-67CkG1kifDKYfg`)
                    .then(response => response.json())
                    .then(data => {
                        this.$set(this.suggestions2, index, data.predictions);
                    })

                    .catch(error => console.error(error));
            } else {
                this.$set(this.suggestions2, index, []);
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
        //   ..... mid point  code  here 
        selectLocation2(suggestion, index) {
            this.$set(this.mid_name[index], 'value', suggestion.description);
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
        // midpoint  code  here 
        async geocodeAddress2(index) {
            const address = this.mid_name[index].value;
            if (address) {
                try {
                    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDRL4y2_cSzAcP0bedr-67CkG1kifDKYfg`);
                    const data = await response.json();
                    if (data.status === 'OK') {
                        const location = data.results[0].geometry.location;
                        this.$set(this.mid_name[index], 'mid_latitude', location.lat);
                        this.$set(this.mid_name[index], 'mid_longitude', location.lng);
                    } else {
                        console.error('Geocode was not successful for the following reason:', data.status);
                    }
                } catch (error) {
                    console.error('Error fetching geocode data:', error);
                }
            }
        },

        // end latitude code here 
        // .......... 
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
            // formData.append("name", this.name);
            formData.append("pickup_time", this.pickup_time);

            // this.mid_name.forEach((midpoint, index) => {
            //     formData.append(`mid_name[${index}]`, midpoint.value);
            // });
            formData.append("return_time", this.return_time);
            formData.append("zone_pickup_name", this.address);
            formData.append("schools_id", this.schools_id);
            formData.append("zone_pickup_longitude", this.zone_pickup_longitude);
            formData.append("zone_pickup_latitude", this.zone_pickup_latitude);
            formData.append("vehicle_id", this.vehicle_id);
            this.mid_name.forEach((mid, index) => {
                formData.append(`mid_name[${index}]`, mid.value);
                formData.append(`mid_latitude[${index}]`, mid.mid_latitude || '');
                formData.append(`mid_longitude[${index}]`, mid.mid_longitude || '');
            });
            axios

                .post("zonesStore", formData)
                .then((response) => {
                    console.log(response.data);
                    this.$bvToast.toast("Zone added successfully!", {
                        title: "Success",
                        variant: "success",
                        solid: true,
                        appendToast: true,
                        toaster: "b-toaster-top-right",
                        autoHideDelay: 5000,
                        variant: "primary", // Background color
                    });
                    this.isLoading = false;
                    this.$router.push({ name: 'ListZone' });
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

        BankImageChange(event) {
            const file = event.target.files[0];
            if (file) {
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
            this.mid_name.push({ value: '' });
            this.suggestions2.push([]);
            this.highlightedIndex2.push(-1);
        },
        removeMidpoint(index) {
            this.mid_name.splice(index, 1);
            this.suggestions2.splice(index, 1);
            this.highlightedIndex2.splice(index, 1);
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
