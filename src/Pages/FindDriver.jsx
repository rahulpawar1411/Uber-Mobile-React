import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";


const FindDriver = () => {
     const [isFocused, setIsFocused] = useState(false);

      useEffect(() => {
         document.body.style.overflow = "hidden";
         return () => {
           document.body.style.overflow = "auto";
         };
       }, []);

  return (
    <>
      <Nav />
      <div className="relative h-screen overflow-hidden">
        <img
          className="w-full h-[60%] object-cover"
          src="https://imgs.search.brave.com/OSK5Exaf3nydQCokNDYo32NP0Aw8BA3ra5A3gCMsvNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC1icmln/aHQtcGlucy1tYXBf/MjMtMjE0Nzc5MzUy/MS5qcGc_c2VtdD1h/aXNfaHlicmlk"
          alt="city top view"
        />

        <div 
     
          className={" absolute left-1/2 top-[20%] transform -translate-x-1/2 w-full p-6 bg-white rounded-t-3xl  transition-all duration-500 ease-in-out "}
        >
        <div>
        <h1 className="font-bold text-2xl">Driver Profile</h1>

            <div className="flex justify-between items-center">
            <h1 className="text-lg ">Hello,<br /> My Name is Ben-10</h1>
            <img className="w-[80px] rounded-2xl mt-4 " src="https://imgs.search.brave.com/605lUueXMF2HK2Qv8GIrwWJTQ6kMbqrVH55ZgUDTj-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z2V0bWVybGluLmlu/L2Ntcy9wZnAzX2Q3/ODU1Zjk1NjIud2Vi/cA" alt="" />
            </div>

            <div className="w-full mt-2 flex justify-center items-center">
                <img className="w-1/2 rounded-2xl" src="https://imgs.search.brave.com/nvcJxMUWyXNwzSOqRWufp3HDpqP1mwhrb7pgNGK4nPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzIxLzY0LzAz/LzM2MF9GXzkyMTY0/MDMzMl9vRk5kWDdv/Zjd3elBwUHBYSEdN/T2twQmVrSHJWclNL/bi5qcGc" alt="" />
            </div>
            <div className="flex justify-center items-center flex-col mt-4">
                <h1 className="font-bold">174 Deliveries since May 2023</h1>
                <div className="flex justify-between gap-10 text-2xl items-center  ">
                    <h1>174</h1>
                    <h1>100%</h1>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                <h1>Custumer Compliments <span className="text-blue-500">read..</span></h1>
            </div>
            <div className="flex justify-between items-center mx-8 mt-4">
                <button className="bg-red-500 px-7 py-2 rounded-xl"><Link to={'/profile'}>Back</Link></button>
                <button className="bg-green-400 px-4 py-2 rounded-xl"><Link to={"/payment"} >Confirm</Link></button>
            </div>

        </div>
        </div>
      </div>
    </>
  );
};

export default FindDriver;
