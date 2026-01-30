import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1e05fb680785431f9a77a96587185e3e'
    }
})