import { LIST } from "../../Api/Time";
import { Alert } from "../../Helper/sweetAlert";

export async function TimeList(token, idSchedule, dayWeek, language) {
  try {
    const response = await fetchTimeListAPI(token, idSchedule, dayWeek);
    const responseData = await response.json();

    return handleResponse(language, responseData);
  } catch (error) {
    handleSubmissionError(error);
  }
}

export async function fetchTimeListAPI(token, idSchedule, dayWeek) {
  const { url, options } = LIST(token, idSchedule, dayWeek);
  return fetch(url, options);
}

export function handleResponse(language, response) {
  const { failure, error } = response;

  if (failure) {
    Alert({
      entity: "time",
      response: failure,
      icon: "error",
      language,
    });
    throw new Error(failure);
  } else if (error) {
    Alert({
      entity: "time",
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
