import { URL } from "./URL";

const API_URL = URL + "/entity/";

export function CREATE(body) {
  return {
    url: API_URL + "create",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function LOGIN(body) {
  return {
    url: API_URL + "login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PROFILE(token) {
  return {
    url: API_URL + "profile",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_LIST({ idCompany, userRole }) {
  let query = "";

  if (idCompany || userRole) {
    query = "?";
    if (idCompany) query += `id_company=${idCompany}&`;
    if (userRole) query += `user_role=${userRole}&`;
    query = query.slice(0, -1);
  }

  return {
    url: API_URL + "list" + query,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function UPDATE(token, body) {
  return {
    url: API_URL + "update",
    options: {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function UPDATE_IMAGE(token, file) {
  const formData = new FormData();
  formData.append("image", file);
  return {
    url: API_URL + "image",
    options: {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}
