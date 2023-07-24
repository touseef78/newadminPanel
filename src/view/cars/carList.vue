<template>
    <b-card>



        <b-row>
            <div class="col-12 mt-16">
                <b-table :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                    responsive="sm"></b-table>
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


            ],
            items: [
                { isActive: true, name: 'Ali', email: 'ali@gmail.com', mobile: '098712345', car_make: 'Audi', car_model: '2012', car_color: 'white', car_num: 'LEP 1234' },
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
