import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://backend.getlinked.ai',
    headers: {
        'Content-type': 'application/json',
    },
})

//intercept requests or responses before they are handled by then or catch.
axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    console.log(error.response)
    alert(error.response.data.message)
    });



export default axiosClient;