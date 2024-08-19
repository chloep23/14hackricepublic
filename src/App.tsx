import React, { useState, useEffect, useMemo } from 'react';
import './index.css';
import header from './hackricelogo.png';
import NORDsponsor1 from './NORD_NordPass_logo.png';
import NORDsponsor2 from './NORD_NordVPN_logo.png';


interface FAQItem {
  question: string;
  answer: string;
  link?: { href: string, text: string };
}

export default function App(){
  const faqData: FAQItem[] = [
    {
      question: "How long is HackRice?",
      answer: "The event is held from Friday, September 20th to Sunday, September 22th. Students hack for 36 hours!"
    },
    {
      question: "How many hackers attend HackRice? Where are they from?",
      answer: "We expect around 400 hackers from schools around the world!"
    },
    {
      question: "How many hackers per team are permitted?",
      answer: "Team are limited to 4 hackers. That being said, you don't have to have 4 hackers to compete."
    },
    {
      question: "Who is eligible to participate in HackRice?",
      answer: 'Any current undergraduate student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the ',
      link: { href: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf", text: "MLH Code of Conduct." }
    },
    {
      question: "What are the acceptance criteria?",
      answer: "All Rice students are guaranteed acceptance. For Non-Rice students, we ask for some background information so that we can invite people who have demonstrated interest and skill. Above all else, we're looking for passion and excitement!"
    },
    {
      question: "What do I need to bring?",
      answer: "Please bring a student and legal ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other."
    },
    {
      question: "What if I'm not very experienced?",
      answer: "We do our best to point people in the right direction and use tools and languages with a low barrier to entry. You will have access to our mentors and the HackRice team at all times! We will also be having workshops the week before the hackathon!"
    },
    {
      question: "Can Rice alumni attend?",
      answer: "Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes."
    },
    {
      question: "What if I don't have a team before the event?",
      answer: "You don't have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleAnswer(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  const texts = useMemo(() => [
    "Chomp Through Code",
    "Munch Your Way Through The Day",
    "Power Up With Our Tracks",
    "Level Up With Our Sponsors",
    "Email officialhackrice@gmail.com For Questions!"
  ], []); 
  const speed = 100; 

  const [displayedTexts, setDisplayedTexts] = useState<string[]>(Array(texts.length).fill('')); // Track displayed text for each string
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Track the current text being typed

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < texts[currentTextIndex].length) {
        setDisplayedTexts((prev) => {
          const newDisplayedTexts = [...prev];
          newDisplayedTexts[currentTextIndex] = texts[currentTextIndex].slice(0, index + 1);
          return newDisplayedTexts;
        });
        index++;
      } else {
        clearInterval(interval);
        if (currentTextIndex < texts.length - 1) {
          setTimeout(() => setCurrentTextIndex(currentTextIndex + 1), speed); // Move to the next text after a short delay
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentTextIndex, texts, speed]);

  return (
    <div className="bg-black flex flex-col h-auto w-screen mx-auto left-0 right-0">
      <a id="mlh-trust-badge" className="z-20 absolute top-0 right-1 sm:top-3 sm:right-4 m-4 w-16 h-auto md:w-24 lg:w-36" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" 
          alt="Major League Hacking 2025 Hackathon Season">
        </img>
      </a>
 {/* -------------- HEADER --------------- */} 
      <div id="home" className="h-screen flex flex-col items-center justify-center scroll-mt-24">
        {/* -------------- COVER IMAGE --------------- */}
        <div className = "h-auto w-full sm:w-2/3 mx-auto">
          <img src= {header} alt="hackrice logo"></img>
        </div>
      </div>
      
  {/* -------------- ABOUT --------------- */}
      <div id="about" className="flex flex-col h-screen mx-auto left-0 right-0 items-center scroll-mt-24">
        <h1 className=" text-white font-extrabold text-4xl text-center">About</h1>
        <h2 className="text-blue-800 text-opacity-90 font-extrabold text-xl text-center mt-3">
        {displayedTexts[0]}
        </h2>
          <div className="grid grid-cols-2 gap-8 ml-28 mt-10">

          {/* -------------- INFORMATION --------------- */}
            <div className = "relative flex flex-col h-96 w-96 items-center">
              <div className="absolute outline bg-blue-800 bg-opacity-20 ml-4 mt-5 p-8 outline-blue-800 rounded-xl w-11/12 h-3/4 mx-auto">
                <h1 className="hidden font-medium text-lg text-center">
                  HackRice is Rice University's annual hackathon. It brings together over 400 of the brightest minds in the country to develop & showcase their creative and entrepreneurial talents. 
                  Participants form teams of up to 4 to work on a project — typically software, and sometimes hardware — in an environment designed for collaboration. Teams showcase projects after 36 hours of hacking. 
                  <br/> <br/> This is an excellent opportunity for students to build a network of creators, receive internship & job offers from world-class sponsors, and learn modern tools & systems.
                </h1>
              </div>
              <div className="absolute flex outline bg-blue-800 bg-opacity-20 p-8 mr-4 outline-blue-800 rounded-xl w-11/12 h-3/4 mx-auto">
                <h1 className="text-white font-medium text-lg text-center">
                  HackRice is Rice University's annual hackathon. It brings together over 400 of the brightest minds in the country to develop & showcase their creative and entrepreneurial talents. 
                  Participants form teams of up to 4 to work on a project — typically software, and sometimes hardware — in an environment designed for collaboration. Teams showcase projects after 36 hours of hacking. 
                  <br/> <br/> This is an excellent opportunity for students to build a network of creators, receive internship & job offers from world-class sponsors, and learn modern tools & systems.
                </h1>
              </div>
              </div>
        {/* -------------- APPLY --------------- */}
            <div className = "relative flex flex-col h-96 w-96">
              <div className = "absolute outline outline-blue-800 rounded-xl items-center justify-center p-8 h-3/4 w-2/3">
                <h1 className = "hidden text-center text-white text-xl font-medium sm:mb-4 mb-3 md:mt-4">September 20, 2024 - September 22, 2024</h1> 
                <h2 className = "hidden text-center text-white m-auto text-xl font-medium max-w-64 sm:max-w-full">Rice Memorial Center @ Rice University</h2>`
              </div>
              <div className = "absolute bg-gradient-to-b from-blue-900/70 via-blue-800/70 to-orange-700/70 bg-opacity-15 ml-6 mt-5 rounded-xl items-center justify-center p-8 h-2/3 w-2/3">
                <h1 className = "hidden text-center text-white text-xl font-medium sm:mb-4 mb-3 md:mt-4">September 20, 2024 - September 22, 2024</h1> 
                <h2 className = "hidden text-center text-white m-auto text-xl font-medium max-w-64 sm:max-w-full">Rice Memorial Center @ Rice University</h2>
              </div>
              <div className = "absolute flex flex-col items-center justify-center bg-black  bg-opacity-75 ml-12 mt-10 rounded-xl p-3 h-80 w-80">
                <h1 className = "text-center text-white text-2xl font-medium">September 20-22, 2024</h1> 
                <h2 className = "text-center text-white text-2xl mt-6 font-medium">Rice Memorial Center <br/> @ Rice University</h2>
                <a className="flex items-center justify-center hover:outline-orange-600/40 bg-blue-800 hover:bg-orange-600/15 bg-opacity-20 outline mt-6 text-2xl text-center font-bold outline-blue-800 text-white rounded-xl h-14 w-40" href="https://docs.google.com/forms/d/e/1FAIpQLSd1gADwnj7PzFoeItHl3euH8QRYT42ywjV5bWp0hLXvaCtIww/viewform?usp=sf_link" target="_blank" rel="noreferrer"> apply now </a> 
              </div>
            </div>
          </div>
      </div>
      
      {/* -------------- SCHEDULE --------------- */}
      <div id="schedule" className="mb-73 h-screen flex flex-col scroll-mt-24">
        <h1 className = " text-white font-extrabold text-4xl text-center ">Schedule</h1>
        <h2 className=" text-yellow-300/85 font-extrabold text-xl text-center mt-5">
          {displayedTexts[1]}
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-10 mb-10 ml-40 mr-40 mx-auto">
          {/* -------------- FRIDAY --------------- */}
          <div className="bg-black flex flex-col items-center rounded-lg">
            <button className="relative text-center text-md bg-black text-yellow-300/85 text-2xl font-bold align-top rounded-xl outline outline-yellow-300/85 h-16 w-52">Friday 9/20</button>
            <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Rice Student Check-In</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">4:00 PM </h2>
              </div> Check in for Rice Students!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Non-Rice Student Check-In</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">4:15 PM </h2>
              </div> Check in for Non-Rice students!!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Company Networking/Recruiting</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">4:30 PM </h2>
              </div> Network with our sponsors at Sammy's!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Opening Ceremony</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">6:30 PM </h2>
              </div> We will be detailing the tracks/challenges, prizes, sponsorship, and more!
            </button> 
            <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Keynote Speaker</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">7:00 PM </h2>
              </div> Join us for our keynote presentation!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Dinner</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">7:30 PM </h2>
              </div> Come to Ray Courtyard for dinner!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Hacking Begins</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">8:00 PM </h2>
              </div> The hackathon begins! Start hacking!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">First Timer's Workshop</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">8:30 PM </h2>
              </div> Pick up and strengthen basic skills that will help you with your project!
            </button> 
            <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Arts & Crafts</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">10:00 PM </h2>
              </div> Refresh your creativity with some arts and crafts!
            </button> 
            <button className="mt-1 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Late Night Snack</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">11:00 PM </h2>
              </div> Join us for a late night snack!
            </button> 
          </div>
          {/* -------------- SATURDAY --------------- */}
          <div className="bg-black flex flex-col items-center rounded-lg">
          <button className="relative text-center text-md bg-black text-yellow-300/85 text-2xl font-bold align-top rounded-xl outline outline-yellow-300/85 h-16 w-52">Saturday 9/21</button>
            <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Workshop #1</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">10:00 AM </h2>
              </div> Join us for our first workshop run by the board!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Typing Tournament</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">11:00 AM </h2>
              </div> Show off your typing speed at our tournament!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Lunch</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">12:30 PM </h2>
              </div> Lunch time!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">MathWorks Workshop</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">2:00 PM </h2>
              </div> Join us for a MathWorks workshop!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Trivia</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">3:00 PM </h2>
              </div> Take a quick break and test your trivia knowledge!
            </button> 
            <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">MLH Workshop</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">4:00 PM </h2>
              </div> Join us for a MLH workshop!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Workshop #2</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">6:00 PM </h2>
              </div> Come to our second workshop run by the HackRice board!
            </button> 
            <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Dinner</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">7:30 PM </h2>
              </div> Dinner time!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Workshop #3</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">9:00 PM </h2>
              </div> Ready for our third workshop run by the HackRice board?
            </button> 
            <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Ramen Bar & Glowsticks</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">11:00 PM </h2>
              </div> Have some late night fun with our ramen bar and glowsticks! 
            </button> 
          </div>
          {/* -------------- SUNDAY --------------- */}
          <div className="bg-black flex flex-col items-center rounded-lg">
            <button className="relative text-center text-md bg-black text-yellow-300/85 text-2xl font-bold align-top rounded-xl outline outline-yellow-300/85 h-16 w-52">Sunday 9/22</button>
            <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Breakfast</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">8:30 AM </h2>
              </div> Early morning breakfast!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Hacking Ends</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">9:00 AM </h2>
              </div> Submissions close on Devpost!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Judging Begins</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">9:30 AM </h2>
              </div> Judges begin reviewing your submissions!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Top 5 Teams Present</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">2:00 PM </h2>
              </div> We'll announce the top 5 finalists and invite them to present live in front of our judges!
            </button> 
            <button className="mt-5 bg-black hover:scale-110 text-white text-left rounded-lg p-3 h-20 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-lg">Closing Ceremony</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">3:00 PM </h2>
              </div> Winners will be announced and prizes awarded!
            </button> 
          </div>
        </div>
      </div>
      {/* --------------- TRACKS --------------- */}
      <div id="tracks" className="mb-24 h-screen bg-black flex flex-col items-center justify-center scroll-mt-24">
        <div className = "flex flex-col w-1/2 mx-auto">
          <h1 className = "text-white font-extrabold text-4xl text-center ">Tracks</h1>
          <h2 className=" text-blue-800 font-extrabold text-xl text-center mt-5">
            {displayedTexts[2]}
          </h2>
              <div className = "grid grid-cols-4 mt-10">
                <div className = "relative flex flex-col col-start-2 col-span-2 w-72 h-40 mx-auto items-center justify-center">
                  <div className = "absolute outline bg-blue-800 bg-opacity-15 outline-blue-800 rounded-xl w-72 h-44 flex flex-col items-center justify-center"></div>
                  <div className = "absolute outline bg-black outline-blue-800 rounded-xl w-60 h-32 flex flex-col items-center justify-center">
                    <h1 className ="mb-3 font-semibold text-2xl text-center text-white">Game <br/> Development</h1>
                  </div>
                  <img className = "absolute mt-36 h-28 w-28" src="/assets/BG_Pacman.png" alt="track1"/>
                  <img className = "absolute mt-36 h-28 w-28" src="/assets/Center_Pacman.png" alt="track1"/>
                </div>
              </div>

              <div className = "grid grid-cols-4 mt-2">
                <div className = "relative flex flex-col col-start-1 col-span-2 w-72 h-40 mt-20 mx-auto items-center justify-center">
                  <div className = "absolute outline bg-blue-800 bg-opacity-15 outline-blue-800 rounded-xl w-72 h-44 flex flex-col items-center justify-center"></div>
                  <div className = "absolute outline bg-black outline-blue-800 rounded-xl w-60 h-32 flex flex-col justify-center">
                    <h1 className ="font-semibold text-2xl text-center text-white z-10">Education</h1>
                  </div>
                  <img className = "absolute mr-65 mt-10 mb-10 h-28 w-28" src="/assets/BG_Ghost.png" alt="track2"/>
                  <img className = "absolute mr-65 mt-10 mb-10 h-28 w-28" src="/assets/Pink_Left_Ghost2.png" alt="track2"/>
                </div>
            
                <div className = "relative flex flex-col col-start-3 col-span-2 w-72 h-40 mt-20 mx-auto items-center justify-center">
                  <div className = "absolute outline bg-blue-800 bg-opacity-15 outline-blue-800 rounded-xl w-72 h-44 flex flex-col items-center justify-center"></div>
                  <div className = "absolute outline bg-black outline-blue-800 rounded-xl w-60 h-32 flex flex-col justify-center">
                    <h1 className ="font-semibold text-2xl text-center text-white z-10">Healthcare</h1>
                  </div>
                  <img className = "absolute ml-65 mt-10 mb-10 h-28 w-28" src="/assets/BG_Ghost.png" alt="track2"/>
                  <img className = "absolute ml-65 mt-10 mb-10 h-28 w-28" src="/assets/Teal_Right_Ghost2.png" alt="track2"/>
                </div>
              </div>
          

            {/* <div className ="flex flex-col col-start-3 items-center justify-center">
              <img className = "ml-12 h-80 w-80" src="/assets/Comp.png" alt="track2"/>
            </div> */}
        </div>
      </div>
      {/* --------------- SPONSORS --------------- */}
      <div id="sponsors" className="h-screen mb-36 bg-black flex flex-col items-center justify-center scroll-mt-24">
      <h1 className = "text-white font-extrabold text-4xl text-center ">Sponsors</h1>
      <h2 className=" text-orange-800 font-extrabold text-xl text-center mt-5">
        {displayedTexts[3]}
      </h2>
        <div className = "flex flex-col w-3/4 mx-auto">
          <div className = "grid grid-cols-4 mt-8">
             {/* --------------- ROW 1 --------------- */}
            <div className = "relative flex flex-col w-56 h-56 mx-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/capitalone_white_logo.png" alt="capitalone" className="w-40 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 mx-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/paycom-logo-white.png" alt="paycom" className="w-40 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 mx-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/chevron_white_logo.png" alt="chevron" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 m-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/RiceCS_logo.png" alt="ricecs" className="w-72 h-auto"/>
              </div>
            </div>
             {/* --------------- ROW 2 --------------- */}
             <div className = "relative flex flex-col w-56 h-56 m-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/roblox_white.png" alt="roblox" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 m-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/Mathworks_logo.png" alt="mathworks" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 m-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/VEDO_logo.png" alt="vedo" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 m-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src={NORDsponsor2} alt="nordvpn" className="w-80 h-auto"/>
              </div>
            </div>
            {/* --------------- ROW 3 --------------- */}
            <div className = "relative flex flex-col w-56 h-56 m-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/kenkennedywhitelogo.png" alt="kenkennedy" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 mx-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src={NORDsponsor1} alt="nordpass" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 mx-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/REA-Logo_Formal.png" alt="rea" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 mx-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/NORD_Incogni_logo.png" alt="incogni" className="w-48 h-auto"/>
              </div>
            </div>
            {/* --------------- ROW 4 --------------- */}
            <div className = "relative flex flex-col w-56 h-56 m-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/standout_white.png" alt="standout" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex flex-col w-56 h-56 m-auto items-center justify-center">
              <div className = "absolute outline bg-orange-800 bg-opacity-15 outline-orange-800 rounded-xl w-60 h-40 flex flex-col items-center justify-center">
                <img src="/assets/sponsors/sailywhite.png" alt="saily" className="w-48 h-auto"/>
              </div>
            </div>
          </div>
          </div>
      </div>
      {/* --------------- FAQ --------------- */}
      <div id="faq" className="scroll-mt-24">
        <h1 className = "text-white font-extrabold text-4xl text-center">FAQ</h1>
        <h1 className = "text-yellow-300/85 font-extrabold mt-3 text-xl text-center -mb-8">
          {displayedTexts[4]}
        </h1>
        return(
          <ul>
            {faqData.map((item, index) => {
              const bgColor = index % 3 === 0 ? 'outline outline-yellow-300/85' : index % 3 === 1 ? 'outline outline-red-800/85' : 'outline outline-blue-800/85';
              return (
                <li key={index} className="mb-4">
                  <div onClick={() => toggleAnswer(index)} className="cursor-pointer font-medium text-white ml-64 mt-10 text-normal">
                    {item.question}
                  </div>
                  {openIndex === index && (
                    <div className={`mt-3 p-4 rounded ${bgColor} text-white ml-72 mr-72`}>
                      {item.answer}
                      {item.link && (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block w-48 font-bold text-white hover:font-black">
                          {item.link.text}
                        </a>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          )
        </div>
    </div> 
  )
}


