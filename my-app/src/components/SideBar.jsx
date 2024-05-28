import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import MouseClick from './mouseClick/MouseClick';

const SideBar = () => {
  const [tooltip, setTooltip] = useState({ text: '', position: { top: 0, left: 0 }, visible: false });

  const showTooltip = (text, event) => {
    const rect = event.target.getBoundingClientRect();
    setTooltip({
      text,
      position: { top: rect.top + 20, left: rect.left +90 },
      visible: true,
    });
  };

  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className='flex-[1] min-h-[100vh] p-[0] border-r-[0.5px] border-solid border-gray-300 relative'>
      <div className='flex flex-col gap-[40px] items-center p-[10px] h-[300px] border border-b-gray-300'>
        <img
          src="/logo.png"
          alt="Logo"
          className='w-[50px] h-[50px] cursor-pointer'
          onMouseEnter={(e) => showTooltip('Logo', e)}
          onMouseLeave={hideTooltip}
        />
        <div className='flex flex-col items-center justify-center gap-[20px]'>
          <img
            src="/Vector.png"
            alt="Vector"
            className='w-[30px] h-[30px] cursor-pointer'
            onMouseEnter={(e) => showTooltip('Vector', e)}
            onMouseLeave={hideTooltip}
          />
          <img
            src="/icon.png"
            alt="Icon"
            className='w-[30px] h-[30px] cursor-pointer'
            onMouseEnter={(e) => showTooltip('Icon', e)}
            onMouseLeave={hideTooltip}
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center p-[10px] gap-[20px]'>
        <img
          src="/Vect.png"
          alt="Vect"
          className='w-[30px] h-[30px] cursor-pointer'
          onMouseEnter={(e) => showTooltip('Vect', e)}
          onMouseLeave={hideTooltip}
        />
        <img
          src="/Vect2.png"
          alt="Vect2"
          className='w-[30px] h-[30px] cursor-pointer'
          onMouseEnter={(e) => showTooltip('Vect2', e)}
          onMouseLeave={hideTooltip}
        />
        <FontAwesomeIcon
          icon={faUserLarge}
          className='w-[30px] h-[30px] text-blue-300 cursor-pointer'
          onMouseEnter={(e) => showTooltip('User', e)}
          onMouseLeave={hideTooltip}
        />
      </div>
      {tooltip.visible && <MouseClick text={tooltip.text} position={tooltip.position} />}
    </div>
  );
};

export default SideBar;