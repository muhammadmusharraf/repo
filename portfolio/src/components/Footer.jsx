import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-blue-500 min-h-[200px] p-5'>
      <h1 className='font-bold text-3xl text-white'>Let's make something <br />amazing new</h1>
      <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 justify-around mt-6'>

        <div className='flex flex-col items-start'>
          <div className='flex items-center'>
            <MdEmail size={30} className='text-whitea' />
            <h2 className='pl-2 text-center text-white'>Email:</h2>
          </div>
          <h3 className='pl-8 text-white'>musharrafsab3@gmail.com</h3>

          <div className='flex mt-4'>
            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/muhammad-musharraf-05919722b" target="_blank" rel="noopener noreferrer" className='text-white'>
              <FaLinkedin size={30} />
            </a>
          </div>
          <div className='flex mt-4'>
            {/* LinkedIn Link */}
            <a href="https://github.com/muhammadmusharraf"target="_blank" rel="noopener noreferrer" className='text-white'>
            <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div>
          <h1 className='font-bold text-xl text-white'>Links</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
