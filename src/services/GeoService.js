import axios from "axios";

const API_KEY = 'AIzaSyAQfVUk4CHwfLcp1CWGmPN4hNhp4Mo2Xb4'
const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?language=en';



async function query(str) {
    try {
        const res = await axios.get(`${BASE_URL}&address=${str}&key=${API_KEY}`);
        return res.data.results;
    }
    catch (err) {
        if (err.response.status === 401) {
            // router.push('/');
        }
    }

}

export const geoService = {
   
    query
}


