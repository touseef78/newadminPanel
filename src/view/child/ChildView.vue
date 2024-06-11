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
                                    <b-form-input id="notes" placeholder="Enter notes" v-model="notes"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label=" School Pickup Time" label-for="pickup_time">
                                    <b-form-input id="pickup_time" placeholder="Enter pickup time" v-model="pickup_time"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="School Drop Time" label-for="drop_time">
                                    <b-form-input id="drop_time" placeholder="Enter time" v-model="drop_time"
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
                                <b-form-group id="input-group-1" label="Payment Status" label-for="payments_status">
                                    <b-form-input id="payments_status" type="text" placeholder="Enter payment status"
                                        v-model="payments_status" disabled></b-form-input>
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
                            <!-- <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Zone Title" label-for="zone_id">
                                    <b-form-input id="zone_id" v-model="zone_id" disabled>
                                        <option value="" disabled>Select Zone Title</option>
                                        <option v-for="zone in zones" :key="zone.id" :value="zone.id">
                                            {{ zone.name }}
                                        </option>
                                    </b-form-input>
                                </b-form-group>
                            </div> -->
                            <!-- .............  -->
                            <!-- <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Car Name:" label-for="vehicle_id">
                                    <b-form-input id="vehicle_id" placeholder="Select car" v-model="vehicle_id"
                                        disabled>
                                        <option value="">Car Name</option>
                                        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                                            {{ vehicle.name }}
                                        </option>
                                    </b-form-input>
                                </b-form-group>
                            </div> -->

                            <!-- <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Reg No" label-for="driver_name">
                                    <b-form-input id="vehicle_id" placeholder="Reg No" v-model="vehicle_id" disabled>
                                        <option value="">Reg No</option>
                                        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">
                                            {{ vehicle.reg_no }}
                                        </option>
                                    </b-form-input>
                                </b-form-group>
                            </div> -->

                            <!-- <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Pickup Location" label-for="pickup_location">
                                    <b-form-input id="pickup_location" type="text" placeholder="Enter pickup location"
                                        v-model="pickup_location" disabled></b-form-input>
                                </b-form-group>
                            </div> -->
                            <!-- <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Dropoff Location" label-for="drop_location">
                                    <b-form-input id="drop_location" type="drop_location"
                                        placeholder="Enter dropoff location" v-model="drop_location"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div> -->


                            <!-- Distance code  here -->
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Zone Title" label-for="car_name">
                                    <b-form-input id="car_name" type="text" placeholder="Enter name" v-model="car_name"
                                        disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Zone Pickup Name" label-for="zone_pickup_name">
                                    <b-form-input id="zone_pickup_name" type="text" placeholder="Enter zone pickup name"
                                        v-model="zone_pickup_name" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Pickup Time" label-for="pickup_time">
                                    <b-form-input id="pickup_time" type="text" placeholder="Enter  pickup time"
                                        v-model="pickup_time" disabled></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Dropoff Time" label-for="return_time">
                                    <b-form-input id="return_time" type="text" placeholder="Enter return time"
                                        v-model="return_time" disabled></b-form-input>
                                </b-form-group>
                            </div>




                        </div>
                        <!-- Diver  information  -->
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
                                Diver Information
                            </h4>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Name:" label-for="driver_name">
                                    <b-form-input id="driver_name" type="text" placeholder="Enter  name"
                                        autocomplete="off" v-model="driver_name" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="Email Address:" label-for="email">
                                    <b-form-input id="email" type="email" placeholder="Enter email address"
                                        v-model="email" disabled>
                                    </b-form-input>

                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-2" label="City:" label-for="city">
                                    <b-form-input id="city" placeholder="Enter city" v-model="city" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Mobile:" label-for="mobile">
                                    <b-form-input id="mobile" type="number" placeholder="Enter mobile number"
                                        v-model="mobile" pattern="[0-9]+" title="Please enter only numeric characters"
                                        disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                        </div>
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
                                Vehicle Information
                            </h4>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Name:" label-for="vehicle_name">
                                    <b-form-input id="vehicle_name" type="text" placeholder="Enter  vehicle name"
                                        autocomplete="off" v-model="vehicle_name" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Pickup Location:" label-for="pickup_location">
                                    <b-form-input id="pickup_location" type="text" placeholder="Enter  pickup location"
                                        autocomplete="off" v-model="pickup_location" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Dropoff Location:" label-for="drop_location">
                                    <b-form-input id="drop_location" type="text" placeholder="Enter  dropoff location"
                                        autocomplete="off" v-model="drop_location" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>

                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Vehicle Number:" label-for="vehicle_number">
                                    <b-form-input id="vehicle_number" type="text" placeholder="Enter  vehicle number"
                                        autocomplete="off" v-model="vehicle_number" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Registration Number:" label-for="reg_no">
                                    <b-form-input id="reg_no" type="text" placeholder="Enter  registration number"
                                        autocomplete="off" v-model="reg_no" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Vehicle Type:" label-for="vehicle_type">
                                    <b-form-input id="vehicle_type" type="text" placeholder="Enter  vehicle type"
                                        autocomplete="off" v-model="vehicle_type" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Seating Capacity:" label-for="seating_capacity">
                                    <b-form-input id="seating_capacity" type="text" placeholder="Enter  vehicle type"
                                        autocomplete="off" v-model="seating_capacity" pattern="[A- Z a-z]+"
                                        title="Please enter only alphabetic characters" disabled>
                                    </b-form-input>
                                </b-form-group>
                            </div>
                            <!-- <div class="col-md-4 col-12">
                                <b-form-group id="input-group-1" label="Distance: (Km)" label-for="distance">
                                    <b-form-input id="distance" type="text" placeholder="Enter distance"
                                        v-model="distance" disabled></b-form-input>
                                </b-form-group>
                            </div> -->

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
            amount: "",
            distance: "",
            payment_status: "",
            pickup_location: "",
            drop_location: '',
            studentId: null,
            driver_name: "",
            email: "",
            city: "",
            mobile: "",
            pickup_location: "",
            vehicle_name: "",
            drop_location: "",
            reg_no: "",
            vehicle_number: "",
            vehicle_type: "",
            seating_capacity: "",
            car_name: "",
            zone_pickup_name: "",
            pickup_time: "",
            return_time: "",
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
    // created() {
    //     const userId = this.$route.params.id;
    //     axios.get(`show/${userId}`)
    //         .then((response) => {
    //             const data = response.data.data;
    //             this.student_name = data.student_name;
    //             this.school_name = data.school_name;
    //             this.notes = data.notes;
    //             this.pickup_time = data.pickup_time;
    //             this.drop_time = data.drop_time;
    //             this.zone_id = data.zone_id;
    // this.vehicle_id = data.vehicle.name;
    // this.vehicle_id = data.vehicle.reg_no;
    //             this.zone_id = data.zone.name;
    //             this.image = data.image;
    //             this.amount = data.amount;
    //             this.payments_status = data.payments_status;
    //             this.pickup_location = data.vehicle.pickup_location;
    //             this.drop_location = data.vehicle.drop_location;
    //             // driver  code here 
    //             // this.editedUser = response.data.data;
    //             this.driver_name = data.vehicle.driver.name;
    //             this.email = data.vehicle.driver.email;
    //             this.city = data.vehicle.driver.city;
    //             this.mobile = data.vehicle.driver.mobile;

    //         })
    //         // const userId = this.$route.params.id;
    //         // axios
    //         //     .get(`drivers/${userId}`)
    //         //     .then((response) => {

    //         //         this.name = this.editedUser.name;
    //         //     })
    //         .catch((error) => {
    //             console.error("Error fetching user data:", error);
    //         });
    // },
    created() {
        const userId = this.$route.params.id;
        axios.get(`show/${userId}`)
            .then((response) => {
                const data = response.data.data;
                this.student_name = data.student_name;
                this.school_name = data.school_name;
                this.notes = data.notes;
                this.pickup_time = data.pickup_time;
                this.pickup_time = data.pickup_time;
                this.drop_time = data.drop_time;
                this.zone_id = data.zone_id;
                this.vehicle_id = data.vehicle.name;
                this.vehicle_id = data.vehicle.reg_no;
                this.vehicle_name = data.vehicle.name;
                this.car_name = data.zone.name;
                this.zone_pickup_name = data.zone.zone_pickup_name;
                this.pickup_time = data.zone.pickup_time;
                this.return_time = data.zone.return_time;
                this.image = data.image;
                this.amount = data.amount;
                // this.distance = data.distance;
                this.payments_status = data.payments_status;
                this.pickup_location = data.vehicle.pickup_location;
                this.reg_no = data.vehicle.reg_no;
                this.seating_capacity = data.vehicle.seating_capacity;
                this.distance = data.vehicle.distance;
                this.vehicle_type = data.vehicle.vehicle_type;
                this.vehicle_number = data.vehicle.vehicle_number;
                this.drop_location = data.vehicle.drop_location;
                this.driver_name = data.vehicle.driver.name;
                this.email = data.vehicle.driver.email;
                this.city = data.vehicle.driver.city;
                this.mobile = data.vehicle.driver.mobile;
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
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
