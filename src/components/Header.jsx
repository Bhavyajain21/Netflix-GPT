import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
const Header = () => {
  console.log(auth);
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <div className="flex p-2 justify-between w-full">
        <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg">
          HomePage
        </button>
        <div className="flex items-center">
          <div>
            {user ? (
              <img src={user.photoURL} alt="" className=" w-10 rounded-full" />
            ) : null}
          </div>
          <button
            onClick={handleSignout}
            className="font-bold text-white mr-10 ml-2">
            (Sign Out)
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
