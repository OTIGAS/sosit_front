import { DELETE } from "../../Api/Time";
import { Alert } from "../../Helper/sweetAlert";

export async function TimeDelete(token, idTime, language) {
  try {
    const response = await fetchTimeDeleteAPI(token, idTime);
    const responseData = await response.json();

    return handleResponse(language, responseData);
  } catch (error) {
    handleSubmissionError(error);
  }
}

export async function fetchTimeDeleteAPI(token, idTime) {
  const { url, options } = DELETE(token, idTime);
  return fetch(url, options);
}

export function handleResponse(language, response) {
  const { message, failure, error } = response;

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
    Alert({
      entity: "time",
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
