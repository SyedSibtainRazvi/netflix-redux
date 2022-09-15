import baseURL from "./baseURL";
import requests from "./requests";

export const fetchTrending = async () => {
    const response = await baseURL.get(`${requests.requestTrending}`);
    console.log(response?.data?.results)
    return response?.data?.results
}
console.log("Hello");