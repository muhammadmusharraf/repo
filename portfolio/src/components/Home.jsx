import React from 'react';
import pic from '../components/pic.jpg';

const Home = () => {
  return (
    <div className='bg-white min-h-screen p-8'>
      <div className='flex flex-col md:flex-row pt-8'>
        {/* Name section */}
        <div className='text-black bg-gray-200 pt-8 md:w-[40%] w-full md:ml-5 rounded-e-3xl'>
          <h1 className='ml-2 mt-12 text-2xl font-bold'>Hey there, I'm <span className='text-blue-500'>M Musharraf</span></h1>
          <p className='m-2 text-gray-700'>
            Detail-oriented web developer focused on teamwork and innovative solutions, ensuring impeccable code and effective client delivery.
          </p>
          <button className='bg-blue-500 text-white rounded-md text-center mt-4 m-2 w-20 h-10'>
            Let's Talk
          </button>
        </div>

        {/* Image section */}
        <div className='mt-8 md:mt-0 md:ml-32 ml-auto mr-auto'>
          <img src={pic} className='w-80 rounded-lg border-4 border-blue-500' />
        </div>
      </div>
    </div>
  );
}

export default Home;
