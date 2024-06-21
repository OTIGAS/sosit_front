import Swal from "sweetalert2";
import { languages } from "../Asset/languages";

export function Alert({ entity, response, icon, language }) {
  return Swal.fire({
    title: languages[language].api.entities[entity],
    text: languages[language].api.message[response],
    icon: icon,
    confirmButtonText: "Ok",
  });
}

export async function AlertConfirm({ title, icon, language }) {
  return Swal.fire({
    title: languages[language].alert[title],
    icon: icon,
    showCancelButton: true,
    confirmButtonText: languages[language].alert.confirm,
    cancelButtonText: languages[language].alert.cancel,
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  });
}
