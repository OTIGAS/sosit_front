import { PROFILE } from "../../Api/Entity";
import { Alert } from "../../Helper/sweetAlert";

export async function ProfileToken(token, language, userLogout) {
  try {
    const response = await fetchProfileTokenAPI(token);
    const responseData = await response.json();

    return handleResponse(language, responseData);
  } catch (error) {
    handleSubmissionError(userLogout, error);
  }
}

export async function fetchProfileTokenAPI(token) {
  const { url, options } = PROFILE(token);
  return fetch(url, options);
}

export function handleResponse(language, response) {
  const { data, failure, error } = response;

  if (failure) {
    Alert({
      entity: "entity",
      response: failure,
      icon: "error",
      language,
    });
    throw new Error(failure);
  } else if (error) {
    Alert({
      entity: "entity",
      response: error,
      icon: "warning",
      language,
    });
    throw new Error(error);
  } else {
    return data;
  }
}

export function handleSubmissionError(userLogout, error) {
  console.error(error);
  userLogout();
}
