import axios from 'axios';
import {config} from "@/helpers/token.tsx";

const api = axios.create({
    baseURL: 'http://142.93.106.195:8080',
    headers: {
        'Content-Type': 'application/json',
        ...config.headers
    },
});

export const getData = async (endpoint: string) => {
    const response = await api.get(endpoint);
    return response.data;
};

export const postData = async (endpoint: string, data: any) => {
    const response = await api.post(endpoint, data);
    return response.data;
};

export const putData = async (endpoint: string, data: any) => {
    const response = await api.put(endpoint, data);
    return response.data;
};

export const deleteData = async (endpoint: string) => {
    const response = await api.delete(endpoint);
    return response.data;
};
