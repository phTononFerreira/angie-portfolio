import axios from "axios";

export function setupApiClient(){

    const api = axios.create({
        baseURL: 'https://angie-portfolio-backend-production.up.railway.app',
        headers: {
            secretcode: "AngelaLinda"
        }
    })

    return api
}