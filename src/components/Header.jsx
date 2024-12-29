
import logo from "../Asset/logo.png";
 import userImage from "../Asset/userImage.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

    //put it here cause we want to keep it always render and Header component will always stay . Did all the changes cause when i sign in or sign out onAuthChanged keeps track
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
          }
      });
    }, [])
  

  return (
    <div className="absolute w-[100%]  z-10 px-8 py-4 bg-black bg-opacity-50 flex justify-between items-center">
      <img className="w-28 h-12" src={logo} alt="" />
      <div className="flex">
        {user && user.photoURL ? (
          <img className="w-9 h-9" src={user.photoURL} alt="User" />
        ) : (
          <img className="w-9 h-9" src={userImage} alt="Default User" /> // Fallback image if user is null
        )}
        <button 
        className="font-bold text-white"
        onClick={handleSignOut}
        >(Sign Out)</button>
      </div>
    </div>
  )
}

export default Header;



