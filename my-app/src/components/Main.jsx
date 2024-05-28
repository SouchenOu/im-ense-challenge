import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Main = () => {
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    return (
        <div className='bg-[#F2F2F2] h-full border-[0.5px] border-solid border-gray-300 p-[70px] w-full'>
            <div className='flex items-center justify-between'>
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
                                <div className='absolute top-[40px] right-[0] z-10 bg-white shadow-lg p-[20px]'>
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        minDate={new Date()}
                                    />
                                    <div className='flex justify-end gap-[10px] mt-[10px]'>
                                        <button className=' text-gray-400 px-[20px] py-[5px] rounded' onClick={() => setOpenDate(false)}>Cancel</button>
                                        <button className='bg-green-500 text-white px-[20px] py-[5px] rounded' onClick={() => setOpenDate(false)}>Apply</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;