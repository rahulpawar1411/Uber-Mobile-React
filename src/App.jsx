import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Profile from './Pages/Profile';
import FindDriver from './Pages/FindDriver'
import Done from './Pages/Done';
import DriverList from './Pages/DriverList';
import Histry from './Pages/History';
import Payment from './Pages/Payment';


const App = () => {
  return (
    <BrowserRouter basename='/Uber-Mobile-React'>
      <Routes>
        <Route path='/Uber-Mobile-React' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/FindDriver' element={<FindDriver/>} />
        <Route path='/done' element={<Done/>} />
        <Route path='/driverList' element={<DriverList/>} />
        <Route path='/histry' element={<Histry/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App