import React from "react";

function Intro() {
  return (
    <div className="animate-flip-horizontal flex flex-col justify-center items-center h-screen bg-white-200 p-8">
      <p className="text-3xl md:text-4xl lg:text-5xl text-gray-600">
        Hello! My Name is
      </p>
      <div className="relative">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-2 animate-fade-in relative z-10 text-gray-700">
          <span className="animate-blink animate-spin-slow">Ajay</span>
          &nbsp;
          <span className="animate-blink animate-spin-slowest">kumar</span>
          &nbsp;
          <span className="animate-blink animate-spin-fast">Josyula</span>
        </h1>
      </div>
      <p className="text-2xl md:text-3xl lg:text-3xl text-gray-600">
        I'm a Frontend Web Developer
      </p>
    </div>
  );
}

export default Intro;
