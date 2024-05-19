import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();

  

  return (
    <div className="flex justify-between gap-10 items-center">
      <form className="flex flex-col  w-full gap-5">
        <h2 className="text-3xl font-bold">Sign In</h2>
        <label className="text-gray-700 text-sm font-bold">
          Email
          <input
            type="email"
           
            className="border rounded w-full font-normal px-2 py-1"
          />
         
        </label>
        <label className="text-gray-700 text-sm font-bold">
          Password
          <input
            type="password"
            
            className="border rounded w-full font-normal px-2 py-1"
          />
         
        </label>
        <span className="flex items-center justify-between">
          <span className="text-sm">
            Not Registered? <Link className="underline hover:font-bold" to="/register" >Create an Account here</Link>
          </span>
          <button className="bg-blue-600 mt-4 rounded-md text-white pl-4 pr-4 p-2 font-bold hover:bg-blue-500 text-xl">
            Login
          </button>
        </span>
      </form>
      <img
        height={400}
        width={400}
        className="  rounded-full"
        src="world.png"
        alt="world logo"
      />
    </div>
  );
};

export default SignIn;
