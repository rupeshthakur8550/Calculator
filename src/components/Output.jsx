import React, { useContext, useEffect, useRef } from 'react';
import { DataContext } from '../context/DataContext';

const Output = () => {
    const { expression, history } = useContext(DataContext);
    const expressionRef = useRef(null);
    const historyRef = useRef(null);

    useEffect(() => {
        if (expressionRef.current) {
            expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
        }
    }, [expression]);

    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <div className='header bg-gray-700 px-5 py-2 h-[40%] w-full flex flex-col justify-end text-right overflow-hidden font-semibold text-white'>
            <div ref={historyRef} className='header_history overflow-y-auto scrollbar-hide my-2 text-gray-500 md:text-xs text-lg'>
                {Object.values(history).map((item, index) => (
                    <p key={index} className='mb-2'>{item.expression} = {item.result}</p>
                ))}
            </div>
            <div className='header_expression'>
                <p ref={expressionRef} className='sm:text-2xl text-4xl overflow-x-auto scrollbar-hide'>
                    {expression}
                </p>
                {/* <p className='sm:text-2xl text-4xl'>{result}</p> */}
            </div>
        </div>
    );
};

export default Output;
