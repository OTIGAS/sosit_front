import { DELETE } from "../../Api/Commitment";
import { Alert } from "../../Helper/sweetAlert";

export async function CommitmentDelete(token, idCommitment, language) {
  try {
    const response = await fetchCommitmentDeleteAPI(token, idCommitment);
    const responseData = await response.json();

    return handleResponse(language, responseData);
  } catch (error) {
    handleSubmissionError(error);
  }
}

export async function fetchCommitmentDeleteAPI(token, idCommitment) {
  const { url, options } = DELETE(token, idCommitment);
  return fetch(url, options);
}

export function handleResponse(language, response) {
  const { message, failure, error } = response;

  if (failure) {
    Alert({
      entity: "commitment",
      response: failure,
      icon: "error",
      language,
    });
    throw new Error(failure);
  } else if (error) {
    Alert({
      entity: "commitment",
      response: error,
      icon: "warning",
      language,
    });
    throw new Error(error);
  } else {
    Alert({
      entity: "commitment",
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
