import React, { useState, useEffect, useMemo } from 'react';
import './index.css';
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
      answer: "We expect around 400 hackers from not just Rice, but schools all over the world!"
    },
    {
      question: "How many hackers per team are permitted?",
      answer: "Team are limited to 4 hackers. That being said, you don't have to have 4 hackers to compete."
    },
    {
      question: "Who is eligible to participate in HackRice?",
      answer: 'Any current undergraduate student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the  ',
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
    <div className="flex flex-col justify-center items-center bg-black h-auto w-screen m-auto left-0 right-0 overflow-x-hidden">
      <a id="mlh-trust-badge" className="absolute w-20 h-auto z-10 top-0 md:top-0 right-5 md:w-24 lg:w-36" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" 
          alt="Major League Hacking 2025 Hackathon Season">
        </img>
      </a>
 {/* -------------- HEADER --------------- */} 
      <div id="home" className="flex flex-col h-screen w-screen justify-center items-center scroll-mt-24">
        {/* -------------- COVER IMAGE --------------- */}
        <div className = "lg:hidden h-auto w-screen lg:w-1/2 lg:mt-5 mx-auto">
          <img src= '/assets/mobilelogo.GIF' alt="hackrice logo"></img>
        </div>
        <div className = "hidden lg:block h-auto w-screen lg:w-2/3 mx-auto">
          <img src= '/desktoplogo.GIF' alt="hacklogo"></img>
        </div>
      </div>
      
  {/* -------------- ABOUT --------------- */}
      <div id="about" className="flex flex-col items-center mx-auto left-0 right-0 mb-32 md:mb-44 lg:mb-20 scroll-mt-24">
        <h1 className=" text-white font-extrabold text-3xl lg:text-4xl text-center">About</h1>
        <h2 className="text-blue-800 text-opacity-90 font-extrabold text-xl text-center mt-3 md:ml-0 md:mr-0 ml-10 mr-10">
        {displayedTexts[0]}
        </h2>
          <div className="flex flex-col items-center lg:grid lg:grid-cols-2 mt-12 lg:mt-0 lg:ml-12 xl:ml-28">
          {/* -------------- INFORMATION --------------- */}
            <div className="relative flex flex-col items-center justify-center h-100 w-81 sm:h-83 sm:w-96 lg:h-96">
              <div className="absolute outline bg-blue-800 bg-opacity-20 outline-blue-800 rounded-xl ml-4 mt-8 p-8 h-99 w-11/12 sm:h-84 md:1/2 lg:h-3/4 mx-auto">
                <h1 className="hidden font-medium text-lg text-center">
                  HackRice is Rice University's annual hackathon. It brings together over 400 of the brightest minds in the country to develop & showcase their creative and entrepreneurial talents. 
                  Participants form teams of up to 4 to work on a project — typically software, and sometimes hardware — in an environment designed for collaboration. Teams showcase projects after 36 hours of hacking. 
                  <br/> <br/> This is an excellent opportunity for students to build a network of creators, receive internship & job offers from world-class sponsors, and learn modern tools & systems.
                </h1>
              </div>
              <div className="absolute outline bg-blue-800 bg-opacity-20 outline-blue-800 rounded-xl mr-4 p-8 h-99 w-11/12 sm:h-84 md:1/2 lg:h-3/4 mx-auto">
                <h1 className="text-white font-medium text-lg text-center">
                  HackRice is Rice University's annual hackathon. It brings together over 400 of the brightest minds in the country to develop & showcase their creative and entrepreneurial talents. 
                  Participants form teams of up to 4 to work on a project — typically software, and sometimes hardware — in an environment designed for collaboration. Teams showcase projects after 36 hours of hacking. 
                  <br/> <br/> This is an excellent opportunity for students to build a network of creators, receive internship & job offers from world-class sponsors, and learn modern tools & systems.
                </h1>
              </div>
            </div>
        {/* -------------- APPLY --------------- */}
            <div className="relative flex flex-col items-center lg:ml-20 mt-10 sm:mt-20 lg:mt-0 h-81 w-81 sm:h-80 sm:w-84 md:w-96 lg:w-81">
              <div className="absolute outline outline-blue-800 rounded-xl mr-4 p-8 h-80 w-11/12 md:h--3/4 md:w-80">
                <h1 className="invisible text-center text-white text-xl font-medium sm:mb-4 sm:mt-0 md:mt-4 lg:block">September 20, 2024 - September 22, 2024</h1> 
                <h2 className="invisible text-center text-white text-xl font-medium max-w-64 sm:max-w-full lg:block">Rice Memorial Center @ Rice University</h2>
              </div>
              <div className = "absolute bg-gradient-to-b from-blue-900/70 via-blue-800/70 to-orange-700/70 bg-opacity-15 rounded-xl ml-4 md:ml-8 mt-4 p-8 h-80 w-11/12 sm:h-81 md:h-81 md:w-81">
                <h1 className = "invisible text-center text-white text-xl font-medium sm:mb-4 mb-3 md:mt-4">September 20, 2024 - September 22, 2024</h1> 
                <h2 className = "invisible text-center text-white m-auto text-xl font-medium max-w-64 sm:max-w-full">Rice Memorial Center @ Rice University</h2>
              </div>
              <div className = "absolute flex flex-col items-center justify-center bg-black bg-opacity-75 rounded-xl ml-5 md:ml-8 mt-8 md:mt-8 p-3 h-72 w-5/6 sm:h-73 sm:w-82 md:h-73 md:w-73">
                <h1 className = "text-center text-white text-xl sm:text-2xl font-medium">September 20-22, 2024</h1> 
                <h2 className = "text-center text-white text-xl sm:text-2xl mt-6 font-medium">Rice Memorial Center <br/> @ Rice University</h2>
                <a className="flex items-center justify-center hover:outline-orange-600/40 bg-blue-800 hover:bg-orange-600/15 bg-opacity-20 outline outline-blue-800 rounded-xl text-center text-white text-xl sm:text-2xl font-bold mt-6 h-14 w-36 sm:w-40" href="https://linktr.ee/hackrice14" target="_blank" rel="noreferrer"> apply now </a> 
              </div>
            </div>
          </div>
      </div>
      
      {/* -------------- SCHEDULE --------------- */}
      <div id="schedule" className="flex flex-col w-11/12 mb-20 scroll-mt-24">
        <h1 className = "text-center text-white font-extrabold text-4xl">Schedule</h1>
        <h2 className="text-center text-yellow-300/85 font-extrabold text-xl mt-5 ml-10 mr-10 md:ml-0 md:mr-0">
          {displayedTexts[1]}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 mb-10 mx-4">
          {/* -------------- FRIDAY --------------- */}
          <div className="flex flex-col bg-black items-center rounded-lg">
            <button className="relative outline outline-yellow-300/85 align-top rounded-xl bg-black text-center text-xl text-yellow-300/85 md:text-2xl font-bold h-12 w-40 md:h-16 md:w-52">Friday 9/20</button>
            <button className="bg-black hover:scale-110 rounded-lg text-white text-left mt-10 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Rice Student Check-In</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">4:00 PM </h2>
              </div> Check in for Rice Students!
            </button> 
            <button className=" bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Non-Rice Student Check-In</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">4:15 PM </h2>
              </div> Check in for Non-Rice students!!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Networking/Recruiting</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">4:30 PM </h2>
              </div> Network with our sponsors at Sammy's!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Opening Ceremony</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">6:30 PM </h2>
              </div> We will be detailing the tracks/challenges, prizes, sponsorship, and more!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Keynote Speaker</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">7:00 PM </h2>
              </div> Join us for our keynote presentation!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Dinner</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">7:30 PM </h2>
              </div> Come to Ray Courtyard for dinner!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Hacking Begins</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">8:00 PM </h2>
              </div> The hackathon begins! Start hacking!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">First Timer's Workshop</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">8:30 PM </h2>
              </div> Pick up and strengthen basic skills that will help you with your project!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Arts & Crafts</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">10:00 PM </h2>
              </div> Refresh your creativity with some arts and crafts!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Late Night Snack</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">11:00 PM </h2>
              </div> Join us for a late night snack!
            </button> 
          </div>
          {/* -------------- SATURDAY --------------- */}
          <div className="bg-black flex flex-col items-center rounded-lg mt-12 lg:mt-0">
          <button className="relative text-center text-xl bg-black text-yellow-300/85 md:text-2xl font-bold align-top rounded-xl outline outline-yellow-300/85 h-12 w-40 md:h-16 md:w-52">Saturday 9/21</button>
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-10 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Workshop #1</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">10:00 AM </h2>
              </div> Join us for our first workshop run by the board!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Typing Tournament</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">11:00 AM </h2>
              </div> Show off your typing speed at our tournament!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Lunch</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">12:30 PM </h2>
              </div> Lunch time!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">MathWorks Workshop</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">2:00 PM </h2>
              </div> Join us for a MathWorks workshop!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Trivia</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">3:00 PM </h2>
              </div> Take a quick break and test your trivia knowledge!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">MLH Workshop</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">4:00 PM </h2>
              </div> Join us for a MLH workshop!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Workshop #2</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">6:00 PM </h2>
              </div> Come to our second workshop run by the HackRice board!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Dinner</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">7:30 PM </h2>
              </div> Dinner time!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Workshop #3</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">9:00 PM </h2>
              </div> Ready for our third workshop run by the HackRice board?
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Ramen Bar & Glowsticks</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">11:00 PM </h2>
              </div> Have some late night fun with our ramen bar and glowsticks! 
            </button> 
          </div>
          {/* -------------- SUNDAY --------------- */}
          <div className="bg-black flex flex-col items-center rounded-lg mt-12 lg:mt-0">
            <button className="relative text-center text-xl bg-black text-yellow-300/85 md:text-2xl font-bold align-top rounded-xl outline outline-yellow-300/85 h-12 w-40 md:h-16 md:w-52">Sunday 9/22</button>
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-10 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Breakfast</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">8:30 AM </h2>
              </div> Early morning breakfast!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Hacking Ends</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">9:00 AM </h2>
              </div> Submissions close on Devpost!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Judging Begins</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">9:30 AM </h2>
              </div> Judges begin reviewing your submissions!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Top 5 Teams Present</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">2:00 PM </h2>
              </div> We'll announce the top 5 finalists and invite them to present live in front of our judges!
            </button> 
            <button className="bg-black hover:scale-110 text-white text-left rounded-lg mt-5 md:mt-0 md:p-3 w-full">
              <div className="flex justify-between">
                <h1 className="mb-1 font-semibold text-base md:text-lg">Closing Ceremony</h1>
                <h2 className="ml-3 font-semibold text-right text-lg">3:00 PM </h2>
              </div> Winners will be announced and prizes awarded!
            </button> 
          </div>
        </div>
      </div>
      {/* --------------- TRACKS --------------- */}
      <div id="tracks" className="bg-black flex flex-col items-center justify-center mb-36 md:mb-44 h-full scroll-mt-24">
        <div className = "flex flex-col mx-auto">
          <h1 className = "text-white font-extrabold text-4xl text-center">Tracks</h1>
          <h2 className=" text-blue-800 font-extrabold text-xl text-center mt-5">
            {displayedTexts[2]}
          </h2>
              <div className = "md:grid md:grid-cols-4 mt-10">
                <div className = "relative flex flex-col md:col-start-2 md:col-span-2 w-72 h-40 mx-auto items-center justify-center">
                  <div className = "absolute outline bg-blue-800 bg-opacity-15 outline-blue-800 rounded-xl w-65 md:w-72 h-44 flex flex-col items-center justify-center"></div>
                  <div className = "absolute outline bg-black outline-blue-800 rounded-xl w-56 md:w-60 h-32 flex flex-col items-center justify-center">
                    <h1 className ="mb-3 font-semibold text-2xl text-center text-white">Game <br/> Development</h1>
                  </div>
                  <img className = "absolute mt-36 h-28 w-28" src="/assets/BG_Pacman.png" alt="track1"/>
                  <img className = "absolute mt-36 h-28 w-28" src="/assets/Center_Pacman.png" alt="track1"/>
                </div>
              </div>

              <div className = "md:grid md:grid-cols-4 mt-2 gap-10">
                <div className = "relative flex flex-col md:col-span-2 w-72 h-40 mt-20 items-center justify-center">
                  <div className = "absolute flex flex-col justify-center outline bg-blue-800 bg-opacity-15 outline-blue-800 rounded-xl w-65 h-44"></div>
                  <div className = "absolute flex flex-col justify-center outline bg-black outline-blue-800 rounded-xl w-56 md:w-60 h-32">
                    <h1 className ="font-semibold text-2xl text-center text-white z-10">Education</h1>
                  </div>
                  <img className = "absolute mr-62 md:mr-65 mt-10 mb-10 h-28 w-28" src="/assets/BG_Ghost.png" alt="track2"/>
                  <img className = "absolute mr-62 md:mr-65 mt-10 mb-10 h-28 w-28" src="/assets/Pink_Left_Ghost2.png" alt="track2"/>
                </div>
            
                <div className = "relative flex flex-col md:col-span-2 md:col-start-3 w-72 h-40 mt-20 items-center justify-center">
                  <div className = "absolute flex flex-col justify-center outline bg-blue-800 bg-opacity-15 outline-blue-800 rounded-xl w-65 md:w-72 h-44"></div>
                  <div className = "absolute flex flex-col justify-center outline bg-black outline-blue-800 rounded-xl w-56 md:w-60 h-32">
                    <h1 className ="font-semibold text-2xl text-center text-white z-10">Healthcare</h1>
                  </div>
                  <img className = "absolute ml-60 md:ml-65 mt-10 mb-10 h-28 w-28" src="/assets/BG_Ghost.png" alt="track2"/>
                  <img className = "absolute ml-60 md:ml-65 mt-10 mb-10 h-28 w-28" src="/assets/Teal_Right_Ghost2.png" alt="track2"/>
                </div>
              </div>
        
        </div>
      </div>
      {/* --------------- SPONSORS --------------- */}
      <div id="sponsors" className="bg-black flex flex-col items-center justify-center mb-28 md:mb-32 h-full scroll-mt-24">
      <h1 className = "text-white font-extrabold text-4xl text-center ">Sponsors</h1>
      <h2 className=" text-orange-800 font-extrabold text-xl text-center mt-5">
        {displayedTexts[3]}
      </h2>
        <div className = "flex flex-col mx-auto">
          <div className = "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-8 gap-x-7 lg:gap-x-12">
             {/* --------------- ROW 1 --------------- */}
            <div className = "relative flex items-center justify-center w-56 h-56 mx-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/capitalone_white_logo.png" alt="capitalone" className="w-40 h-auto"/>
              </div>
            </div>
            <div className = "relative flex items-center justify-center w-56 h-56 mx-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/paycom-logo-white.png" alt="paycom" className="w-40 h-auto"/>
              </div>
            </div>
            <div className = "relative flex items-center justify-center w-56 h-56 mx-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/chevron_white_logo.png" alt="chevron" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex items-center justify-center w-56 h-56 m-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/RiceCS_logo.png" alt="ricecs" className="w-72 h-auto"/>
              </div>
            </div>
             {/* --------------- ROW 2 --------------- */}
             <div className = "relative flex items-center justify-center w-56 h-56 m-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/roblox_white.png" alt="roblox" className="w-44 h-auto"/>
              </div>
            </div>
            <div className = "relative flex items-center justify-center w-56 h-56 m-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/Mathworks_logo.png" alt="mathworks" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex items-center justify-center w-56 h-56 m-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/VEDO_logo.png" alt="vedo" className="w-44 h-auto"/>
              </div>
            </div>
            <div className = "relative flex items-center justify-center w-56 h-56 m-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src={NORDsponsor2} alt="nordvpn" className="w-80 h-auto"/>
              </div>
            </div>
            {/* --------------- ROW 3 --------------- */}
            <div className = "relative flex items-center justify-center w-56 h-56 m-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/kenkennedywhitelogo.png" alt="kenkennedy" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex items-center justify-center w-56 h-56 mx-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src={NORDsponsor1} alt="nordpass" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative items-center justify-center flex w-56 h-56 mx-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/REA-Logo_Formal.png" alt="rea" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex items-center justify-center w-56 h-56 mx-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/NORD_Incogni_logo.png" alt="incogni" className="w-44 h-auto"/>
              </div>
            </div>
            {/* --------------- ROW 4 --------------- */}
            <div className = "relative flex items-center justify-center w-56 h-56 m-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/standout_white.png" alt="standout" className="w-48 h-auto"/>
              </div>
            </div>
            <div className = "relative flex items-center justify-center w-56 h-56 m-auto">
              <div className = "absolute flex items-center justify-center bg-orange-800 bg-opacity-15 outline outline-orange-800 rounded-xl h-36 w-52 lg:h-40 lg:w-60">
                <img src="/assets/sponsors/sailywhite.png" alt="saily" className="w-48 h-auto"/>
              </div>
            </div>
          </div>
          </div>
      </div>
      {/* --------------- FAQ --------------- */}
      <div id="faq" className="flex flex-col items-center w-5/6 scroll-mt-24">
        <h1 className = "text-white font-extrabold text-4xl text-center">FAQ</h1>
        <h1 className = "text-yellow-300/85 font-extrabold text-xl text-center mt-5 mb-5 ml-10 mr-10 md:ml-0 md:mr-0">
          {displayedTexts[4]}
        </h1>
          <ul>
            {faqData.map((item, index) => {
              const bgColor = index % 3 === 0 ? 'bg-yellow-300 bg-opacity-30 outline outline-yellow-300/85' : index % 3 === 1 ? 'bg-red-800 bg-opacity-30 outline outline-red-800/85' : 'bg-blue-800 bg-opacity-30 outline outline-blue-800/85';
              return (
                <li key={index} className="flex flex-col mb-5">
                  <div onClick={() => toggleAnswer(index)} className="flex flex-col mx-auto w-11/12 cursor-pointer font-medium text-white text-lg text-left mt-10">
                    {item.question}
                  </div>
                  {openIndex === index && (
                    <div className={`flex flex-col rounded w-11/12 lg:w-83  ${bgColor} text-white text-lg ml-3 sm:ml-6 lg:ml-5 mt-5 p-4`}>
                      {item.answer}
                      {item.link && (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold">
                          {item.link.text}
                        </a>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
      </div>
       {/* --------------- COPYRIGHT --------------- */}
       <h1 className="text-center text-white mt-20">© 2024 HackRice. All Rights Reserved.
       </h1>
    </div> 
  )
}


