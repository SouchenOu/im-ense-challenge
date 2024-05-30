import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const NewBar = ({onClose}) => {
  return (
    <div className="absolute top-0 right-[20px] w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center" onClick={onClose}>
      <div className="flex flex-col gap-[20px] violation-menu bg-white p-6 rounded shadow-lg w-[300px] max-h-[80vh] overflow-y-auto">
        <span className='text-[20px] text-gray-600'>Select columns to display</span>
        <form className="flex flex-col gap-[20px]">
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Protective gloves
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Safety glasses
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Ear protection
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Mask protection
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Knee pads
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Safety shoes
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Coverall
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Hi-Vis Jacket
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Face shield
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Goggles
          </label>
          <label className="flex items-center text-gray-600 gap-[10px]">
            <input type="checkbox" className="mr-[8px] w-[20px] h-[20px]" defaultChecked />
            Welding helmet
          </label>
        </form>
      </div>
    </div>
  );
}

export default NewBar;