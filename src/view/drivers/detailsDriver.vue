<template>
  <b-col cols="12" xl="11">
    <b-card id="invoice" class="card border-0 hp-invoice-card">
      <b-row align-h="between">
        <b-col cols="12" lg="6">
          <div class="col-lg-12 col-12" style="display: flex;">
            <b-form-group id="input-group-2" label="Profile Picture:" label-for="profile_picture">
              <div style="margin-left: 3px; margin-bottom: 15px;">
                <img :src="'https://backend.cionax.com/' + profile_picture
                      " alt="Profile Picture" width="100px;" height="100px;" style="border-radius: 50%;" />
              </div>

            </b-form-group>
            <div cols="12" style="float: right; margin-top:10px">
              <p :style="{ fontSize: textSizes, marginLeft: marginLeft, marginTop: marginTop }"> <b>Name:</b>{{ name }} {{ last_name }}
              </p>
              <p v-if="company_name_own || editedUser.company" :style="{ fontSize: textSizes, marginLeft: marginLeft, marginTop: marginTop, }">
  <b>Company name:</b>
  {{ company_name_own || (editedUser.company ? editedUser.company.company_name : '') }}
</p>
              <p :style="{ fontSize: textSizes, marginLeft: marginLeft, marginTop: marginTop, display: display }">
                <b>Contact Number:</b>
                {{ mobile }}
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="4" class="text-left text-sm-right hp-print-info">

          <p>Joining Date: {{ joining_date }}</p>
        </b-col>
      </b-row>

      <div class="divider"></div>
      <b-row>
  <b-col cols="12"
    style="margin-top: 10px; margin-left:5px; display:flex;text-align:center;justify-content:center;align-item:center;">

    <p v-if="selectedOption" :style="{ fontSize: textSize, marginLeft: marginLeft, marginTop: marginTop }">
  <b>Salary Type: </b> {{ selectedOption }}
</p>

    <p v-if="salary_fix !== null" :style="{ fontSize: textSize, marginLeft: marginLeft, marginTop: marginTop }">
      <b>Amount:</b> {{ salary_fix }}
    </p>

    <p v-if="salary_commission !== null" :style="{ fontSize: textSize, marginLeft: marginLeft, marginTop: marginTop }">
      <b>Amount:</b> {{ salary_commission }}
    </p>

    <p v-if="hourly_enter_amount !== null" :style="{ fontSize: textSize, marginLeft: marginLeft, marginTop: marginTop }">
      <b>Amount:</b> {{ hourly_enter_amount }}
    </p>

    <p v-if="status" :style="{ fontSize: textSize, marginLeft: marginLeft, marginTop: marginTop }">
      <b>Status:</b> {{ status }}
    </p>

  </b-col>
</b-row>

      <div class="divider"></div>
      <b-row>
        <b-col cols="12" style="margin-top: 20px;">
          <b-table-simple small caption-top responsive borderless>
            <b-thead>
              <b-tr class="text-center"> <!-- Add text-center class here -->
                <b-button @click="vehicle" variant="primary" class="mb-8 mr-8" style="margin-top: 10px;">
                <span><b>See Vehicle</b></span>
                  </b-button>

                  <b-button @click="expense" variant="primary" class="mb-8 mr-8" style="margin-top: 10px;">
                <span><b> Expense</b></span>
                  </b-button>
                  <b-button @click="driverReports" variant="primary" class="mb-8 mr-8" style="margin-top: 10px;">
                <span><b> Report</b></span>
                  </b-button>

                  <b-button @click="driverInvoices" variant="primary" class="mb-8 mr-8" style="margin-top: 10px;">
                <span><b> Invoice</b></span>
                  </b-button>

                  <b-button @click="editprofile" variant="primary" class="mb-8 mr-8" style="margin-top: 10px;">
                <span><b> Edit Profile</b></span>
                  </b-button>

                <b-button @click="driverEarningReportlists" variant="primary" class="mb-8 mr-8" style="margin-top: 10px;">
                <span><b> Earning Report</b></span>
                  </b-button>

                <b-button @click="driverEfficiencyReports" variant="primary" class="mb-8 mr-8"  style="margin-top: 10px;">
                <span><b> Efficiency Report</b></span>
                  </b-button>

                <!-- Repeat the same structure for other buttons -->
                <b-button @click="driverMaintenances" variant="primary" class="mb-8 mr-8" style="margin-top: 10px;">
                <span><b>Vehicle Maintenance</b></span>
                  </b-button>
              </b-tr>
            </b-thead>
          </b-table-simple>
        </b-col>

      </b-row>

      <!-- <div class="divider"></div> -->

    </b-card>
  </b-col>
