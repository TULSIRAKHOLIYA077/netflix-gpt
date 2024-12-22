
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="relative w-full h-[100vh]">
      <Header />
      
      {/* Background Image */}
      <div className="absolute w-full h-full z-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
          alt="Background"
        />
      </div>

      <form className="absolute z-10 top-1/3 left-1/3  bg-black opacity-85 flex flex-col items-center p-6 rounded-lg text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          className="p-2 m-2 w-[300px] bg-black opacity-80 text-white border rounded-md"
          type="text"
          placeholder="Full Name"
        />}
        <input
          className="p-2 m-2 w-[300px] bg-black opacity-80 text-white border rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-2 m-2 w-[300px] bg-black opacity-80 text-white border rounded-md"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 m-4 w-[300px] bg-[red] rounded-md">
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

