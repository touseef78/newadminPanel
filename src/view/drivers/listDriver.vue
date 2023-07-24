
<template>
    <b-card>
        <b-row>
            <div class="col-12 mt-16">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="First Name:" label-for="first_name">
                                <b-form-input id="first_name" v-model="first_name" type="text"
                                    placeholder="Enter first name" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Last Name:" label-for="last_name">
                                <b-form-input id="last_name" v-model="last_name" placeholder="Enter last name"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Email Address:" label-for="email">
                                <b-form-input id="email" v-model="email" placeholder="Enter email address"
                                    required></b-form-input>
                            </b-form-group>


                        </div>
                        <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                            <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
                        </b-form-group> -->

                        <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4"
                                :aria-describedby="ariaDescribedby">
                                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                                <b-form-checkbox value="that">Check that out</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group> -->

                        <!-- <b-button type="submit" variant="primary" class="mb-8 mr-8">Submit</b-button> -->
                        <!-- <b-button type="reset" variant="danger" class="mb-8 mr-8">Reset</b-button> -->
                    </div>
                    <!------------------------ Second Row--------------------------- -->
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Mobile:" label-for="mobile">
                                <b-form-input id="mobile" v-model="mobile" type="text" placeholder="Enter mobile number"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Gender:" label-for="gender">
                                <b-form-input id="gender" v-model="gender" placeholder="Enter gender"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Select Type:" label-for="">
                                <b-form-input id="select_type" v-model="select_type" placeholder="Enter type"
                                    required></b-form-input>
                            </b-form-group>


                        </div>
             
                    </div>
                    <!----------------------------------- Third Row -------------------->
                    <div class="row">
                        <div class="col-4">

                            <b-form-group id="input-group-1" label="Reference Name:" label-for="ref_name">
                                <b-form-input id="ref_name" v-model="ref_number" type="text"
                                    placeholder="Enter reference name" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="Reference Number:" label-for="ref_num">
                                <b-form-input id="ref_num" v-model="ref_num" placeholder="Enter reference number"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">

                            <b-form-group id="input-group-2" label="CNIC:" label-for="cnic">
                                <b-form-input id="cnic" v-model="cnic" placeholder="Enter CNIC" required></b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                        <b-button type="submit" variant="primary" class="mb-8 mr-8">Submit</b-button>
                       
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

} from "bootstrap-vue";

import code from "../components/data-entry/form/code";

export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                food: null,
                checked: [],
            },
            AddExpensive: [
                { text: "Select One", value: null },
                "Tuning",
                "Change Mobile Oil",
                "Petrol",
                "washing",
            ],
            show: true,
            codeText: code.introduction,
            codeActive: false,
            codeActiveClass: false,
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

    },
    methods: {
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

        codeClick() {
            this.codeActive = !this.codeActive;

            setTimeout(() => {
                this.codeActiveClass = !this.codeActiveClass;
            }, 100);
        },
    },
};
</script>
