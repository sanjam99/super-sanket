import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Spline from "@splinetool/react-spline";

function Contact() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Spline 3D Background */}
      <Spline
        scene="https://prod.spline.design/Laox07UfM5LnrdSv/scene.splinecode"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Contact Form Content */}
      <div className="grid sm:grid-cols-2 relative z-10 bg-opacity-70 p-8 sm:p-16">
        <div className="flex flex-col justify-center items-start p-8 bg-opacity-80 rounded-lg">
          <input
            className="border-black border-2 rounded-md py-2 w-3/4 mb-4"
            placeholder="Your name"
          />
          <input
            className="border-black border-2 rounded-md py-2 w-3/4 mb-4"
            placeholder="Email"
          />
          <input
            className="border-black border-2 rounded-md py-2 w-3/4 mb-4"
            placeholder="Your Website"
          />
          <input
            className="border-black border-2 rounded-md py-2 w-3/4 mb-4"
            placeholder="How can I help you?"
          />
          <button className="flex flex-row bg-black text-center text-white hover:bg-white hover:text-black p-4 border-black border-2 rounded-lg mb-4">
            <p className="text-lg pr-2">Get in touch</p>
          </button>
          <div className="flex items-center justify-center w-10 h-10 p-6 border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
            <Link href="https://linkedin.com/company/faangpath">
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start p-4 bg-opacity-80 rounded-lg">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Let's talk for
            <br />
            Something Special
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl">
            sanketjambhulkar018@gmail.com
            <br />
            +91-7249754208 (Line Messaging only)
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
