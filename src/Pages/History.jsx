import React from "react";
import DriverHistory from "../Data/DriverHistry";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <>
      <div className="flex justify-between p-3">
        <h2 className="font-bold text-2xl p-2 ">History Details</h2>
        <button className="bg-green-300 px-7 py-2 rounded-xl">
          <Link to={"/profile"}>Go Home</Link>
        </button>
      </div>
      {DriverHistory.map((ride, index) => (
        <div
          key={index}
          style={{ marginBottom: "20px" }}
          className="p-3 bg-gray-300 font-semibold"
        >
          <h1>
            Driver Name: {ride.driverName} <br /> Car Number: {ride.carNumber}
          </h1>
          <h1>Total Payment: {ride.payment}</h1>
          <h1>
            Pickup: {ride.pickupLocation} <br /> Drop: {ride.dropLocation}
          </h1>
        </div>
      ))}
    </>
  );
};

export default History;
