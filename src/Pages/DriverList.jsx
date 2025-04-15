import React from 'react'
import drivers from '../Data/DriverList' // Make sure the exported name in DriverList.js is 'drivers'
import { Link } from 'react-router-dom'

const DriverList = () => {
  return (
    <div>
      <div className='flex justify-between p-3'>
      <h2 className='font-bold text-2xl p-2 '>Driver List</h2>
      <button className="bg-green-300 px-7 py-2 rounded-xl"><Link to={'/profile'}>Go Home</Link></button>

      </div>
      <ul>
        {drivers.map((driver, index) => (
          <li key={index} style={{ marginBottom: '1rem' }} className='p-3 border-t-1 bg-gray-300' >
            <div>🚗 <strong>{driver.name}</strong></div>
            <div>{driver.image}</div>
            <div>Total KM: {driver.totalKmDriven.toLocaleString()} km</div>
            <div className='text-sm'>{driver.description}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DriverList
