"use client"
import gsap from 'gsap';
import React, { useEffect } from 'react'

function Intro1() {
    useEffect(() => {
        // Select all the spans inside the .text-container div
        const letters = document.querySelectorAll(".text-container span");
    
        // Define the animation properties
        const animation = gsap.timeline({
          paused: true, // Pause the timeline initially
        });
    
        letters.forEach((letter, index) => {
          // Animate letter color from white to blue
          animation.to(letter, {
            color: "blue",
            duration: 0.5,
          });
        });
    
        // Listen for scroll events
        window.addEventListener("scroll", () => {
          // Calculate the scroll progress as a percentage
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const scrollProgress = (scrollY / windowHeight) * 100;
    
          // Update the timeline's progress based on scroll progress
          animation.progress(scrollProgress / 100);
        });
    
        // Start the animation when the component mounts
        animation.play();
      }, []);
  return (
   <div className='container'>
     <h1 className="container text-9xl md:text-7xl lg:text-9xl font-semibold mb-2 animate-fade-in relative z-10 text-gray-700">
      
       <div className="text-container">
        {Array.from(" Shaping style,one pixel at a time ").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
      <button id="start-animation-button">Start Animation</button>
    </h1>
   </div>

  )
}

export default Intro1