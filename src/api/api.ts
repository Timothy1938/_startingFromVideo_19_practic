import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ad22a6a2-a580-4182-9dc6-e66a52029848'
    }

})
export const usersAPI = {
    getUsers(currentPage: any = 1, pageSize: any = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: any) => response.data
            )
    }
}
/*export const getUsers = (currentPage:any = 1, pageSize:any = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response:any)=>response.data
        )
}*/
/*export const getUsers2 = (currentPage:any = 1, pageSize:any = 10) => {
    return instance.post(`follow/' + ${u.id}`)
        .then((response:any)=>response.data
        )
}*/



