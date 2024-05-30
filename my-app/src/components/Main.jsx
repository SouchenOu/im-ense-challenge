import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file
import ViolationMenu from './ViolationMenu';
import { faChevronDown, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import NewBar from './NewBar';

const Main = () => {
    const [openDate, setOpenDate] = useState(false);
    const [OpenBar, setOpenBar] = useState({ visible: false });;
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [menuState, setMenuState] = useState({ visible: false, violations: [] });

    const workers = [
        { id:"1", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: [2, '-', '-', 10, '-', '-', 1, '-', '-', 3, '-', '-'] },
        { id:"2", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: ['-', 2, '-', '-', '-', 10, '-', 1, '-', '-', '-', 3] },
        { id:"3", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: ['-', '-', 11, '-','-', '-', '-', '-', '-', '-', '-', '-'] },
        { id:"4", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: [2, '-', '-', 10, '-', '-', 1, '-', '-', 3, '-', '-'] },
        { id:"5", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: ['-', 2, '-', '-', '-', 10, '-', 1, '-', '-', '-', 3] },
        { id:"6", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: ['-', '-', 11, '-', '-', '-', '-', '-', '-', '-', '-', '-'] },
        { id:"7", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: [2, '-', '-', 10, '-', '-', 1, '-', '-', 3, '-', '-'] },
        { id:"8", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: ['-', 2, '-', '-', '-', 10, '-', 1, '-', '-', '-', 3] },
        { id:"9", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: [2, '-', '-', 10, '-', '-', 1, '-', '-', 3, '-', '-'] },
        { id:"10", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: ['-', '-', 11, '-', '-', '-', '-', '-', '-', '-', '-', '-'] },
        { id:"11", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: ['-', '-', 11, '-', '-', '-', '-', '-', '-', '-', '-', '-']  },
        { id:"12", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: ['-', '-', 11, '-', '-', '-', '-', '-', '-', '-', '-', '-']  },
        { id:"13", name: 'Blaise DEFLOO', image: '/photo.png', badge: 'Manager', score: [2,'-' , '-', 10, '-', '-', 1, '-', '-', 3, '-', '-'] },

      ];
    
      const items = [
        { name: 'Protective gloves', image: '/basbal.png' },
        { name: 'Safety glasses', image: '/image.png' },
        { name: 'Ear protection', image: '/Rect4.png' },
        { name: 'Mask protection', image: '/Recta44.png' },
        { name: 'Knee pads', image: '/image19.png' },
        { name: 'Safety shoes', image: '/image20.png' },
        { name: 'Coverall', image: '/image21.png' },
        { name: 'Hi-Vis Jacket', image: '/image22.png' },
        { name: 'Safety Harness', image: '/image23.png' },
        { name: 'Face shield', image: '/image24.png' },
        { name: 'Hard Hat', image: '/image25.png' },
        { name: 'Welding helmet', image: '/image26.png' },
      ];
      const violationsData = [
        {
            image: '/11.png',
            comment: 'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
            date: '15/11/2022 10:34',
            id: '03'
        },
        {
            image: '/2.png',
            comment: 'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore.',
            date: '15/11/2022 10:34',
            id: '07'
        },
        {
            image: '/11.png',
            comment: 'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
            date: '15/11/2022 10:34',
            id: '01'
        },
        {
            image: '/2.png',
            comment: 'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore.',
            date: '15/11/2022 10:34',
            id: '10'
        },
        {
            image: '/11.png',
            comment: 'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore',
            date: '15/11/2022 10:34',
            id: '02'
        },
        {
            image: '/2.png',
            comment: 'consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua adipiscingdo eiusmod tempor incididunt labore.',
            date: '15/11/2022 10:34',
            id: '11'
        },
    ];

    const handleCellClick = (score) => {
        if (score !== '-') {
            setMenuState({ visible: true, violations: violationsData });
        }
    };

    const closeMenu = () => {
        setMenuState({ visible: false, violations: [] });
    };
    const clicktheSetting = ()=>{
        setOpenBar({ visible: true })
    }

    const closeNewBar = ()=>{
        setOpenBar({ visible: false });
    }

   
    return (
        <div className=' flex flex-col items-center gap-[30px] bg-[#F2F2F2] h-full border-[0.5px] border-solid border-gray-300 p-[70px] w-full'>
            <div className='flex items-center  justify-between w-[2000px]'>
                <h1 className='text-[30px]'>P.P.E Violations Table</h1>
                <div className='flex items-center justify-center gap-[10px]'>
                    <div className='relative'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='w-[20px] h-[20px] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input className='pl-[40px] pr-[20px] py-[10px] border border-gray-300 rounded' placeholder="Search workers..." />
                    </div>
                    <div className='relative flex items-center gap-[10px]'>
                        <span className="text-[19px] border-[2px] border-gray-300 px-[90px] py-[6px] border-solid text-gray-700 cursor-pointer" onClick={() => setOpenDate(!openDate)}>
                            {`${format(dates[0].startDate, "MM/dd/yyyy")} - ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && (
                            <div className='relative'>
                            <div className='absolute top-[40px] right-[0] z-10 bg-white shadow-lg p-[20px] rounded'>
                                <div className='p-[10px] flex flex-col gap-[20px]'>
                                    <h1 className='text-[20px] flex items-center text-gray-500'>Date Range</h1>
                                    <div className='flex items-center gap-[200px]  py-[5px]  px-[10px] border border-gray-300 cursor-pointer '>
                                        <span className='rounded text-[18px]  text-gray-400'>Custom</span>
                                        <FontAwesomeIcon icon={faChevronDown} className=''/>
                                    </div>
                                   
                                </div>
                                
                                <div className='flex flex-col items-end'>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                />
                                <div className='flex justify-end gap-[10px] mt-[10px]'>
                                    <button className='text-gray-400 px-[20px] py-[5px] rounded' onClick={() => setOpenDate(false)}>Cancel</button>
                                    <button className='bg-green-500 text-white px-[20px] py-[5px] rounded' onClick={() => setOpenDate(false)}>Apply</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        )}
                    </div>
                    <div className='flex items-center gap-[100px]  py-[5px] pr-[20px] pl-[10px] border border-gray-300 cursor-pointer '>
                        <span className='rounded text-[18px] text-gray-400'>All Contractors</span>
                        <FontAwesomeIcon icon={faChevronDown} className=''/>
                    </div>
                    <div className='border-[2px] p-[10px]  bg-white rounded-[10px]'>
                        <img src="/vvb.png" alt="" className='w-[13px] h-[13px]'/>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className='px-[40px]'>
                            <div className='flex items-center justify-center gap-[30px]   py-[90px] border-b-2 border-gray-300 border-r'>
                                <FontAwesomeIcon icon={faGear} className='p-[8px]  border-gray-300 cursor-pointer w-[30px] h-[30px] text-gray-300' onClick={()=>clicktheSetting()}/>
                                <th className=" text-[20px] font-semibold text-gray-600 uppercase tracking-wider ">Worker</th>

                            </div>
                           
                            {items.map(item => (
                                <th key={item.name} className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    <div className="flex flex-col items-center">
                                        <img src={item.image} alt={item.name} className="h-[90px] w-[90px] mb-2 " />
                                        <span className=''>{item.name}</span>
                                    </div>
                                </th>
                            ))}
                            {OpenBar.visible && <NewBar  onClose={closeNewBar}/>}

                        </tr>
                    </thead>
                    <tbody>
                        {workers.map((worker, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="w-[260px] py-[10px] border-b border-r border-gray-300 flex flex-col items-center">
                                    <div className="gap-[10px] flex items-center ">
                                        <span className='text-[20px] border-gray-400 px-[2px] h-full'>{worker.id}</span>

                                        <div className='flex items-center'>

                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src={worker.image} alt={worker.name} />
                                            </div>
                                            <div className="ml-4 ">

                                                <div className="text-sm font-medium text-gray-900 ">{worker.name}</div>
                                                <div className="text-sm text-gray-500">{worker.badge}</div>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-[50px] w-[90px] rounded-full" src="/img.png" alt="" />
                                        </div>
                                    </div>
                                </td>
                                {worker.score.map((score, i) => (
                                    <td key={i} className={`px-[70px] py-4 border-b border-gray-300 text-sm`} onClick={() => handleCellClick(score)}>
                                      <span className={ `${score === '-' ? '' : score < 5 ? 'bg-yellow-500 rounded-[70%]  px-[10px] py-[7px] cursor-pointer ' : 'bg-red-500 rounded-[50%] p-[10px] text-white cursor-pointer '    }`}>{score}</span>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {menuState.visible && <ViolationMenu violations={menuState.violations} onClose={closeMenu} />}

        </div>
    );
}

export default Main;