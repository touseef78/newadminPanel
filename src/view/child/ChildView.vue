<template>
    <div>
        <div v-if="successMessage" class="alert alert-success" style="color: rgb(5, 20, 48)">
            {{ successMessage }}
        </div>
        <b-card>
            <b-row>
                <div class="col-12 mt-16">
                    <b-form @submit.prevent="addUser" v-if="show">
                        <div style="background-color: rgb(97, 116, 152); height: 32px; border-radius: 4px;">
                            <h4 style="color: rgb(223, 227, 238); margin-left: 5px; font-weight: bold;">Child
                                Information</h4>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Student Name:" label-for="name">
                                    <b-form-input id="student_name" type="text" placeholder="Enter name"
                                        v-model="student_name" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="School Name:" label-for="school_name">
                                    <b-form-input id="school_name" type="text" placeholder="Enter name"
                                        v-model="school_name" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Notes" label-for="notes">
                                    <b-form-input id="notes" type="text" placeholder="Enter notes" v-model="notes"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label=" School Pickup Time" label-for="pickup_time">
                                    <b-form-input id="pickup_time" type="time" placeholder="Enter pickup_time"
                                        v-model="pickup_time" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="School Drop Time" label-for="drop_time">
                                    <b-form-input id="drop_time" type="time" placeholder="Enter time"
                                        v-model="drop_time" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Picture:" label-for="image">
                                    <div style="margin-left: 3px; margin-bottom: 15px">
                                        <!-- <input type="file" accept="image/*" id="image"
                                            @change="onProfilePictureChange" /> -->
                                        <img :src="'https://backendbigways.singsavatech.com/' + image
                                            " alt="Profile Picture" width="100" height="100" />
                                    </div>
                                </b-form-group>
                            </div>

                        </div>
                        <!-- .................Zone detail -->
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
                                <b-form-group id="input-group-2" label="Zone Title" label-for="zone_id">
                                    <b-form-input id="zone_id" v-model="zone_id" disabled>
                                        <option value="" disabled>Select Zone Title</option>
                                        <option v-for="zone in zones" :key="zone.id" :value="zone.id">
                                            {{ zone.name }}
                                        </option>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- .............  -->
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Car Name:" label-for="vehicle_id">
                                    <b-form-input id="vehicle_id" placeholder="Select car" v-model="vehicle_id"
                                        disabled>
                                        <option value="">Car Name</option>
                                        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                                            {{ vehicle.name }}
                                        </option>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Driver Name" label-for="driver_name">
                                    <b-form-input id="driver_name" type="text" placeholder="Enter driver name"
                                        v-model="driver_name" disabled></b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Pickup Location" label-for="pickup_location">
                                    <b-form-input id="pickup_location" type="text" placeholder="Enter pickup location"
                                        v-model="pickup_location" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Dropoff Location" label-for="drop_location">
                                    <b-form-input id="drop_location" type="drop_location"
                                        placeholder="Enter dropoff location" v-model="drop_location"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Amount" label-for="amount">
                                    <b-form-input id="amount" type="amount" placeholder="Enter amount" v-model="amount"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Payment Status" label-for="payment_status">
                                    <b-form-input id="payment_status" type="text" placeholder="Enter payment status"
                                        v-model="payment_status" disabled></b-form-input>
                                </b-form-group>
                            </div>


                        </div>
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
import { BRow, BCol, BCard, BButton, BForm, BFormGroup, BFormSelect, BFormInput } from "bootstrap-vue";
import axios from "axios";

export default {
    data() {
        return {
            show: true,
            successMessage: '',
            student_name: "",
            drop_time: "",
            school_name: "",
            zones: [],
            zone_id: "",
            selectedZone: null, // To store details of the selected zone
            vehicles: [],
            image: "",
            payment_status: "",
            pickup_location: "",
            drop_location: '',
            studentId: null,
        };
    },
    components: {
        BRow,
        BCol,
        BCard,
        BButton,
        BForm,
        BFormGroup,
        BFormSelect,
        BFormInput,
    },
    created() {
        const userId = this.$route.params.id;
        axios.get(`show/${userId}`)
            .then((response) => {
                const data = response.data.data;
                this.student_name = data.student_name;
                this.school_name = data.school_name;
                this.notes = data.notes;
                this.pickup_time = data.pickup_time;
                this.drop_time = data.drop_time;
                this.zone_id = data.zone_id;
                this.vehicle_id = data.vehicle.name;
                this.zone_id = data.zone.name;
                this.image = data.image;
                this.payment_status = data.payment_status;
                this.pickup_location = data.vehicle.pickup_location;
                this.drop_location = data.vehicle.drop_location;
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    },
    methods: {
        // fetchZones() {
        //     axios.get("zones")
        //         .then(response => {
        //             this.zones = response.data.data; // Adjust this if the API response structure is different
        //         })
        //         .catch(error => {
        //             console.error("Error fetching zones:", error);
        //         });
        // },
        // fetchVehicles() {
        //     axios.get("vehicles")
        //         .then(response => {
        //             this.vehicles = response.data.data; // Adjust this if the API response structure is different
        //         })
        //         .catch(error => {
        //             console.error("Error fetching vehicles:", error);
        //         });
        // },
        fetchZoneDetails() {
            const selectedZone = this.zones.find(zone => zone.id === this.zone_id);
            this.selectedZone = selectedZone;
        },
        onProfilePictureChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.image = file;
            }
        },
    },
};
</script>
