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
        <div className = "text-white lg:hidden h-auto w-screen md:w-3/4 md:mt-5 mx-auto">
          <h1> coming soon. hackrice 15. september 19th-21st, 2025 @rice university. </h1>
        </div>
        <div className = "text-white hidden lg:block h-auto w-screen lg:w-2/3 mx-auto">
          <h1> coming soon. hackrice 15. september 19th-21st, 2025 @rice university.</h1>
        </div>
      </div>
      </div>
  )
}


