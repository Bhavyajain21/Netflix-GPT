import Header from "../Header";
import { auth } from "../../firebase";
import { useState } from "react";
const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
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
            />
          </div>
        )}
        <div className="mb-10">
          <label htmlFor="email">Email: </label>
          <input
            className=" border-b-2 border-black outline-none"
            type="email"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="password">Password: </label>
          <input
            className="border-b-2 border-black outline-none"
            type="password"
          />
        </div>
        <div
          onClick={toggleLogin}
          className=" border-black border-2 px-2 py-1 bg-blue-600 text-white rounded-lg">
          <button>{isLoggedIn ? "Login" : "Sign Up"}</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
