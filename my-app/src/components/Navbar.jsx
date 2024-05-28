import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className='h-[53px] border-[0.5px] border-solid  border-gray-300 flex items-center  text-[14px]'>
      <FontAwesomeIcon icon={faBars} className="w-[30px] h-[30px]" />
    </div>
  )
}

export default Navbar
