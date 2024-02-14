import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import React from "react";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="navbar flex justify-between px-10">
      <span
        className="font-bold normal-case text-2xl"
        rel="noopener noreferrer"
      >
        GalaryPro📷
      </span>
      <div>
        {user && <span className="text-sm">{user.email}</span>}
        <button
          className="btn btn-active btn-link text-sm"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
