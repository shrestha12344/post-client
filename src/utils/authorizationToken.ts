import axios from "axios";

export const setAuthorizationToken = (token: any): void => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}