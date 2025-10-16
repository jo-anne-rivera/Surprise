import React, { useState, useEffect } from 'react';
import Polaroid from './components/Polaroid';
import Countdown from './components/Countdown';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showPolaroids, setShowPolaroids] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 300) {
        setShowPolaroids(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const polaroids = [
    {
      image: "./img/IMG_2792.jpeg",
      caption: "First solo photo together!",
      rotation: -3
    },
    {
      image: "./img/IMG_1806 2.JPEG",
      caption: "First date?! :O",
      rotation: 4
    },
    {
      image: "./img/IMG_3815.JPEG",
      caption: "Your visit to me!",
      rotation: -2
    },
    {
      image: "./img/IMG_5091.JPEG",
      caption: "Longest visit everrr (so far)",
      rotation: 5
    },
    {
      image: "./img/IMG_5252.JPG",
      caption: "Enjoying the simplest of moments together :)",
      rotation: -4
    }
  ];

  const heroOpacity = Math.max(1 - scrollY / 500, 0);
  const heroScale = Math.max(1 - scrollY / 2000, 0.8);

  return (
    <div className="bg-gradient-to-br from-amber-50 via-rose-50 to-pink-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap');
        .font-handwriting {
          font-family: 'Caveat', cursive;
        }
        .font-script {
          font-family: 'Dancing Script', cursive;
        }
        .font-japanese {
          font-family: 'Klee One', cursive;
        }
        html {
          scroll-behavior: smooth;
        }`
      }</style>
      
      {/* Hero Section */}
      <div 
        className="min-h-screen flex flex-col items-center justify-center px-4 sticky top-0"
        style={{
          opacity: heroOpacity,
          transform: `scale(${heroScale})`,
          pointerEvents: scrollY > 400 ? 'none' : 'auto'
        }}
      >
        <h1 className="text-8xl md:text-9xl font-script text-center mb-8 text-rose-900 animate-fade-in">
          Happy Anniversary Ryokun!
        </h1>
        <p className="text-3xl md:text-4xl font-handwriting text-center text-rose-700 mb-16 animate-fade-in-delay">
          These past 5 months with you have been the best ever!<br></br>Shall we have a throwback?
        </p>
        <div className="animate-bounce mt-8">
          <svg 
            className="w-12 h-12 text-rose-400" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Polaroids Section */}
      <div className="relative bg-gradient-to-br from-amber-50 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-handwriting text-center text-rose-900">
            Our Memories Together
          </h2>
          <p className="text-3xl font-handwriting text-center mb-20 text-rose-900">A polaroid per month ;D</p>
          
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {polaroids.map((polaroid, index) => (
              <Polaroid
                key={index}
                image={polaroid.image}
                caption={polaroid.caption}
                rotation={polaroid.rotation}
                index={index}
                isVisible={showPolaroids}
              />
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <p className="text-4xl font-handwriting text-rose-800 mb-16">
              Here's to many more adventures together! ♡
            </p>
            
            <Countdown />

            <p className="text-4xl font-japanese text-rose-900 mt-16">
              大好きだよ!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1.5s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
}