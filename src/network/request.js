import axios from 'axios'

export function request(config) {
  // 创建axios的实例
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器  
  // 2.1请求拦截
  instance1.interceptors.request.use(config => {
    return config;
  }, err => {
    // console.log(err);
  })

  //2.2响应拦截
  instance1.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    // console.log(err);
  })

  // 3.发送真正的网络请求
  // instance1(config)的返回值是promise
  return instance1(config)
}