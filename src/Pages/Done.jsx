import React from 'react';
import { useNavigate } from 'react-router-dom';

const Done = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/findDriver'); 
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col" onClick={handleClick}>
        <h2 className='text-gray-400 pt-4'>click any where to home</h2>
      <video
        autoPlay
        muted
        loop
        playsInline
        className=" h-full object-cover"
        src="https://i.gifer.com/7efs.mp4"
      />
    </div>
  );
};

export default Done;
