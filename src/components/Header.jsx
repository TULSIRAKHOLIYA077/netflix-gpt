
import {LOGO, SUPPORTED_LANGUAGES} from "../utils/constants";
import logo from "../Asset/logo.png";
import userImage from "../Asset/userImage.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
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
      //this onAuthStateChanged returns unsubscribe function
      const unsubscribe = onAuthStateChanged(auth, (user) => {
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

      return () => unsubscribe();
    }, [])

    const handleGptSearchClick = () => {
      //toggle searchGpt by using redux store 
      dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) =>{
      dispatch(changeLanguage(e.target.value));
    }
  

  return (
    <div className="absolute w-[100%]  z-40 px-8 py-4 flex justify-between items-start bg-black bg-opacity-40">
      <img className="w-28 h-12" src={logo} alt="" />
      {user && (
        <div className="flex items-center gap-2">
          {showGptSearch &&           <select className="p-2 bg-gray-900 text-white" name="" id="" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )}
          </select>
          }
          <button 
            className="py-2 px-4 bg-purple-800 mx-4 text-white rounded-lg cursor-pointer" onClick={handleGptSearchClick}>
              {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-11 h-11 rounded-lg" src={user?.photoURL || userImage}  alt="" />
          <button onClick={handleSignOut} className="font-bold bg-white px-2 py-2 rounded-lg">
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header;


