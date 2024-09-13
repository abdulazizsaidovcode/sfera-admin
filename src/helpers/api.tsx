import axios, {AxiosRequestConfig} from 'axios';
import {toastMessage} from "@/helpers/functions/toastMessage.tsx";
import {useMutation} from "react-query";

export const baseURL: string = 'http://142.93.106.195:8080/'

// =============LOGIN=============
export const authLogin: string = `${baseURL}auth/login`




// =============react query global function post u/n==================
export interface UsePostResponse<T> {
    loading: boolean;
    error: any;
    response: any;
    postData: () => void;
}

export function usePost<T>(url: string, data: T, config?: any): UsePostResponse<T> {
    const mutation = useMutation({
        mutationFn: async () => {
            const res = await axios.post(url, data, config ? config : {});
            if (res.data.error) toastMessage(res.data.error.code, res.data.error.message);
            return res.data.data;
        },
        onError: (error: any) => {
            console.log(error)
        },
    });

    return {
        loading: mutation.status === 'loading',
        error: mutation.error,
        response: mutation.data,
        postData: mutation.mutateAsync,
    };
}


// ========================ruchnoy global function========================
export const apiRequest = async (
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
    headers: Record<string, string> = {'Content-Type': 'application/json'}
) => {
    const config: AxiosRequestConfig = {
        url,
        method,
        headers,
        data: body ? body : undefined,
    };

    try {
        const response = await axios(config);
        console.log(response)

        return response.data;
    } catch (error) {
        console.error('API request failed:', error);
    }
};
