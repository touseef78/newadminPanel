<template>
    <b-card>
        <b-col lg="6" class="my-1">
            <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm"
                class="mb-0">
                <b-input-group size="sm">
                    <b-form-input id="filter-input"  type="search"
                        placeholder="Type to Search"></b-form-input>

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

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            style="color: orange;margin-right:8px" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path
                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            style="color: red;" class="bi bi-trash3" viewBox="0 0 16 16">
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


export default {
    data() {
        return {
            sortBy: 'age',
            sortDesc: false,
            fields: [
                { key: 'name', sortable: true },
                { key: 'company_name', sortable: true },
                { key: 'description', sortable: true },
                { key: 'car_make', sortable: true },
                { key: 'car_model', sortable: true },
                { key: 'car_color', sortable: true },
                { key: 'car_number', sortable: true },
                { key: "actions", label: "Actions" },


            ],
            items: [
                { isActive: true, name: 'Ali', company_name: 'Technolyte', description: 'anything', car_make: 'Honda', car_model: '2005', car_color: 'Red', car_number: 'LDK 9078' },
                { isActive: true, name: 'Awais', company_name: 'Technolyte', description: 'anything', car_make: 'Toyota', car_model: '2010', car_color: 'Black', car_number: 'LER 9748' },
                { isActive: true, name: 'Qasim', company_name: 'Technolyte', description: 'anything', car_make: 'Pak Hero', car_model: '2015', car_color: 'Blue', car_number: 'LEP 3465' },
                { isActive: true, name: 'Noman', company_name: 'Technolyte', description: 'anything', car_make: 'Honda', car_model: '2020', car_color: 'Green', car_number: 'LEX 5675' },



            ],
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
    methods: {
        codeClick() {
            this.codeActive = !this.codeActive;

            setTimeout(() => {
                this.codeActiveClass = !this.codeActiveClass;
            }, 100);
        },
    },
};
</script>
