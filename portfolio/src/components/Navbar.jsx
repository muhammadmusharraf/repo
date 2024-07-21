import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const[isOpen,setisOpen]=useState(false);
  

  return (
    <>
    {/* Windwow View */}

    <div className='flex bg-blue-500 h-16 w-[100%] items-center   space-x-14 '>


    <div className='text-white ml-4'>
       <h2 className='font-extrabold'> <span className=''>Muhammad</span> Musharraf </h2>
       </div>

    <div className=' hidden md:flex space-x-8 font-bold  text-white ' >

   <Link to="/" className=''>  Home </Link>
   <Link to="/"> About   </Link>
   <Link to="/"> Services  </Link>
   <Link to="/"> Contact </Link>
    </div>
    
    <div className='md:hidden'>
                    <button onClick={() => setisOpen(!isOpen)} className='text-white focus:outline-none'>
                        <GiHamburgerMenu size={24} />
                    </button>
                </div>

                        </div>
       {/* Mobile View         */}
       {isOpen &&(
        <header className= 'flex-col md:hidden bg-blue-500'>
            <div className=' text-center space-y-6 font-bold  text-white ' >
 
         <Link to="/" className="block hover:underline"> Home </Link>
<Link to="/" className="block hover:underline"> About   </Link> 
<Link to="/" className="block hover:underline" > Services  </Link>
<Link to="/" className="block hover:underline"> Contact </Link>
 </div>

        </header>
       )}
    



    </>
  ) 
}

export default Navbar;
