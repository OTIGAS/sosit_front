import { URL } from "./URL";

const API_URL = URL + "/schedule/";

export function CREATE(token, body) {
  return {
    url: API_URL + "create",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function LIST(
  token,
  { city, nameCompany, nameSchedule, serviceSchedule }
) {
  let query = "";

  if (city || nameCompany || nameSchedule || serviceSchedule) {
    query = "?";
    if (city) query += `city=${city}&`;
    if (nameCompany) query += `name_company=${nameCompany}&`;
    if (nameSchedule) query += `name_schedule=${nameSchedule}&`;
    if (serviceSchedule) query += `service_schedule=${serviceSchedule}&`;
    query = query.slice(0, -1);
  }

  return {
    url: API_URL + "list" + query,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function UPDATE(token, idSchedule, body) {
  return {
    url: API_URL + "update?id_schedule=" + idSchedule,
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

export function DELETE(token, idSchedule) {
  return {
    url: API_URL + "delete?id_schedule=" + idSchedule,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
