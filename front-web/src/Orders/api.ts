import axios from "axios";

const API_URL = 'https://backend-sds2.herokuapp.com'

export function fetchProducts() {
    return axios(`${API_URL}/products`);
}