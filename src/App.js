import "./App.css";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
