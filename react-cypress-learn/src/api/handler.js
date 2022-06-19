import axios from "axios";

const Handler = axios.create({baseURL: "/api"});

export default Handler;
