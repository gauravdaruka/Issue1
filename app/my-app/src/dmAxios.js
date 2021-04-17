import axios from 'axios';

const dmAxios = axios.create({
  baseURL: 'https://localhost:44393/api/',
  timeout: 2000,
  
  withCredentials: true,
  // mode: 'no-cors',

  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  // },
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // },
  // // contentType: 'application/json',
  // crossOrigin: true,
  // accessControlAllowOrigin: true,
  // credentials: 'same-origin',
  // allowOrigin: true,
});

// dmAxios.defaults.withCredentials = true;

export default dmAxios;
