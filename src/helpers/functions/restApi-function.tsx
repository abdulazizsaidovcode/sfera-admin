import axios from 'axios';
import {toastMessage} from "@/helpers/functions/toastMessage.tsx";
import {useMutation} from "react-query";
import toast from "react-hot-toast";

// =============react query global function==================
export interface UseGlobalResponse<T> {
    loading: boolean;
    error: any;
    response: T | any | undefined;
    globalDataFunc: () => void;
}

export function useGlobalRequest<T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: T,
    config?: any
): UseGlobalResponse<T> {
    const mutation = useMutation({
        mutationFn: async () => {
            let res;
            switch (method) {
                case 'GET':
                    res = await axios.get(url, config || {});
                    break;
                case 'POST':
                    res = await axios.post(url, data || {}, config || {});
                    break;
                case 'PUT':
                    res = await axios.put(url, data || {}, config || {});
                    break;
                case 'DELETE':
                    res = await axios.delete(url, config || {});
                    break;
                default:
                    return toast.error('Method xaltolik yuz berdi!');
            }
            if (res.data.error) toastMessage(res.data.error.code, res.data.error.message);
            return res.data.data;
        },
        onError: (error: any) => console.log(error)
    });

    return {
        loading: mutation.status === 'loading',
        error: mutation.error,
        response: mutation.data,
        globalDataFunc: mutation.mutateAsync,
    };
}


// ========================ruchnoy global function========================
// export const apiRequest = async (
//     url: string,
//     method: 'GET' | 'POST' | 'PUT' | 'DELETE',
//     body?: any,
//     headers: Record<string, string> = {'Content-Type': 'application/json'}
// ) => {
//     const config: AxiosRequestConfig = {
//         url,
//         method,
//         headers,
//         data: body ? body : undefined,
//     };
//
//     try {
//         const response = await axios(config);
//         console.log(response)
//
//         return response.data;
//     } catch (error) {
//         console.error('API request failed:', error);
//     }
// };