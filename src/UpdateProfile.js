// PUT profile request

import { request } from "./Request";

const UpdateProfile = async (id, body) => {
  request("PUT", `/profile/${id}`, body)
    .then((response) => response.json())
    .then((result) => {
      console.log("PUT result", result);
    })
    .catch((error) => console.log("PUT profile error", error));
};

export default UpdateProfile;
