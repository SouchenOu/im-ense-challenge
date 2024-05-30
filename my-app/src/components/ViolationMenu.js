import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./file.css";

const ViolationMenu = ({ violations, onClose }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center" onClick={onClose}>
            <div className="violation-menu bg-white p-6 rounded shadow-lg w-[500px] max-h-[80vh] overflow-y-auto">
                {violations.map((violation, index) => (
                    <div key={index} className="mb-4">
                        <img src={violation.image} alt="Violation" className="w-full h-[200px] object-cover rounded" />
                        <div className="mt-2 flex flex-col gap-[10px]">
                            <div className='flex items-center justify-between'>
                                <p className="text-[20px] text-gray-400">Comment</p>
                                <p className="text-sm text-gray-400 mt-1">
                                    <span className="mr-2"> <FontAwesomeIcon icon={faClock} className='text-orange-400'/>  {violation.date}</span>
                                    <span className='text-gray-400 font-bold'>#{violation.id}</span>
                                </p>
                            </div>
                            <p className="text-gray-700 border-[1px] border-gray-200 p-[20px]">{violation.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViolationMenu;