import { LIST } from "../../Api/Commitment";
import { Alert } from "../../Helper/sweetAlert";

export async function CommitmentList(token, query, language) {
  try {
    const response = await fetchCommitmentListAPI(token, query);
    const responseData = await response.json();

    return handleResponse(language, responseData);
  } catch (error) {
    handleSubmissionError(error);
  }
}

export async function fetchCommitmentListAPI(token, query) {
  const { url, options } = LIST(token, query);
  return fetch(url, options);
}

export function handleResponse(language, response) {
  const { failure, error } = response;

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
    return response;
  }
}

export function handleSubmissionError(error) {
  console.error(error);
}
