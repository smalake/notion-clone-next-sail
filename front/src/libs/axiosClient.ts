import Axios from 'axios'
 
const axiosClient = Axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
})
 
export default axiosClient