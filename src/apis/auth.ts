import axios from "axios";

export const signin = async (data: any) => {
  try {
    const res = await axios.post('/api/auth/signin', { data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signup = async (data: any) => {
  try {
    const res = await axios.post('/api/auth/signup', { data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const googleAuth = async (data: any) => {
  try {
    const res = await axios.post('/api/auth/googleauth', { data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
