import user from "../../Components/Users_list/User/User";

const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

const getById = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
}
const getPost = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
        .then(response => response.json())
}
export const userServices = {
    getAll,
    getById,
    getPost,
}