import { CREATE } from "../../Api/Schedule";
import { Alert } from "../../Helper/sweetAlert";

export async function ScheduleCreate(token, body, language) {
  try {
    const response = await fetchScheduleCreateAPI(token, body);
    const responseData = await response.json();

    return handleResponse(language, responseData);
  } catch (error) {
    handleSubmissionError(error);
  }
}

export async function fetchScheduleCreateAPI(token, requestBody) {
  const { url, options } = CREATE(token, requestBody);
  return fetch(url, options);
}

export function handleResponse(language, response) {
  const { message, failure, error } = response;

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
    Alert({
      entity: "schedule",
      response: message,
      icon: "success",
      language,
    });
    return true;
  }
}

export function handleSubmissionError(error) {
  console.error(error);
  return false;
}
