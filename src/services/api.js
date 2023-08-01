import axios from "axios";

export function setupApiClient(){

    const api = axios.create({
        baseURL: 'https://angie-portfolio-backend.vercel.app',
        headers: {
            secretcode: process.env.REACT_APP_SECRET_CODE
        }
    })

    return api
}