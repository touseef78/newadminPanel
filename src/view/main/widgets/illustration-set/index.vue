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

        { key: 'name', sortable: true },
        { key: 'mobile', sortable: true },
        { key: 'email', sortable: true },
        { key: 'ref_name', sortable: true },
        { key: 'ref_number', sortable: true },
        { key: 'CNIC', sortable: true },
        { key: 'select_type', sortable: true },
        { key: 'action', sortable: true },


      ],
      items: [
        { isActive: true, name: 'Ali', email: 'ali@gmail.com', mobile: '098712345', ref_name: 'Hannan', ref_number: '098765', CNIC: '35201-1234567-9', select_type: 'empty' },
        { isActive: false, name: 'Awais', email: 'awais@gmail.com', mobile: '098712345', ref_name: 'Asim', ref_number: '3456787', CNIC: '35201-1234567-9', select_type: 'empty' },
        { isActive: false, name: 'Umair', email: 'umair@gmail.com', mobile: '098745', ref_name: 'Qasim', ref_number: '0987654567', CNIC: '35201-1234567-9', select_type: 'empty' },
        { isActive: true, name: 'Taimoor', email: 'taimoor@gmail.com', mobile: '090078601', ref_name: 'Chand', ref_number: '09654567', CNIC: '35201-1234567-9', select_type: 'empty' }
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
