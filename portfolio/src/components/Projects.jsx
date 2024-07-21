import React from 'react';

const Projects = () => {
  return (
    <div className='bg-white font-bold p-8'>
      <div className='flex justify-center mb-8'>
        <h1 className='text-blue-500 text-3xl'>My Latest Projects</h1>
      </div>
      <div className='text-black flex flex-col md:flex-row p-6 justify-center space-y-6 md:space-y-0 md:space-x-12'>

        <div className='flex flex-col space-y-4'>
          <h1>Personal Portfolio</h1>
          <h1>Todo Web App</h1>
          <h1>Counter Web App</h1>
          <h1>Weather Web App</h1>
        </div>

        <div className='flex flex-col space-y-4'>
          <h1>Amazon Clone</h1>
          <h1>Watches Website</h1>
          <h1>Authentication Website</h1>
          <h1>A-Wise Website</h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;
