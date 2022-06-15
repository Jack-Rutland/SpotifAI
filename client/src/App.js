import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// Import all components
import Header from "./components/header";
import LandingPage from "./components/landing_page";
 
const App = () => {
 return (
   <div>
     <Header />
     <Routes>
       <Route exact path="/" element={<LandingPage />} />
     </Routes>
   </div>
 );
};
 
export default App;