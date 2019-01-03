import axios from 'axios'
    if(process.env.NODE_ENV !== 'production') {
        axios.defaults.baseURL = 'http://192.168.1.112:8002/salesman/';                 //webpack-dev 的端口
    }else{
        axios.defaults.baseURL = 'http://h5-mng-api.51nabei.com/salesman/';            // 正式 后端API地址，后端API要设置，要支持生产环境的域访问
    }
    // axios.defaults.timeout = 10000;


// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    });

export default axios;
