<!-- Your other template code -->
<div class="col-md-4 col-12" v-if="isPrivateMode">
                                <!-- Private mode fields -->
                                <b-form-group id="input-group-2" label="Car Type:" label-for="vehicle_type">
                                    <b-form-select id="vehicle_type" v-model="vehicle_type" @change="fetchVehicles"
                                        required>
                                        <option value="AC">AC</option>
                                        <option value="Non AC">Non-AC</option>
                                    </b-form-select>
                                </b-form-group>
                            </div>
<div class="col-md-4 col-12" v-if="isPrivateMode">
                                <!-- Private mode fields -->
                                <b-form-group id="input-group-2" label="Select Car:" label-for="vehicle_id">
                                    <b-form-select id="vehicle_id" placeholder="Enter select car" v-model="vehicle_id">
                                        <option value="">Select Car</option>
                                        <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.id">{{
                                            vehicle.name }}</option>
                                    </b-form-select>
                                </b-form-group>
                            </div>
<div class="col-md-4 col-12" v-else>
                                <!-- Public mode fields -->
                                <b-form-group id="input-group-2" label="Zone Title:" label-for="zone_name">
                                    <b-form-input id="zone_name" type="text" placeholder="Enter zone title"
                                        v-model="zone_name" required></b-form-input>
                                </b-form-group>
                            </div>
<div class="col-md-4 col-12" v-else>
                                <!-- Public mode fields -->
                                <b-form-group id="input-group-2" label="Pickup Location:"
                                    label-for="zone_pickup_location">
                                    <b-form-input id="zone_pickup_location" type="text"
                                        placeholder="Enter pickup location" v-model="zone_pickup_location"
                                        required></b-form-input>
                                </b-form-group>
                            </div>