import axios from 'axios';

const axiosMain = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? '/api/v1' : process.env.REACT_APP_END_POINT_URL_PROD,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosMain;
