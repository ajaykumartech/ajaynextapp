import React from 'react'
import { FaFileDownload, FaFilePdf } from 'react-icons/fa'

function Resume() {
  return (
    <div className="bg-white p-8 mb-16 mt-8">
    <h2 className="text-6xl font-semibold mb-4 justify-center text-center mt-16">My Resume</h2>
    <div className="flex space-x-6 mb-8 justify-center p-4">
    <div className="bg-white flex space-x-6 mb-8 p-8 rounded-lg">
    <a
        href="/Ajay_CV.pdf" // Replace with the actual path to your resume PDF
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-gray-100 text-gray-800 py-2 px-2 border rounded-lg hover:text-white hover:bg-gray-300 transition duration-300 ease-in-out"
      >
        <FaFilePdf  size={18} className="mr-2"/>
        View Resume 
      </a>

      <a
        href="/Ajay_CV.pdf"
        download="Ajay_CV.pdf"
        className="flex items-center bg-gray-100 text-gray-800 py-2 px-2 border rounded-lg hover:text-white hover:bg-gray-300 transition duration-300 ease-in-out"
      >
        <FaFileDownload size={18} className="mr-2" />
        Download Resume
      </a>
    </div>
    </div>
  </div>
  )
}

export default Resume