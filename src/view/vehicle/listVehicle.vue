<template>
    <b-card>
        <b-col lg="6" class="my-1">
            <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm"
                class="mb-0">
                <b-input-group size="sm">
                    <b-form-input id="filter-input" type="search" placeholder="Type to Search"></b-form-input>

                    <b-input-group-append>
                        <b-button :disabled="!filter">Clear</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </b-col>


        <b-row>
            <div class="col-12 mt-16">
                <b-table :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" responsive="sm">
                    <!-- Action Button Code -->

                    <template #cell(actions)="row">
                        <svg @click="viewUser(row.item)" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path
                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path
                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>

                        <svg @click="editUser(row.item)" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" style="color: orange;margin-right:8px" class="bi bi-pencil"
                            viewBox="0 0 16 16">
                            <path
                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>

                        <svg @click="deleteUser(row.item)" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" style="color: red;" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                    </template>

                </b-table>
            </div>



        </b-row>
    </b-card>
</template>

<script>
import { BRow, BCol, BCard, BButton, BTable } from "bootstrap-vue";
import axios from "axios";

export default {
    data() {
        return {
            sortBy: 'age',
            sortDesc: false,
            vehicles:[],
            fields: [
                { key: 'id', sortable: true },
                { key: 'name', sortable: true },
                { key: 'vehicle_company', sortable: true },
                { key: 'description', sortable: true },
                { key: 'car_make', sortable: true },
                { key: 'car_model', sortable: true },
                { key: 'car_color', sortable: true },
                { key: 'car_number', sortable: true },
                { key: "actions", label: "Actions" },


            ],
            items: [],
            codeActive: false,
            codeActiveClass: false,
        };
    },
    components: {
        BRow,
        BCol,
        BCard,
        BButton,
        BTable,
    },
    // created() {
    //     console.log('created');
    //     // Load the clients data when the component is created
    //     axios
    //         .get("vehicle")
    //         .then((response) => {
    //             this.vehicles = response.data.data;
    //             this.totalRows = this.vehicles.length; // Update the totalRows based on the fetched data

    //             // this.vehicles.forEach((vehicle) => {
    //             //     var veh_obj = { isActive: true, id: vehicle.id, name: vehicle.name, company_name: vehicle.company_name, description: vehicle.description, car_make: vehicle.car_make, car_model: vehicle.car_model, car_color: vehicle.car_color, car_number: vehicle.car_number };
    //             //     this.items.push(veh_obj);

    //             // });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },
   
    methods: {
        fetchData() {
            axios
                .get("vehicle") // Replace 'your_api_endpoint_url_here' with your actual API URL
                .then((response) => {
                    this.vehicle = response.data.data;
                    this.totalRows = this.vehicle.length; // Update the totalRows based on the fetched data
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        },

        viewUser(user) {
            // Implement the functionality to view the user details, e.g., show a modal
            console.log('View user:', user);
        },

        editUser(user) {
            // Implement the functionality to edit the user details, e.g., show an edit form
            console.log('Edit user:', user);
        },

        deleteUser(user) {
            // Implement the functionality to delete the user, e.g., show a confirmation dialog
            console.log('Delete user:', user);
        },
    },
};
</script>
