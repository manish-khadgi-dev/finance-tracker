import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1";
const userApi = baseUrl + "/user";

// ======================= User api
export const postUser = async (obj) => {
  try {
    const { data } = await axios.post(userApi, obj);
    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};

//========================= Transaction API
