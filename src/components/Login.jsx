import { useRef, useState } from "react";
import Header from "./Header";
import { USER_AVTAR } from "../utils/constants";
import {checkValidData} from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);//initial value is null
  const password = useRef(null);


  const handleButtonClick = () => {
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;    //    or
                      // if(message === null){
                      //   //create a new user
                      // }
    
    //create a new user 
    if(!isSignInForm){
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVTAR
          }).then(() => {
            // Profile updated!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" +errorMessage);
        });
    }else{
      // signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" +errorMessage);
    });
      }
  }
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="relative w-full h-[100vh]">
      <Header />
      
      {/* Background Image */} 
      <div className="absolute w-full h-full z-0 ">
        <div className="absolute w-full h-full bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
          alt="Background"
        />
      </div>

      <form onSubmit={(e)=> e.preventDefault()} className="absolute z-10 top-1/3 left-1/3  bg-black opacity-85 flex flex-col items-center p-6 rounded-lg text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          required
          ref={name}
          className="p-2 m-2 w-[300px] bg-black opacity-80 text-white border rounded-md"
          type="text"
          placeholder="Full Name"
        />}
        <input
          ref={email}
          className="p-2 m-2 w-[300px] bg-black opacity-80 text-white border rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-2 m-2 w-[300px] bg-black opacity-80 text-white border rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 m-4 w-[300px] bg-[red] rounded-md" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In Now..."}
        </p>
      </form>
    </div>
  );  
};

export default Login;

