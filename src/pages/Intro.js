import React from 'react'

function Intro() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white-200 p-8">
    <p className="text-3xl md:text-4xl lg:text-5xl text-gray-600">
      Hello! My Name is
    </p>
    <div className="relative">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-2 animate-fade-in relative z-10 text-gray-500">
        <span className="animate-blink animate-spin-slow">A</span>
        <span className="animate-blink animate-spin-slow">j</span>
        <span className="animate-blink animate-spin-medium">a</span>
        <span className="animate-blink animate-spin-fast">y</span>
        &nbsp;
        <span className="animate-blink">K</span>
        <span className="animate-blink animate-spin-slow">u</span>
        <span className="animate-blink animate-spin-medium">m</span>
        <span className="animate-blink animate-spin-fast">a</span>
        <span className="animate-blink animate-spin-fast">r</span>
        &nbsp;
        <span className="animate-blink">J</span>
        <span className="animate-blink animate-spin-slow">o</span>
        <span className="animate-blink animate-spin-medium">s</span>
        <span className="animate-blink animate-spin-fast">y</span>
        <span className="animate-blink animate-spin-slowest">u</span>
        <span className="animate-blink animate-spin-slowest">l</span>
        <span className="animate-blink animate-spin-slowest">a</span>
      </h1>
    </div>
    <p className="text-2xl md:text-3xl lg:text-3xl text-gray-600">
      I'm a Frontend Web Developer
    </p>
  </div>
  )
}

export default Intro