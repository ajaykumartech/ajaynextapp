import React from 'react'
import {
 
    FaLinkedin,
    FaGithub,
    FaGoogle
  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mx-auto">
    <div className="container mx-auto flex justify-between items-center">
      <p className="text-sm">&copy; 2023 Josyula Ajay Kumar</p>
      <div className="flex space-x-4 mt-2">
        <a
          href="https://www.linkedin.com/in/ajay-kumar-josyula-505227b2"
          target='_blank'
          className="hover:text-blue-500 transition duration-300 ease-in-out"
        >
         <FaLinkedin size={25} />
        </a>
        <a
          href="#"
          className="hover:text-blue-500 transition duration-300 ease-in-out"
        >
        < FaGoogle size={25} />
        </a>
        <a
          href="https://github.com/ajaykumartech"
          target="_blank"
          className="hover:text-blue-500 transition duration-300 ease-in-out"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer