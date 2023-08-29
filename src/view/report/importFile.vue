<template>
    <b-card>
      <!-- filter -->
      <div class="col-12 mt-16">
        <div>
          <b-row class="align-items-center">
            <b-col lg="6" class="my-1 d-flex justify-content-end">
              <input type="file" ref="fileInput" @change="handleFileUpload" />
              <b-button variant="primary" class="mb-8 mr-8" :disabled="loading" @click="submitFile">
                <span v-if="!loading">Import File</span>
                <b-spinner v-if="loading" small></b-spinner>
              </b-button>
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

        handleFileUpload(event) {
      const file = event.target.files[0];
      this.fileToUpload = file;
    },

      
    submitFile() {
      if (this.fileToUpload) {
        this.loading = true;

        const formData = new FormData();
        formData.append("csv_file", this.fileToUpload);
        axios
          .post("/processCSV", formData)
        .then((response) => {
          console.log(response.data);
          this.$bvToast.toast("File added successfully!", {
            title: "Success",
            variant: "success",
            solid: true,
            appendToast: true,
            toaster: "b-toaster-top-right",
            autoHideDelay: 5000,
            variant: "primary", // Background color
          });
          this.loading = false;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.data);
          
          this.loading = false;
        })
        .finally(() => {
            this.loading = false;
            this.fileToUpload = null; // Clear the file input
          });
      }
    },
  },

};
</script>