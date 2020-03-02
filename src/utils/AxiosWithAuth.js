import axios from "axios";

const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;