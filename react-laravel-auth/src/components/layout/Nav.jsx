import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Nav() {
  const { user, token } = useContext(AuthContext);
  console.log(user, token);

  return (
    <div className="w-full h-[50px] bg-gray-400">
      <div className="flex items-center justify-between p-2">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex gap-4">
          {token ? (
            <span className="text-white">Welcome, {user ? user.name : "User"}</span>
          ) : (
            <>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
