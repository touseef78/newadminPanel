import axios from "axios";

axios.defaults.baseURL = "http://192.168.100.17:8001/api/"; // change this if you want to use a different url for APIs
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
