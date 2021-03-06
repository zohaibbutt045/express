import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);

    alert("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export function setJwtHeader(jwt) {
  // laazmi
  // we'll set this in loginUserServices where all the operations on jwt are working
  axios.defaults.headers.common["Authorization"] = jwt; // so we can change it easily in other projects
}

const jwtToken =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWY4YWE3ZjEwM2I5MTE0Njk4YzE0NTE0IiwiZW1haWwiOiJ0ZXN0MSIsInVzZXJuYW1lIjoidGVzdDEiLCJ1c2VyTGV2ZWwiOiJIT0QiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTYwMzk3MzcxMCwiZXhwIjoxNjAzOTc3MzEwfQ.1uER4MUXNmR7qiovHO8P8D3O4as2OO5qpEWxj4QaL0k"

setJwtHeader(jwtToken);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwtHeader,
  jwtToken,
};
