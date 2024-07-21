import React from 'react';
import { FaReact, FaCss3, FaHtml5, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiRedux, SiMongodb, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

const Skill = () => {
  return (
    <div className='min-h-screen bg-white p-8'>
      <div className='flex justify-center mb-8'>
        <h1 className='text-blue-500 font-bold text-3xl'>Skills & Experience</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-around'>

        {/* Skills */}
        <div className='mb-8 md:mb-0'>
          <h1 className='font-bold text-blue-500 text-center mb-4'>Skills</h1>

          <div className='text-black flex flex-col items-center'>
            <div className='mb-6'>
              <h1 className='text-blue-500 font-semibold mb-2'>Client Side</h1>
              <div className='flex flex-wrap justify-center space-x-6 space-y-6'>

                <div className='flex flex-col items-center'>
                  <FaHtml5 size={24} />
                  <h4>HTML</h4>
                </div>
                <div className='flex flex-col items-center'>
                  <FaCss3 size={24} />
                  <h4>CSS</h4>
                </div>
                <div className='flex flex-col items-center'>
                  <FaReact size={24} />
                  <h4>React</h4>
                </div>
                <div className='flex flex-col items-center'>
                  <RiTailwindCssFill size={24} />
                  <h4>Tailwind</h4>
                </div>
                <div className='flex flex-col items-center'>
                  <SiRedux size={24} />
                  <h4>Redux</h4>
                </div>
                <div className='flex flex-col items-center'>
                  <IoLogoJavascript size={24} />
                  <h4>JavaScript</h4>
                </div>
              </div>
            </div>
            <div className='mt-6 ml-0 pl-0'>
              <h1 className='font-semibold text-blue-500 '>Server Side</h1>
              <div className='flex flex-wrap justify-center space-x-6'>
                <div className='flex flex-col items-center'>
                  <FaNodeJs size={24} />
                  <h4>Node.js</h4>
                </div>
                <div className='flex flex-col items-center'>
                  <SiExpress size={24} />
                  <h4>Express.js</h4>
                </div>
                <div className='flex flex-col items-center'>
                  <SiMongodb size={24} />
                  <h4>MongoDB</h4>
                </div>
                <div className='flex flex-col items-center'>
                  <FaGithub size={24} />
                  <h4>GitHub</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h1 className='font-bold text-blue-500 text-center mb-4'>Experience</h1>
          <div className='text-black space-y-6'>
            <div className='text-center'>
              <h1>Craftooo Internship</h1>
              <h3 className='text-gray-500'>3 Months Internship as Full Stack Developer</h3>
            </div>
            <div className='text-center'>
              <h1>Xenosis Internship</h1>
              <h3 className='text-gray-500'>One Month Internship as Full Stack Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
