import axios from "axios";
const _id = localStorage.getItem("user");

export const fetchProfile = async (data: any) => {
  try {
    const res = await axios.post('/api/profile', { data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateProfile = async (data: any) => {
  try {
    const res = await axios.put(`/api/profile/update/${_id}`, data);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};