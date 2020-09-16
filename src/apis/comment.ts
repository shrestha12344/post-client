import axios from "axios";
const _id = localStorage.getItem("user");

export const fetchComment = async () => {
  try {
    const res = await axios.get('/api/comment/all');
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createComment = async (data: any) => {
  try {
    const res = await axios.post('/api/comment/create', { ...data, user: _id });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}