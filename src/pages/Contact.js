"use client";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

function Contact() {
  const [hide, setHide] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setHide(true);
    emailjs
      .sendForm(
        "service_8cfygq7",
        "template_l6kcpbq",  
        e.target,
        "OpStgdaG8nKN0ncSy"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setHide(false);
        e.target.reset();
        // Optionally, reset the form here
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
        setHide(false);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mb-16 mt-8">
      <h1 className="text-6xl font-semibold mb-4 justify-center text-center">
        Contact
      </h1>
      {hide && (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
     {!hide &&  <div className="p-8 rounded-lg shadow-lg mx-auto">
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-gray-600 font-medium mb-4"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full px-3 py-2 border-b-2 border-gray-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-gray-600 font-medium mb-4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full px-3 py-2 border-b-2 border-gray-500 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium mb-4"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border-b-2 border-gray-500 focus:outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>
      </div>}
    </div>
  );
}

export default Contact;
