import axios from "axios";

import baseURL from "../configs/cars";

const carAxiosService = axios.create({baseURL})

export {carAxiosService}