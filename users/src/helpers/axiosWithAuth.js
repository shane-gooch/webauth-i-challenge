import axios from "axios";

export const axiosWithAuth = (username, password) => {
  return axios.create({
    headers: {
      username: `React App`,
      password: `1234`
    }
  });
};
