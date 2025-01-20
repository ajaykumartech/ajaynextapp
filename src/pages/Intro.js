"use client";
import Card from "@/Ui/Card";
import gsap, { Power2 } from "gsap";
import Head from "next/head";
import React, { useEffect } from "react";
import "./Intro.css";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Intro() {


  useEffect(() => {
    const container = document.getElementById("spiral-container");
const content = document.querySelector(".content-to-animate");
    // Create a GSAP timeline for the spiral animation
const tl = gsap.timeline();

// Define the number of spirals and the duration of the animation
const numSpirals = 3;
const duration = 2;

// Define the starting and ending positions
const startX = 0;
const startY = 0;
var endX = 10; // Adjust as needed
var endY = 0;   // Adjust as needed

// Calculate the angle increment for each step
const angleIncrement = 360 * numSpirals;

// Create the spiral animation
for (let i = 0; i < numSpirals; i++) {
    tl.to(content, {
        duration: duration / numSpirals,
        x: "+=" + endX,
        y: "+=" + endY,
        rotation: angleIncrement,
        ease: "power1.inOut"
    });
    // Update the end position for the next step
    endX *= -1;
    endY *= -1;
}

// Repeat the animation indefinitely
tl.repeat(1);

// Adjust the animation speed if needed
// tl.timeScale(2); // Speed up the animation

// Adjust additional styles for the content element as needed
// gsap.set(content, { /* additional styles */ });



    const animateElement = gsap.to(".element-class", {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    ScrollTrigger.create({
      trigger: ".element-class",
      start: "top center",
      end: "bottom center",
      animation: animateElement,
      scrub: true,
    });
    // Define animations for each card
    const card1Animation = gsap.to("#card1", {
      opacity: 0,
      y: -50,
      duration: 1,
      paused: true,
    });

    const card2Animation = gsap.to("#card2", {
      opacity: 0,
      y: -50,
      duration: 1,
      paused: true,
    });

    const card3Animation = gsap.to("#card3", {
      opacity: 0,
      y: -50,
      duration: 1,
      paused: true,
    });

    const card4Animation = gsap.to("#card4", {
      opacity: 0,
      y: -50,
      duration: 1,
      paused: true,
    });

    // Trigger animations on scroll
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY >= 0 && scrollY < 300) {
        card1Animation.play();
      } else {
        card1Animation.reverse();
      }

      if (scrollY >= 300 && scrollY < 600) {
        card2Animation.play();
      } else {
        card2Animation.reverse();
      }

      if (scrollY >= 600 && scrollY < 900) {
        card3Animation.play();
      } else {
        card3Animation.reverse();
      }

      if (scrollY >= 900 && scrollY < 1200) {
        card4Animation.play();
      } else {
        card4Animation.reverse();
      }
    });
    // Example animation
    gsap.from(".my-element", 1, {
      x: -100,
      opacity: 0,
      ease: Power2.easeInOut,
    });
  }, []);
  return (
    <>

     <div id="spiral-container"> 

     <div className="content-to-animate animate-flip-horizontal flex flex-col justify-center items-center h-screen bg-white-200 p-8">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-600">
          Hello! My Name is
        </p>
        <div className="relative">
          <div className="my-element">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-2 animate-fade-in relative z-10 text-gray-700">
              <span className="animate-blink animate-spin-slow">Ajay</span>
              &nbsp;
              <span className="animate-blink animate-spin-slowest">kumar</span>
              &nbsp;
              <span className="animate-blink animate-spin-fast">Josyula</span>
            </h1>
          </div>
        </div>
        <p className="text-2xl md:text-3xl lg:text-3xl text-gray-600">
          I'm a Full stack Developer
        </p>
      </div>
     </div>
      {/* <div className="elements-class h-1/2 bg-red-900">
        <div className="cards-container">
          <Card id="card1" title="Card 1" />
          <Card id="card2" title="Card 2" />
          <Card id="card3" title="Card 3" />
          <Card id="card4" title="Card 4" />
        </div>
      </div> */}
    </>
  );
}

export default Intro;
