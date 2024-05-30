import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

const Input = () => {
    const { expression, setExpression, clearHistory, setResult, addToHistory } = useContext(DataContext);

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [expression]);

    const handleKeydown = (event) => {
        const { key } = event;
        if (key >= '0' && key <= '9') {
            handleButtonClick(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
            handleButtonClick(key);
        } else if (key === 'Enter') {
            handleButtonClick('=');
        } else if (key === 'Backspace') {
            handleButtonClick('backspace');
        }
    };

    const handleButtonClick = (value) => {
        if (value === 'AC') {
            setExpression('');
            setResult(0);
            clearHistory();
        } else if (value === 'CLR') {
            setExpression('');
            setResult(0);
        } else if (value === 'backspace') {
            setExpression(expression.slice(0, -1));
        } else if (value === '=') {
            try {
                const evalResult = eval(expression.replace(/%/g, '/100'));
                setResult(evalResult);
                addToHistory({ expression, result: evalResult });
                setExpression(evalResult.toString());
            } catch {
                setResult('Error');
            }
        } else if (value === '%') {
            setExpression(expression + '%');
        } else {
            setExpression(expression + value);
        }
    };

    const keys = [
        { keyCode: 1, label: 'AC', value: 'AC' },
        { keyCode: 2, label: 'CLR', value: 'CLR' },
        { keyCode: 8, label: '⌫', value: 'backspace' },
        { label: '%', keyCode: 53, value: '%' },
        { keyCode: 57, label: '9', value: '9' },
        { keyCode: 56, label: '8', value: '8' },
        { keyCode: 55, label: '7', value: '7' },
        { label: '÷', keyCode: 111, value: '/' },
        { keyCode: 54, label: '6', value: '6' },
        { keyCode: 53, label: '5', value: '5' },
        { keyCode: 52, label: '4', value: '4' },
        { label: '×', keyCode: 56, value: '*' },
        { keyCode: 51, label: '3', value: '3' },
        { keyCode: 50, label: '2', value: '2' },
        { keyCode: 49, label: '1', value: '1' },
        { label: '+', keyCode: 107, value: '+' },
        { keyCode: 48, label: '0', value: '0' },
        { keyCode: 190, label: '.', value: '.' },
        { keyCode: 13, label: '=', value: '=' },
        { label: '﹣', keyCode: 109, value: '-' },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center bg-black p-4 h-[60%] sm:h-full">
            <div className="keypad w-full flex bg-black space-x-4">
                <div className="keypad_keys flex-1 grid grid-cols-4 gap-2 mx-3 my-1">
                    {keys.map((item, index) => (
                        <button
                            key={index}
                            className="bg-gray-800 text-white p-4 sm:p-6 rounded text-center text-lg"
                            onClick={() => handleButtonClick(item.value)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Input;
