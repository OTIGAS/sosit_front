import { UPDATE } from "../../Api/Entity";
import { Alert } from "../../Helper/sweetAlert";

export async function EntityUpdate(token, body, language) {
  try {
    const entity = body?.credential?.profile;

    const response = await fetchEntityUpdateAPI(token, body);
    const responseData = await response.json();

    return handleResponse(language, responseData, entity);
  } catch (error) {
    handleSubmissionError(error);
  }
}

export async function fetchEntityUpdateAPI(token, requestBody) {
  const { url, options } = UPDATE(token, requestBody);
  return fetch(url, options);
}

export function handleResponse(language, response, entity) {
  const { message, failure, error } = response;

  if (failure) {
    Alert({
      entity: entity,
      response: failure,
      icon: "error",
      language,
    });
    throw new Error(failure);
  } else if (error) {
    Alert({
      entity: entity,
      response: error,
      icon: "warning",
      language,
    });
    throw new Error(error);
  } else {
    Alert({
      entity: entity,
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
