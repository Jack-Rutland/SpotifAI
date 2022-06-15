import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Header() {
 return (
   <div>
     <nav className="bg-slate-500 w-screen">
      SpotifAI
     </nav>
   </div>
 );
}