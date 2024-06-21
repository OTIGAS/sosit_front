import { UPDATE_IMAGE } from "../../Api/Entity";
import { Alert } from "../../Helper/sweetAlert";

export async function ImageUpdate(token, file, entity, language) {
  try {
    const response = await fetchImageAPI(token, file);
    const responseData = await response.json();

    return handleResponse(language, responseData, entity);
  } catch (error) {
    handleSubmissionError(error);
  }
}

export async function fetchImageAPI(token, file) {
  const { url, options } = UPDATE_IMAGE(token, file);
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
  }
}

export function handleSubmissionError(error) {
  console.error(error);
}
