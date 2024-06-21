export const cnpjMask = (value) => {
  const rawValue = value.replace(/\D/g, "");
  return rawValue
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);
};

export const cpfMask = (value) => {
  const rawValue = value.replace(/\D/g, "");
  return rawValue
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2")
    .slice(0, 14);
};

export const phoneMask = (value) => {
  const rawValue = value.replace(/\D/g, "");
  return rawValue
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2")
    .slice(0, 15);
};

export const postalCodeMask = (value) => {
  const rawValue = value.replace(/\D/g, "");
  return rawValue.replace(/^(\d{5})(\d)/, "$1-$2").slice(0, 9);
};

export const birthDateMask = (value) => {
  const rawValue = value.replace(/\D/g, "");
  return rawValue
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})\/(\d{2})(\d)/, "$1/$2/$3")
    .slice(0, 10);
};

export const timeMask = (value) => {
  const rawValue = value.replace(/\D/g, "");
  return rawValue
    .replace(/^(\d{2})(\d)/, "$1:$2")
    .replace(/(\d{2}):(\d{2})/, "$1:$2")
    .slice(0, 5);
};
