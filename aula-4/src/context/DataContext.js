import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState(''); // Estado para o input

  const fetchData = async (value) => {
    try {
      const response = await fetch(`https://api.github.com/users/${value}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Request error at DataContext:', error);
      setData({ error: 'Failed to load data.' });
    }
  };

  return (
    <DataContext.Provider value={{ data, fetchData, inputValue, setInputValue }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData from DataContext must used inside a DataProvider');
  }
  return context;
};