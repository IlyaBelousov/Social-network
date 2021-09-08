import axios from 'axios';
import {UserDataType} from '../redux/users-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '4e9f6c7c-553d-4c3d-8aa0-0bbb01a71677'
    }
});
export const userAPI = {
    GetUsers: (currentPage: number, pageSize: number) => {
        return instance.get<{ items: UserDataType[], totalCount: number }>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    Follow: (id: number) => {
        return instance.post(`follow/${id}`);
    },
    UnFollow: (id: number) => {
        return instance.delete(`follow/${id}`);
    }
};
export const profileAPI = {
    GetUserProfile: (userId: number) => {
        return instance.get(`profile/${userId}`);
    }
};
export const authAPI = {
    me: () => {
        return instance.get<{ data: { id: number, email: string, login: string}, resultCode: number  }>('auth/me');
    }
};


