import { URL } from "./URL";

const API_URL = URL + "/commitment/";

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

export function FIND(token, { idSchedule, dateCommitment }) {
  return {
    url: `${API_URL}find?id_schedule=${idSchedule}&date_commitment=${dateCommitment}`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function LIST(token, { idSchedule, dateCommitment }) {
  return {
    url: `${API_URL}list?id_schedule=${idSchedule}&date_commitment=${dateCommitment}`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function DELETE(token, idTime) {
  return {
    url: API_URL + "delete?id_times=" + idTime,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
