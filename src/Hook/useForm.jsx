import { useState } from "react";

const validations = {
  cnpj: {
    regex: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
    message: "CNPJ inválido. Formato esperado: 00.000.000/0000-00",
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Email inválido.",
  },
  password: {
    regex: /^.{6,}$/,
    message: "A senha deve ter no mínimo 6 caracteres.",
  },
  phone: {
    regex: /^(?:\(\d{2}\)\s?)?\d{4,5}-?\d{4}$/,
    message:
      "Número de telefone inválido. Formato esperado: (11) 98765-4321 ou 11987654321",
  },
  postalCode: {
    regex: /^\d{5}-\d{3}$/,
    message: "CEP inválido. Formato esperado: 00000-000",
  },
  birthDate: {
    regex: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    message: "Data de nascimento inválida. Formato esperado: dd/mm/yyyy",
  },
  time: {
    regex: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    message: "Horário inválido. Formato esperado: hh:mm",
  },
  registrationNumber: {
    regex: /^\d{6,}$/,
    message: "Número de matrícula inválido. Deve conter pelo menos 6 dígitos.",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function validate(value) {
    if (type === false) {
      return true;
    } else if (value.length === 0) {
      setError("Preencha este campo");
      return false;
    } else if (validations[type] && !validations[type].regex.test(value)) {
      setError(validations[type].message);
      return false;
    }

    setError("");
    return true;
  }

  function onChange(e) {
    if (error) validate(e.target.value);
    setValue(e.target.value);
  }

  return {
    error,
    value,
    setValue,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
