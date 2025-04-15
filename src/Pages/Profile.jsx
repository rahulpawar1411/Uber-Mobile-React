import React, { useState, useEffect } from "react";
import { TextField, Box, Button } from "@mui/material";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isFocused, setIsFocused] = useState(false);

  // Prevent body scroll
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
        {/* Background Image */}
        <img
          className="w-full h-[60%] object-cover"
          src="https://imgs.search.brave.com/OSK5Exaf3nydQCokNDYo32NP0Aw8BA3ra5A3gCMsvNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC1icmln/aHQtcGlucy1tYXBf/MjMtMjE0Nzc5MzUy/MS5qcGc_c2VtdD1h/aXNfaHlicmlk"
          alt="city top view"
        />

        {/* Sliding Input Panel */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-full p-6 bg-white rounded-t-3xl shadow-xl transition-all duration-500 ease-in-out ${
            isFocused ? "top-[20%]" : "top-[55%]"
          }`}
        >
          <Box className="flex flex-col gap-6 items-center justify-center">
            {/* Inputs */}
            <TextField
              label="Current Location"
              variant="outlined"
              fullWidth
              sx={{ maxWidth: "100%" }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <TextField
              label="Destination"
              variant="outlined"
              fullWidth
              sx={{ maxWidth: "100%" }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            {/* Submit Button */}
            <button className="w-full bg-green-400 px-4 py-2 rounded-xl "><Link to={'/FindDriver'}>Confirm</Link></button>
            
            {/* Destination Suggestions */}
            <div className="mt-6 w-full text-center">
              <h2 className="text-lg font-semibold mb-2 text-gray-700">
                Popular Destinations
              </h2>
              <ul className="text-gray-600 space-y-1 max-h-[150px] overflow-y-auto mx-2 text-sm">
                <li>Central Park</li>
                <li>Downtown Plaza</li>
                <li>Airport Terminal</li>
                <li>University Campus</li>
                <li>Tech Hub Area</li>
                <li>Lake View</li>
                <li>Mountain Ridge</li>
                <li>Beachside Resort</li>
                <li>Shopping Mall</li>
                <li>Historic Landmark</li>
              </ul>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Profile;
