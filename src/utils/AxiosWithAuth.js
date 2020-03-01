import axios from "axios";

const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://thereportoftheweek-api.herokuapp.com/reports",
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;