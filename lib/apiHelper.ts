import axios from 'axios';

// Axios Client
const client = axios.create({
  baseURL: process.env.NEXY_PUBLIC_BASE_URL,
});

// GET Request Wrapper
export const get = async (url: string, params = {}) => {
  try {
    const res = await client.get(url, params);
    return res.data;
  } catch (error: any) {
    console.log(error);

    throw new Error(error);
  }
};
