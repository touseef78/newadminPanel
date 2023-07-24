
<template>
    <b-card>
        <b-row>
            <div class="col-12 mt-16">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <div class="row">
                        <div class="col-6">

                            <b-form-group id="input-group-1" label="Car Make:" label-for="car_make">
                                <b-form-input id="car_make" v-model="first_name" type="text" placeholder="select"
                                    autocomplete="off" required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-6">

                            <b-form-group id="input-group-2" label="Car Model:" label-for="car_model">
                                <b-form-input id="car_model" v-model="last_name" placeholder="select" autocomplete="off"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-6">

                            <b-form-group id="input-group-2" label="Car Color:" label-for="car_color">
                                <b-form-input id="car_color" v-model="car_color" placeholder="Enter color"
                                    required></b-form-input>
                            </b-form-group>

                        </div>

                        <div class="col-6">

                            <b-form-group id="input-group-2" label="Car Number:" label-for="car_num">
                                <b-form-input id="car_color" v-model="car_num" placeholder="Enter number"
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

                        <b-button type="submit" variant="primary" class="mb-8 mr-8">Submit</b-button>
                        <!-- <b-button type="reset" variant="danger" class="mb-8 mr-8">Reset</b-button> -->
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
