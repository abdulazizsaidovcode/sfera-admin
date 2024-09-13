export const config = {
    headers: {
        Authorization: sessionStorage.getItem('token'),
    }
}

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem('token')