import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-screen  overflow-hidden"> 
        {/* //LOGO */}
        <img className="w-[30%] fixed z-10  top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        {/* Background Img */}
        <img
          className="w-full h-screen object-cover "
          src="https://images.unsplash.com/photo-1614091199036-e934784dbf0f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        {/* Button  */}
        <Link to={"/profile"} className="absolute bottom-1/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded w-[90%] flex justify-center tracking-[.12em]">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
