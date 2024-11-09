import React from "react";
import Com from "../assets/Conpany.jpeg";
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <div className="flex items-start justify-start px-6 py-8 sm:px-10 md:px-16 lg:px-20 xl:px-24 bg-black">
      <div className="flex flex-col space-y-5 items-center justify-center w-full max-w-7xl">
        <div className="flex space-x-4 items-center justify-center py-5">
          <p className="text-5xl leading-10 text-white">My Experience</p>
        </div>
        <div className="flex flex-col space-y-8 items-start justify-start w-full px-6 py-10 rounded-lg">
          <div className="flex flex-col space-y-7 items-start justify-start p-6 border rounded-lg border-gray-500">
            <div className="flex space-x-2.5 items-center justify-between w-full">
              <div className="flex space-x-8 items-center justify-start">
                <Image src={Com} width={32} height={32} alt="Logo" />
                <p className="text-2xl leading-7 text-center text-white">
                  Full Stack Intern
                </p>
              </div>
              <p className="text-base leading-tight text-center text-gray-300">
                May 2023 - Aug 2023
              </p>
            </div>
            <p className="text-base tracking-wide leading-normal text-gray-300">
              As a full stack developer intern I had to be responsible for web development on the client end and the server end. Completing a full stack development internship is a great way to learn new skills and start your journey as a professional full stack developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;