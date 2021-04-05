import { request } from "./Request";

export const FetchCategories = async (id) => {
  request("GET", `/profile/${id}/categories`)
    .then((response) => response.json())
    .then((result) => {
      console.log("GET categories result:", result);
    })
    .catch((error) => console.log("GET categories error:", error));
};

export const CreateCategories = async (id, body) => {
  request("POST", `/profile/${id}/categories`, body)
    .then((response) => response.json())
    .then((result) => {
      console.log("POST create category result:", result);
    })
    .catch((error) => console.log("POST create category error:", error));
};

export const UpdateCategories = async (id, category_id, body) => {
  request("PUT", `/profile/${id}/categories/${category_id}`, body)
    .then((response) => response.json())
    .then((result) => {
      console.log("PUT update category result:", result);
    })
    .catch((error) => console.log("PUT update category error:", error));
};

export const DeleteCategories = async (id, category_id) => {
  request("DELETE", `/profile/${id}/categories/${category_id}`)
    .then((response) => response.json())
    .then((result) => {
      console.log("DELETE category result:", result);
    })
    .catch((error) => console.log("DELETE category error:", error));
};
