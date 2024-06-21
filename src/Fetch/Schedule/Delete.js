import { DELETE } from "../../Api/Schedule";
import { Alert } from "../../Helper/sweetAlert";

export async function ScheduleDelete(token, idSchedule, language) {
  try {
    const response = await fetchScheduleDeleteAPI(token, idSchedule);
    const responseData = await response.json();

    return handleResponse(language, responseData);
  } catch (error) {
    handleSubmissionError(error);
  }
}

export async function fetchScheduleDeleteAPI(token, idSchedule) {
  const { url, options } = DELETE(token, idSchedule);
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
