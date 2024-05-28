import React from 'react'

const MouseClick = ({text, position}) => {
    return (
        <div
        className="px-[30px] "
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          transform: 'translate(-50%, -100%)',
          backgroundColor: 'rgba(5, 5, 5, 0.75)',
          color: 'white',
          borderRadius: '3px',
          fontSize: '20px',
          whiteSpace: 'nowrap',
          zIndex: 1000,
        }}
      >
        {text}
      </div>
        );
}

export default MouseClick
