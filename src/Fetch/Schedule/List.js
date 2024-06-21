import { LIST } from "../../Api/Schedule";
import { Alert } from "../../Helper/sweetAlert";

export async function ScheduleList(token, query, language) {
  try {
    const response = await fetchScheduleListAPI(token, query);
    const responseData = await response.json();

    return handleResponse(language, responseData);
  } catch (error) {
    handleSubmissionError(error);
  }
}

export async function fetchScheduleListAPI(token, query) {
  const { url, options } = LIST(token, query);
  return fetch(url, options);
}

export function handleResponse(language, response) {
  const { failure, error } = response;

  if (failure) {
    Alert({
      entity: "schedule",
      response: failure,
      icon: "error",
      language,
    });
    throw new Error(failure);
  } else if (error) {
    Alert({
      entity: "schedule",
      response: error,
      icon: "warning",
      language,
    });
    throw new Error(error);
  } else {
    return response;
  }
}

export function handleSubmissionError(error) {
  console.error(error);
}
