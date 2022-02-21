import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll : () =>axiosService.get(urls.posts).then(value => value.data),
    getById : (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getComment : (idComm) => axiosService.get(`${urls.posts}/${idComm}${urls.comments}`).then(value => value.data)
}