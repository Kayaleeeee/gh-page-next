import { request } from '../utils/request';

export const fetchProductList = () => {
  // return axios.get('https://api.lienmall.com/api/v1/products');
  return request({
    url: '/products',
    method: 'GET',
  });
};
