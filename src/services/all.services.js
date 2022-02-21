import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const allServices = {
    getAllUsers : () => axiosService.get(urls.users).then(value => value.data),
    getAllPost : () => axiosService.get(urls.posts).then(value => value.data),
    getAllComments : () => axiosService.get(urls.comments).then(value => value.data)
}