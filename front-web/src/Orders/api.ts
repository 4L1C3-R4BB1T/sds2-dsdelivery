import axios from "axios";

const API_URL = 'http://sds2-backend.herokuapp.com/'

export function fetchProducts() {
    return axios(`${API_URL}/products`);
}