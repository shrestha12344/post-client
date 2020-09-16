import axios from "axios";

export const fetchPost = async () => {
  try {
    const res = await axios.get('/api/post/all');
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const searchPost = async (data: string) => {
  try {
    const res = await axios.get(`/api/post/search/${data}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createPost = async (data: any) => {
  try {
    const res = await axios.post('/api/post/create', { data });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updatePost = async (data: any) => {
  try {
    const res = await axios.put(`/api/post/update/${data._id}`, { content: data.content });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deletePost = async (data: string) => {
  try {
    const res = await axios.delete(`/api/post/delete/${data}`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};