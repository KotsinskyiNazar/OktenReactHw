import {carAxiosService} from "./car.axios.service";

import {urls} from "../configs/cars";


export const carServices = {

    getAllCars : () => carAxiosService.get(urls.cars).then(value => value.data)

}

