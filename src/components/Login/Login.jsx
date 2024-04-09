import { useRef, useState } from "react";
import { checkValidInputUserData } from "../../utils/validate";
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const name = useRef();
  const password = useRef();
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const handleUserCredentialsCheck = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    // setErrorMessage(checkValidInputUserData(email, password));
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-black border-2 p-10 flex flex-col items-center">
        {!isLoggedIn && (
          <div className="mb-10">
            <label htmlFor="email">Name: </label>
            <input
              className=" border-b-2 border-black outline-none"
              type="text"
              ref={name}
            />
          </div>
        )}
        <div className="mb-10">
          <label htmlFor="email">Email: </label>
          <input
            className=" border-b-2 border-black outline-none"
            ref={email}
            type="email"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="password">Password: </label>
          <input
            className="border-b-2 border-black outline-none"
            type="password"
            ref={password}
          />
        </div>
        {errorMessage ? <div>{errorMessage}</div> : null}
        <div
          onClick={handleUserCredentialsCheck}
          className="mb-10 border-black border-2 px-2 py-1 bg-blue-600 text-white rounded-lg">
          <button>{isLoggedIn ? "Login" : "Sign Up"}</button>
        </div>
        <div onClick={toggleLogin} className="cursor-pointer">
          {!isLoggedIn
            ? "Already registered? Sign In Now!"
            : "First Time? Sign Up Now!"}
        </div>
      </div>
    </div>
  );
};
export default Login;
