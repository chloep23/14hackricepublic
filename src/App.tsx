import React from 'react';
import './index.css';

export default function App(){
  return (
    <div className="bg-black">
    {/* -------------- HEADER --------------- */} 
      <div className = "flex flex-col h-auto w-2/3 mx-auto mt-10">
      {/* -------------- TITLE IMAGE --------------- */}
      <a href="https://mlh.io/" target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/mlh-logo-white.png"
          alt="Icon"
          className="absolute top-3 right-3 m-4 w-auto h-16"
        />
      </a>
        <img 
          src="/assets/hr_header.png"
          alt="hackrice logo">
        </img>
        {/* -------------- INFORMATION --------------- */}
        <h1 className = "text-center text-white text-xl font-start2P font-medium mb-4 leading-10">SEPTEMBER 20-22, 2024</h1> 
        <h2 className = "text-center text-white text-xl font-start2P font-medium">RICE MEMORIAL CENTER AT RICE UNIVERSITY</h2>
        <div className="relative rounded-full h-20 w-60 mt-8 m-auto">
          <button className="absolute inset-0 z-0 rounded-full bg-yellow-300 blur"></button> 
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1gADwnj7PzFoeItHl3euH8QRYT42ywjV5bWp0hLXvaCtIww/viewform?usp=sf_link" target="_blank" rel="noreferrer" className= "font-start2P absolute inset-0 bg-black border-4 py-5 hover:border-yellow-300 hover:text-yellow-300 text-xl text-center font-bold border-blue-800 text-white rounded-full h-20 w-60">apply now</a>
        </div>
        <h1 className = "text-center text-white font-start2P text-4xl mt-20 font-medium">MORE DETAILS COMING SOON!</h1>
      </div>
      <div className="place-items-center">
      <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className="mt-24 block w-48 mx-auto text-center font-bold text-blue-800 hover:text-white">MLH Code of Conduct</a>
    </div>
    </div> 
    
  )
}


