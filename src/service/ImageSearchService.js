import axios from "axios";

const KEY = "5Zr9BhQn1Im17FI1tCNKbMKO4GKSy8Ji5SvqAExrwiU";
const baseURL = "https://api.unsplash.com/search/photos"

export const ImageSearchService = {
    getImages : function(search) {
        return axios.get(`${baseURL}`,{
            params: {
                query: search, 
                per_page: 20, 
                client_id: KEY
            }
        })
    }
}