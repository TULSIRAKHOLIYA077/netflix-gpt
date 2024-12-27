import logo from "../Asset/logo.png";
import userImage from "../Asset/userImage.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className="absolute w-[100%]  z-10 px-8 py-4 bg-black bg-opacity-50 flex justify-between items-center">
      <img className="w-28 h-12" src={logo} alt="" />
      <div className="flex">
        <img className="w-9 h-9" src={userImage} alt="" />
        <button 
        className="font-bold text-white"
        onClick={handleSignOut}
        >(Sign Out)</button>
      </div>
    </div>
  )
}

export default Header;

