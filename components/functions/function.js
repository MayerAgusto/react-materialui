export const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/;
  return regex.test(email);
};
export const validateRuc = (ruc) => {
  const value = 11;
  return ruc.lenght === value && /^[0-9]*$/.test(ruc);
};
export const isNotNull = (str) => {
  return str !== "";
};
export const isNumeric = (str) => {
  return /^[0-9]*$/.test(str);
};
export const validateUser = (str, value, object) => {
  switch (str) {
    case "name":
      isNotNull(value)
        ? (object = { ...object, name: false })
        : (object = { ...object, name: true });
      break;
    case "email":
      validateEmail(value)
        ? (object = { ...object, email: false })
        : (object = { ...object, email: true });
      break;
    case "address":
      isNotNull(value)
        ? (object = { ...object, address: false })
        : (object = { ...object, address: true });
      break;
    case "ruc":
      validateRuc(value)
        ? (object = { ...object, ruc: false })
        : (object = { ...object, ruc: true });
      break;
    case "phone":
      isNumeric(value)
        ? (object = { ...object, phone: false })
        : (object = { ...object, phone: true });
      break;
    default:
      return object;
  }
};