</template>

<script>
import {
  BRow,
  BLink,
  BButton,
  BCol,
  BTableSimple,
  BThead,
  BTbody,
  BTr,
  BTh,
  BTd,
  BCard,
} from "bootstrap-vue";
import axios from "axios";

export default {
  data() {
    return {
      textSize: '16px', // set your desired font size
      marginLeft: '20px', // set your desired margin left
      marginTop: '5px',
      textSizes: '11px',
      display: 'flex',
      //  profile_picture: 'assets/img/logo/car.png', 

      name: "",
      mobile: "",
      gender: "",
      last_name: '',
      profile_picture: "",
      vehicle_company: "",
      salary_fix: "",
      joining_date: '',
      selectedOption:'',
      status:'',
      salary_commission_exclusive:'',
      hourly_enter_amount:'',
      // company_name:'',
      company_name_own:'',


    };

  },

  components: {
    BRow,
    BLink,
    BButton,
    BCol,
    BTableSimple,
    BThead,
    BTbody,
    BTr,
    BTh,
    BTd,
    BCard,
  },

  
  created() {
    this.idFromUrl = this.$route.params.id;

    // Load the clients data when the component is created
    axios
      .get("vehicle")
      .then((response) => {
        this.vehicles = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    const userId = this.$route.params.id;
    axios
      .get(`drivers/${userId}`)
      .then((response) => {
        this.editedUser = response.data.data;
        // Set the data properties with values from editedUser

        this.salary_commission_exclusive = this.editedUser.salary_commission_exclusive;
        this.name = this.editedUser.name;
        this.last_name = this.editedUser.last_name;
        this.mobile = this.editedUser.mobile;
        this.joining_date = this.editedUser.joining_date;
        this.profile_picture = this.editedUser.profile_picture;
        this.salary_commission = this.editedUser.salary_commission;
        this.salary_fix = this.editedUser.salary_fix;
        this.hourly_enter_amount = this.editedUser.hourly_enter_amount;
        this.company_name_own = this.editedUser.company_name_own;
        this.owner_name = this.editedUser.owner_name;
        this.vehicle_company = this.editedUser.vehicle_company;
        this.vehicle_image = this.editedUser.vehicle_image;
        this.total_number_hour = this.editedUser.total_number_hour;
        this.status = this.editedUser.status;
        this.type = this.editedUser.type;
        this.vehicle_id = this.editedUser.vehicle_id;
        this.vehicle_id = this.editedUser.vehicle_id;
        if (this.editedUser.company && this.editedUser.company.company_name) {
        this.company_name = this.editedUser.company.company_name;
      }        // Depending on the selected option, set the appropriate salary value
        if (this.editedUser.salary_fix !== null) {
          this.selectedOption = "Fix";
        } else if (this.editedUser.salary_commission !== null) {
          this.selectedOption = "Commission";
        } else if (this.editedUser.hourly_enter_amount !== null) {
          this.selectedOption = "Hourly Enter Amount";
        }

        // ... and so on for other properties ...
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  },

  methods: {
    showMsgBoxOne() {
      debugger;
    },
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

    onProfilePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Set the selected file to the data property
        this.profile_picture = file;
      }
    },

    vehicle() {
      this.$router.push({ name: 'vehicleID', params: { id: this.vehicle_id } });
},

expense() {
      this.$router.push({ name: 'droverExpnse', params: { id: this.idFromUrl } });
},

driverReports() {
      this.$router.push({ name: 'driverReport', params: { id: this.idFromUrl } });
},

driverInvoices() {
      this.$router.push({ name: 'driverInvoice', params: { id: this.idFromUrl } });
},

driverEfficiencyReports() {
      this.$router.push({ name: 'driverEfficiencyReport', params: { id: this.idFromUrl } });
},

driverMaintenances() {
      this.$router.push({ name: 'driverMaintenance', params: { id: this.vehicle_id } });
},

editprofile() {
      this.$router.push({ name: 'editDrivers', params: { id: this.idFromUrl } });
},


driverEarningReportlists() {
    this.$router.push({
        name: 'driverEarningReportlist',
        params: {
            name: this.name,
            last_name: this.last_name
        }
    });
},

    codeClick() {
      this.codeActive = !this.codeActive;
    },

    saveOwnCar() {
      this.showModal = false;
    },
  },
};
</script>