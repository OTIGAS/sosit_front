import { LOGIN } from "../../Api/Entity";
import { Alert } from "../../Helper/sweetAlert";

export async function EntityLogin(data, navigate, language, setLoading) {
  setLoading(true);

  try {
    const response = await fetchEntityLoginAPI(data);
    const responseData = await response.json();

    return handleResponse(language, navigate, responseData);
  } catch (error) {
    handleSubmissionError(error);
    return { data: null, token: null };
  } finally {
    setLoading(false);
  }
}

export async function fetchEntityLoginAPI(data) {
  const { url, options } = LOGIN(data);
  return fetch(url, options);
}

export function handleResponse(language, navigate, response) {
  const { data, token, failure, error } = response;

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
    navigate("/");
    return { data, token };
  }
}

export function handleSubmissionError(error) {
  console.error(error);
}
