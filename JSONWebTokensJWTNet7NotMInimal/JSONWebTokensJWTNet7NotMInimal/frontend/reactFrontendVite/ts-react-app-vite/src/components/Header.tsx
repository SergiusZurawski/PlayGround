import { Link } from "react-router-dom";
// import { useAppContext } from "../contexts/AppContext";
// import SignOutButton from "./SignOutButton";
const Header = () => {
  // const { isLoggedIn } = useAppContext();
  return (
    <div className=" bg-slate-800 py-4">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to={"/"}>HotelBookKaro.com</Link>
        </span>
        <span className="flex space-x-2">
 
            <Link
              className="rounded-lg bg-white flex items-center text-blue-900 px-3 font-bold hover:bg-gray-200 hover:text-black "
              to={"/sign-in"}
            >
              Sign In
            </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
