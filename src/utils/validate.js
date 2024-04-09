export const checkValidInputUserData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/.test(
    password
  );
  if (!isEmailValid) {
    return "Email ID not valid!";
  }
  if (!isPasswordValid) {
    return "Password not valid!";
  }
  return null;
};
