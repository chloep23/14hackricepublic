import React from 'react';
import styled, {keyframes} from 'styled-components';
import './index.css';
import header from "./hr_header.png";

const flash = keyframes`
  0%, 100% {
    color: #ff0000; // Red
  }
  25% {
    color: #00ff00; // Green
  }
  50% {
    color: #0000ff; // Blue
  }
  75% {
    color: #ffff00; // Yellow
  }
`;

const FlashingText = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  animation: ${flash} 1s infinite;
`;

export default function App(){
  return (
    <div className="bg-black">
      <a id="mlh-trust-badge" className="absolute top-3 right-4 m-4 w-32 h-auto" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" target="_blank" rel="noopener noreferrer">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" alt="Major League Hacking 2025 Hackathon Season">
          </img>
        </a>
    {/* -------------- HEADER --------------- */} 
      <div className = "flex flex-col p-0.5 h-auto w-96 mt-20 md:mt-28 sm:w-2/3 mx-auto sm:mt-10">
      {/* -------------- TITLE IMAGE --------------- */}
        <img 
          src={header}
          alt="hackrice logo">
        </img>
        {/* -------------- INFORMATION --------------- */}
        <h1 className = "text-center text-white sm:text-lg text-xs font-start2P sm:mb-4 mb-3 leading-8 sm:leading-10 md:mt-4">SEPTEMBER 20-22, 2024</h1> 
        <h2 className = "text-center text-white m-auto sm:text-lg text-xs font-start2P max-w-64 sm:max-w-full leading-6">RICE MEMORIAL CENTER AT RICE UNIVERSITY</h2>
        <div className="relative rounded-full sm:h-20 sm:w-60 h-16 w-44 mt-8 m-auto">
          <button className="absolute inset-0 z-0 rounded-full bg-yellow-300 blur"></button> 
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1gADwnj7PzFoeItHl3euH8QRYT42ywjV5bWp0hLXvaCtIww/viewform?usp=sf_link" target="_blank" rel="noreferrer" 
          className= "font-start2P absolute inset-0 bg-black border-4 py-4 sm:py-5 hover:border-yellow-300 hover:text-yellow-300 sm:text-xl text-sm text-center font-bold border-blue-800 text-white rounded-full h-16 w-44 sm:h-20 sm:w-60">apply now</a>
        </div>
        <h1 className = "sm:max-w-full max-w-56 m-auto leading-10 text-center text-white font-start2P text-9xl sm:mt-40 mt-20"><FlashingText>COMING</FlashingText></h1>
        <h1 className = "sm:max-w-full max-w-56 m-auto leading-10 text-center text-white font-start2P text-9xl sm:mt-14 mt-7"><FlashingText>SOON</FlashingText></h1>
        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className="sm:mt-40 mt-20 mx-auto pb-10 text-center md:text-xl font-bold text-blue-800 hover:text-white">MLH Code of Conduct</a>
      </div>
    </div> 
    
  )
}


