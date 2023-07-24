<template>
    <b-card>



        <b-row>
            <div class="col-12 mt-16">
                <b-table :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" responsive="sm">
                       <!-- Action Button Code -->
                    <template #cell(actions)="row">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-0-circle" viewBox="0 0 16 16">
                            <path
                                d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" />
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
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
                // { key: 'sr_no', sortable: true },
                { key: 'name', sortable: true },
                { key: 'mobile', sortable: true },
                { key: 'email', sortable: true },
                { key: 'car_make', sortable: true },
                { key: 'car_model', sortable: true },
                { key: 'car_color', sortable: true },
                { key: 'car_num', sortable: true },
                { key: "actions", label: "Actions" },


            ],
            items: [
                { isActive: true, name: 'Assasli', email: 'ali@gmail.com', mobile: '098712345', car_make: 'Audi', car_model: '2012', car_color: 'white', car_num: 'LEP 1234' },
                { isActive: false, name: 'Awais', email: 'awais@gmail.com', mobile: '098712345', car_make: 'Honda', car_model: '2015', car_color: 'Black', car_num: 'LEX 4567' },
                { isActive: false, name: 'Umair', email: 'umair@gmail.com', mobile: '098745', car_make: 'Toyota', car_model: '2019', car_color: 'Red', car_num: 'LGD 1632' },
                { isActive: true, name: 'Taimoor', email: 'taimoor@gmail.com', mobile: '090078601', car_make: 'Mistubishu', car_model: '2021', car_color: 'Blue', car_num: 'LNM 9844' }
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
