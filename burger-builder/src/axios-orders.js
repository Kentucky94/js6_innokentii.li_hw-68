import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://js6-innokentii-li-burger.firebaseio.com/'
});

export default axiosOrders;
