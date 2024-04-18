// import axios from "axios";

// axios.defaults.baseURL = "https://bigways.singsavatech.com/api/"; // change this if you want to use a different url for APIs
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Or specify your backend URL instead of *
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

import axios from "axios";

axios.defaults.baseURL = "https://backendbigways.singsavatech.com/api/"; // change this if you want to use a different url for APIs
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

