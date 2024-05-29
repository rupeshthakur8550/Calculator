import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = localStorage.getItem('history');
        if (storedHistory) {
            setHistory(JSON.parse(storedHistory));
        }
    }, []);

    const addToHistory = (data) => {
        const updatedHistory = [...history, data];
        setHistory(updatedHistory);
        localStorage.setItem('history', JSON.stringify(updatedHistory));
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem('history');
    }

    return (
        <DataContext.Provider value={{ expression, setExpression, result, setResult, history, addToHistory, clearHistory }}>
            {children}
        </DataContext.Provider>
    );
};
