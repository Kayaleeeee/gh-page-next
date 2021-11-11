import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestTransformer,
  AxiosResponse,
} from 'axios';
import { stringify } from 'query-string';
import { camelizeKeys, decamelize, decamelizeKeys } from 'humps';

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    switch (error?.response?.status) {
      case 401:
        // removeAccessToken();
        window.location.assign('/');
        break;
      default:
        break;
    }

    if (error?.response) {
      handleToast(error?.response);
    }

    return Promise.reject(error?.response);
  },
);

axios.defaults.timeout = 5000;

export interface RequestConfig extends AxiosRequestConfig {
  'axios-retry'?: {
    retries: number;
  };
}

const decamelizeThatDontBreaksFile = (object: any): any => {
  if (object && !(object instanceof File)) {
    if (object instanceof Array) {
      return object.map((item) => decamelizeThatDontBreaksFile(item));
    }
    if (object instanceof FormData) {
      let formData = new FormData();
      for (const [key, value] of object.entries()) {
        formData.append(decamelize(key), value);
      }
      return formData;
    }
    if (typeof object === 'object') {
      return Object.keys(object).reduce(
        (acc, next) => ({
          ...acc,
          [decamelize(next, { split: /(?=[A-Z0-9])/ })]:
            decamelizeThatDontBreaksFile(object[next]),
        }),
        {},
      );
    }
  }
  return object;
};

export function request(config: RequestConfig) {
  config.headers = {
    'Content-Type': 'application/json',
    ...config.headers,
  };

  const API_VERSION = `v1`;

  const transformRequest: any = axios.defaults.transformRequest;
  const transformResponse: any = axios.defaults.transformResponse;

  config.baseURL = `${process.env.BUYER_API_END_POINT}${API_VERSION}`;
  config.transformResponse = [
    ...transformResponse,
    (data) => camelizeKeys(data),
  ];
  config.transformRequest = [decamelizeThatDontBreaksFile, ...transformRequest];
  config.paramsSerializer = function (params) {
    return stringify(decamelizeKeys(params));
  };

  return axios(config);
}

export function handleToast(e: AxiosResponse) {
  const { message } = e?.data ?? {};
  if (message) {
    console.log(message);
  }
}
