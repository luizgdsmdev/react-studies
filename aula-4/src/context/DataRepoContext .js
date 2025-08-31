import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null); // Estado para armazenar o resultado da requisição

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.github.com/users/trekhleb'); // Substitua pela sua API
      const result = await response.json();
      setData(result); // Atualiza o estado com o resultado
    } catch (error) {
      console.error('Erro na requisição:', error);
      setData({ error: 'Falha ao carregar dados' });
    }
  };

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);