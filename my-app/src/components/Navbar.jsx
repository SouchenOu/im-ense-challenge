import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({toggleSidebar}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const FunctionMenu = () =>{
    setOpen(!open);

  }
  return (
    <div className=' h-[80px] border-[0.5px] border-solid  border-gray-300 flex items-center justify-between ' >
      <div className='flex items-center justify-center gap-[20px] p-[30px]'>
        <FontAwesomeIcon icon={faBars} className="w-[30px] h-[30px] cursor-pointer" onClick={toggleSidebar}/>
        <h1 className='text-[30px]'>Overview</h1>

      </div>
      <div className='flex items-center justify-center gap-[60px] w-[600px]  '>
        {open && <div className='absolute top-[90px] right-[30px] w-[360px] bg-white shadow-lg border border-gray-300 rounded-md z-10'>
              <ul className=' flex flex-col items-center justify-center p-[20px] gap-[30px]'>
                <div className='border-b-[1px] w-[350px] p-[20px] '> 
                  <span className='text-[25px] fot-bold '>BESIX Group</span>
                  <p className='text-[25px] text-gray-500'>besix.group@besix.be</p>

 
                </div>
                <div className='gap-[20px] border-b-[1px] w-[350px]'>
                  <div className='flex items-center gap-[10px] p-[10px] hover:bg-gray-100 cursor-pointer'>
                    <img className='w-[30px] h-[30px] cursor-pointer' src="/seetingsIcon.svg" alt=""  onClick={toggleDropdown}/>
                    <li className=' text-[30px] p-[10px] '>Profile settings</li>
                  </div>
                  <div className='flex items-center gap-[10px] p-[10px] hover:bg-gray-100 cursor-pointer'>
                    <img className='w-[30px] h-[30px] cursor-pointer ' src="/Vector.svg" alt=""  onClick={toggleDropdown}/>
                    <li className='p-[10px] text-[30px]  text-gray-400' >Our policies</li>
                  </div>
                  
                </div>
                <div className='flex items-center  gap-[10px] p-[10px] w-[350px] hover:bg-gray-100 cursor-pointer'>
                  <img className='w-[30px] h-[30px] cursor-pointer' src="/logoutIcon.svg" alt=""  onClick={toggleDropdown}/>
                  <li className='p-[10px] text-[30px]  text-gray-400'>Log out</li>
                </div>
               
              </ul>
            </div> }
        <div className='flex items-center justify-center gap-[30px]'>
            <img className='w-[30px] h-[30px] cursor-pointer' src="/fontSize.png" alt=""/>
            <img className='w-[25px] h-[25px] cursor-pointer' src="/vect3.png" alt=""/>
            <img className='w-[25px] h-[30px] cursor-pointer' src="/notification.png" alt=""/>
            <img className='w-[30px] h-[30px] cursor-pointer' src="/english.png" alt=""  onClick={toggleDropdown}/>
            {isDropdownOpen && (
            <div className='absolute top-[90px] right-[180px] w-[250px] bg-white shadow-lg border border-gray-300 rounded-md z-10'>
              <ul>
                <div className='flex items-center gap-[10px] p-[15px]'>
                  <img className='w-[30px] h-[30px] cursor-pointer' src="/english.png" alt=""  onClick={toggleDropdown}/>
                  <li className='p-[10px] hover:bg-gray-100 cursor-pointer'>English (EN)</li>
                </div>
                <div className='flex items-center gap-[10px] p-[10px]'>
                  <img className='w-[40px] h-[40px] cursor-pointer ' src="/france.svg" alt=""  onClick={toggleDropdown}/>
                  <li className='p-[10px] hover:bg-gray-100 cursor-pointer text-gray-400' >Francais (FR)</li>
                </div>
                <div className='flex items-center gap-[10px] p-[15px]'>
                  <img className='w-[30px] h-[30px] cursor-pointer' src="/nederlands.svg" alt=""  onClick={toggleDropdown}/>
                  <li className='p-[10px] hover:bg-gray-100 cursor-pointer text-gray-400'>Nederlands (NL)</li>
                </div>
                <div className='flex items-center gap-[10px] p-[15px]'>
                  <img className='w-[30px] h-[30px] cursor-pointer' src="/spain.svg" alt=""  onClick={toggleDropdown}/>
                  <li className='p-[10px] hover:bg-gray-100 cursor-pointer text-gray-400'>Español (ES)</li>
                </div>
                <div className='flex items-center gap-[10px] p-[15px]'>
                  <img className='w-[30px] h-[30px] cursor-pointer' src="/germany.svg" alt=""  onClick={toggleDropdown}/>
                  <li className='p-[10px] hover:bg-gray-100 cursor-pointer text-gray-400'>Deutsch (DE)</li>
                </div>
              </ul>
            </div>
          )}
        </div>
        
        <div className='flex items-center justify-center gap-[30px]'>
          <div className='flex items-center gap-[10px]'>
            <img className='w-[40px] h-[40px]' src="/Ellipse1.png" alt=""/>
            <span className='text-[20px] text-gray-400 '>BESIX Group</span>

          </div>
         
          <FontAwesomeIcon icon={faChevronDown} className='w-[20px] h-[20px] text-gray-300 cursor-pointer'  onClick={()=>FunctionMenu()}/>
        </div>


      </div>
    </div>
  )
}

export default Navbar
