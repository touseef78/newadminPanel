
<template>
    <b-card>
        <!-- filter  -->
        <div class="col-12 mt-16">
            <div>
                <b-row class="align-items-center">
                    <b-col lg="6" class="my-1 d-flex justify-content-end">
                        <b-button type="submit" variant="primary" class="mb-8 mr-8">Import File</b-button>
                    </b-col>
                </b-row>
            </div>
        </div>
        <!-- filter end -->
    </b-card>
</template>

<script>
import {
    BRow,
    BCol,
    BCard,
    BButton,
    BTable,
    BFormGroup,
    BInputGroup,
    BFormInput,
    BFormSelect,
    BPagination,
    BInputGroupAppend,
    BSpinner,
} from "bootstrap-vue";
import axios from "axios";
import Papa from "papaparse";

// new code 
// import code from "./code";   
// new code end
export default {
    data() {
        return {
            perPage: 8,
            currentPage: 1,
            sortBy: "age",
            sortDesc: false,
            filter: "", // Define filter property for search functionality
            totalRows: 0, // Initialize totalRows to 0
            showDeleteConfirmation: false,
            itemIdToDelete: null,
            loading: false,

        };
    },
    components: {
        BRow,
        BCol,
        BCard,
        BButton,
        BTable,
        BFormGroup,
        BInputGroup,
        BFormInput,
        BFormSelect,
        BPagination,
        BInputGroupAppend,
        BSpinner,

    },

    methods: {
      

    },
};
</script>