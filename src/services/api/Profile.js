import { request } from "./Request";

export const FetchProfile = async (id, accessToken) => {
  const headers = new Headers();

  headers.set("Authorization", `Bearer ${accessToken}`);

  return request("GET", `/profile/${id}`, {}, headers)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("GET profile error:", error));
};

export const UpdateProfile = async (id, body) => {
  request("PUT", `/profile/${id}`, body)
    .then((response) => response.json())
    .then((result) => {
      console.log("PUT profile result:", result);
    })
    .catch((error) => console.log("PUT profile error:", error));
};

export const FetchProfileEmail = async (email, accessToken) => {
  const headers = new Headers();

  headers.set("Authorization", `Bearer ${accessToken}`);

  return request("GET", `/profile/by_email/${email}`, "", headers)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      let body = {
        email: `${email}`,
      };
      return CreateProfile(body, accessToken);
    });
};

export const CreateProfile = async (body, accessToken) => {
  const headers = new Headers();

  headers.set("Authorization", `Bearer ${accessToken}`);

  return request("POST", `/profile`, body, headers)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("POST profile error:", error));
};

// reports

export const FetchProfileCategories = async (id, accessToken) => {
  const headers = new Headers();

  headers.set("Authorization", `Bearer ${accessToken}`);

  return request(
    "GET",
    `/profile/${id}/reports/expenses_by_category`,
    {},
    headers
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) =>
      console.log("GET profile expenses categories error:", error)
    );
};

export const FetchProfileExpenses = async (id, accessToken) => {
  const headers = new Headers();

  headers.set("Authorization", `Bearer ${accessToken}`);

  return request("GET", `/profile/${id}/reports/income_expenses`, {}, headers)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) =>
      console.log("GET profile income & expenses error:", error)
    );
};
