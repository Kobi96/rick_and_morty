const validator = (data) => {
  let errors = {};

  if (!data.email) {
    errors.email = "Ingresa un email.";
  } else if (!data.email.includes("@")) {
    errors.email = "Ingresa un email válido.";
  } else if (data.email.length > 35) {
    errors.email = "Menos de 35 caracteres";
  }

  if (!/.*\d+.*/.test(data.password)) {
    errors.password = "La contraseña debe contener al menos un número.";
  } else if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres.";
  }

  return errors;
};

export default validator;
