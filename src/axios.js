import axios from "axios";

axios.defaults.baseURL = "https://backend.cionax.com/api/"; // change this if you want to use a different url for APIs
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');




//   <div style="background-color: rgb(97,116,152); height:32px; border-radius:4px;">
//                     <h5 style="color: rgb(223,227,238); margin-left:5px; font-weight:bold; ">Company Information</h5>
//                 </div>
//                 <div class="row">
//                     <div class="col-4">

//                         <b-form-group id="input-group-1" label="Company Name:" label-for="company_name">
//                             <b-form-input id="company_name" type="text" placeholder="Enter comapany name"
//                                 required></b-form-input>
//                         </b-form-group>
//                     </div>
//                     <div class="col-4">
//                         <b-form-group id="input-group-1" label=" Owner Name:" label-for="owner_name">
//                             <b-form-input id="owner_name" type="text" placeholder="Enter owner name"
//                                 required></b-form-input>
//                         </b-form-group>

//                     </div>
//                     <div class="col-4">

//                         <b-form-group id="input-group-1" label=" Owner Number:" label-for="owner_number">
//                             <b-form-input id="owner_number" type="text" placeholder="Enter owner number"
//                                 required></b-form-input>
//                         </b-form-group>
//                     </div>

//                 </div>

//                 <div class="row">
//                     <div class="col-4">

//                         <b-form-group id="input-group-1" label="Comapany Document:" label-for="company_document">

//                             <div style="margin-left: 3px; margin-bottom:15px;">
//                                 <!-- Input field to upload image -->
//                                 <input type="file" accept="image/*">

//                                 <!-- Image preview -->
//                                 <!-- <div v-if="imageUrl">
//                             <img :src="imageUrl" alt="Uploaded Image" style="max-width: 300px; max-height: 300px;">
//                         </div> -->
//                             </div>
//                         </b-form-group>



//                     </div>



//                 </div>





//   company_name: "",
//             owner_name: "",
//             owner_number: "",
//             company_document: "",