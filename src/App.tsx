import React from 'react';
import './index.css';

export default function App(){
  return (
    <div className="bg-black">
    {/* -------------- HEADER --------------- */} 
      <div className = "flex flex-col h-auto w-2/3 mx-auto mt-10">
      {/* -------------- TITLE IMAGE --------------- */}
        <img 
          src="/assets/hr_header.png"
          alt="hackrice logo">
        </img>
        {/* -------------- INFORMATION --------------- */}
        <h1 className = "text-center text-white text-md font-start2P font-medium mb-4 leading-10">SEPTEMBER 20-22, 2024</h1> 
        <h2 className = "text-center text-white text-md font-start2P font-medium">RICE MEMORIAL CENTER AT RICE UNIVERSITY</h2>
        <div className="relative rounded-full h-20 w-60 mt-8 m-auto">
          <button className="absolute inset-0 z-0 rounded-full bg-yellow-300 blur"></button> 
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1gADwnj7PzFoeItHl3euH8QRYT42ywjV5bWp0hLXvaCtIww/viewform?usp=sf_link" target="_blank" rel="noreferrer" className= "font-start2P absolute inset-0 bg-black border-4 py-5 hover:border-yellow-300 hover:text-yellow-300 text-xl text-center font-bold border-blue-800 text-white rounded-full h-20 w-60">apply now</a>
        </div>
      </div>
    {/* -------------- SCHEDULE --------------- */}
      <h1 className = "mt-28 text-white font-start2P font-bold text-2xl text-center ">Schedule</h1>
      <div className="grid grid-cols-3 gap-1 h-100 mt-10 ml-40 mr-40 mb-10">
        {/* -------------- FRIDAY --------------- */}
        <div className="bg-black rounded-lg m-auto">
          <div className="relative rounded-full h-16 w-64 mx-auto">
            <button className="absolute inset-0 rounded-full bg-yellow-300 blur"></button> 
            <button className="relative text-center text-md bg-black text-yellow-300 font-start2P font-bold align-top rounded-full border-4 border-yellow-300 h-16 w-64">Friday 9/20</button>
          </div>
          <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Rice Student Check-In</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">4:00 PM </h2>
            </div> Check in for Rice Students!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Non-Rice Student Check-In</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">4:15 PM </h2>
            </div> Check in for Non-Rice students!!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Company Networking/Recruiting</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">4:30 PM </h2>
            </div> Network with our sponsors at Sammy's!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Opening Ceremony</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">6:30 PM </h2>
            </div> We will be detailing the tracks/challenges, prizes, sponsorship, and more!
          </button> 
          <button className="relative mt-2 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Keynote Speaker</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">7:00 PM </h2>
            </div> Join us for our keynote presentation with ___
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Dinner</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">7:30 PM </h2>
            </div> Come to Ray Courtyard for La Tapatia: al Pastor/beef str!
          </button> 
          <button className="mt-2 relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Hacking Begins</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">8:00 PM </h2>
            </div> The hackathon begins! Start hacking!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Git/Github Workshop</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">8:30 PM </h2>
            </div> Learn the basis of Git and GitHub to start collaborating efficiently with your team at Farnsworth Pavilion!
          </button> 
          <button className="mt-2 relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Midnight Snack</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">11:30 PM </h2>
            </div> Join us for a surprise late night snack!
          </button> 
        </div>
        {/* -------------- SATURDAY --------------- */}
        <div className="bg-black rounded-full mx-auto">
          <div className="relative rounded-full h-16 w-64 mx-auto">
            <button className="absolute inset-0 z-0 rounded-full bg-yellow-300 blur"></button> 
            <button className="relative text-center text-md bg-black text-yellow-300 font-start2P font-bold align-top rounded-full border-4 border-yellow-300 h-16 w-64">Saturday 9/21</button>
          </div>
          <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Resume Review Workshop</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">10:00 AM </h2>
            </div> Get your resume reviewed by our mentors!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Lunch</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">12:30 PM </h2>
            </div> Grab some thai food catered by Thai Village!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Diversity Panel</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">2:00 PM </h2>
            </div> Join us for our diversity panel with _____!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">MLH Activity</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">4:00 PM </h2>
            </div> Join MLH for a Bob Ross MS mini-event!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Dinner</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">7:30 PM </h2>
            </div> Come and grab some Aga's for dinner!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Late Night Activity</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">11:00 PM </h2>
            </div> Feeling hungry late at night? Grab some of our late night food options!
          </button> 
        </div>
        {/* -------------- SUNDAY --------------- */}
        <div className="bg-black rounded-full mx-auto">
          <div className="relative rounded-full h-16 w-64 mx-auto">
            <button className="absolute inset-0 z-0 rounded-full bg-yellow-300 blur"></button> 
            <button className="relative text-center text-md bg-black text-yellow-300 font-start2P font-bold align-top rounded-full border-4 border-yellow-300 h-16 w-64">Sunday 9/22</button>
          </div>
          <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Breakfast</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">8:30 AM </h2>
            </div> Early morning snack provided by Le Donut!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Hacking Ends</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">9:00 AM </h2>
            </div> Submissions close on Devpost!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Judging Begins</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">9:30 AM </h2>
            </div> Judges begin reviewing your submissions!
          </button> 
          <button className="relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Top 5 Teams Present</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">2:00 PM </h2>
            </div> We'll announce the top 5 finalists and invite them to present live in front of our judges!
          </button> 
          <button className="mt-2 relative bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-96">
            <div className="flex justify-between">
              <h1 className="mb-1 font-semibold text-lg">Closing Ceremony</h1>
              <h2 className="ml-3 font-semibold text-right text-lg">3:00 PM </h2>
            </div> Winners will be announced and prizes awarded!
          </button> 
        </div>

      </div>
    </div> 
    
  )
}


