import axios from "axios";

export function setupApiClient(){

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            secretcode: process.env.REACT_APP_SECRET_CODE
        }
    })

    return api
}