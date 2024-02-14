import { signOut } from "firebase/auth";
import {auth} from '../firebase/config'
import React from "react";

const Navbar = () => {

  const handleLogout = async ()=>{
    try{
      await signOut(auth);
    } catch(error){
      console.error(error.message);
    }
  }
  return (
    <div className="navbar flex justify-between px-10">
      <a className="font-bold normal-case text-xl">GalaryPro📷</a>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
