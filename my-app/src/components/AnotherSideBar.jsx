import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { faBars, faUserLarge } from '@fortawesome/free-solid-svg-icons';

const AnotherSideBar = ({toggleSidebar}) => {
   
    return (
      <div className='flex-[4] min-h-[100vh] p-[0] border-r-[0.5px] border-solid bg-white border-gray-300 absolute top-0 left-0  h-full z-50'>
        <div className='flex flex-col gap-[40px] items-start p-[10px] h-[300px] border border-b-gray-300'>
          <div className='flex items-center gap-[20px]'>
            <img
                  src="/lg.png"
                  alt="Logo"
                  className='w-[240px] h-[60px] cursor-pointer'
                
              />
              <FontAwesomeIcon icon={faBars} className="w-[30px] h-[30px] cursor-pointer" onClick={toggleSidebar}/>


          </div>
                

          
          <div className='flex flex-col items-start  justify-start gap-[20px] w-[300px]'>
            <div className='flex items-start  justify-start gap-[15px] px-[30px] py-[10px] cursor-pointer'>
                <img
                src="/Vector.png"
                alt="Vector"
                className='w-[30px] h-[30px] cursor-pointer '
             
                />
                <span className='text-[20px] text-gray-500 cursor-pointer '>Dashboard</span>

            </div>
            <div className='flex items-start justify-start gap-[15px] bg-[#42A4DF] px-[30px] py-[10px] rounded-[9px] cursor-pointer'>
                <img
                src="/Gr.png"
                alt="Icon"
                className='w-[30px] h-[30px] cursor-pointer '
             
                />
                <span className='text-[20px] text-gray-500 '>P.P.E Violations</span>

            </div>
            
            
          </div>
        </div>
        <div className='flex flex-col gap-[40px] items-start p-[10px] h-[300px] border border-b-gray-300'>
            <div className='flex items-start justify-start gap-[15px]  px-[30px] py-[10px] '>
                    <img
                        src="/Vect.png"
                        alt="Vect"
                        className='w-[30px] h-[30px] cursor-pointer'
                       
                    />
                <span className='text-[20px] text-gray-500 '>P.P.Es</span>

            </div>
            <div className='flex items-start  justify-start gap-[15px] px-[30px] py-[10px] cursor-pointer'>
                <img
                    src="/Vect2.png"
                    alt="Vect2"
                    className='w-[30px] h-[30px] cursor-pointer'
                    
                />
                <span className='text-[20px] text-gray-500 '>Contractors</span>

            </div>
          
        <div className='flex items-start  justify-start gap-[15px] px-[30px] py-[10px] cursor-pointer'>  
            <FontAwesomeIcon
                icon={faUserLarge}
                className='w-[30px] h-[30px] text-blue-300 cursor-pointer'
               
            />
            <span className='text-[20px] text-gray-500 '>Workers</span>

        </div>
          
        </div>
      </div>
    );
  };
  

export default AnotherSideBar
