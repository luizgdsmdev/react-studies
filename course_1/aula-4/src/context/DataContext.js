import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //User request
  const fetchData = async (value) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${value}`);
      if (!response.ok) throw new Error('user not fund.');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Request error at DataContext (fetchData):', error);
      setData({ error: 'Failed to load user data.' });
    } finally {
      setIsLoading(false);
    }
  };

  //Repo request
  const fetchRepos = async (profile) => {
    setIsLoading(true);
    try {
      //User repo
      let response = await fetch(`https://api.github.com/users/${profile}/repos`);
      if (response.ok) {
        const result = await response.json();
        setRepos(result);
        return;
      }

      //Org repo
      response = await fetch(`https://api.github.com/orgs/${profile}/repos`);
      if (!response.ok) throw new Error('Repositórios não encontrados');
      const result = await response.json();
      setRepos(result);
    } catch (error) {
      console.error('Request error at DataContext (fetchRepos):', error);
      setRepos({ error: 'Failed to load repositories.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ data, fetchData, repos, fetchRepos, inputValue, setInputValue, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData from DataContext must be used inside a DataProvider');
  }
  return context;
};