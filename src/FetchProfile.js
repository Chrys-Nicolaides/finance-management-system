// GET profile request

import { request } from "./Request";

export const FetchProfile = async (id) => {
  request("GET", `/profile/${id}`)
    .then((response) => response.json())
    .then((result) => {
      console.log("GET profile result", result);
    })
    .catch((error) => console.log("GET profile error", error));
};

export default FetchProfile;
