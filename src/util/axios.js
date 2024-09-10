import axios from "axios";

export default axios.create({
    BASE_URL: import.meta.env.VITE_API_URL
})