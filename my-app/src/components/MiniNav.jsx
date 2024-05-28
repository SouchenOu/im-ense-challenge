import React from 'react'

const MiniNav = () => {
  return (
    <div className=' h-[80px] border-[0.5px] border-solid  border-gray-300 flex items-start justify-start gap-[20px] ' >

        <h1 className='text-[30px] text-gray-400  w-[150px] h-[70px] p-[20px] '>SITES</h1>
        <div className='text-[20px] flex items-start justify-start gap-[30px] p-[30px] border-l-[3px] h-[80px]  '>
            <span className='text-[20px] text-gray-400 text-[#42A4DF]'>All</span>
            <span className='text-[20px] text-gray-400'>Site 1</span>
            <span className='text-[20px] text-gray-400'>Site 2</span>
            <span className='text-[20px] text-gray-400'>Site 3</span>
            <span className='text-[20px] text-gray-400'>Site 4</span>



        </div>
    </div>
  )
}

export default MiniNav
