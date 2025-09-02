import { SearchButton } from './style';
import { useData } from '../../context/DataContext';

export function SearchButtonComponent() {
  const { fetchData, fetchRepos, inputValue } = useData();

  const handleClick = async () => {
    if (!inputValue.trim()) {
      alert('Digite um usuário!');
      return;
    }

    await fetchData(inputValue); // Busca dados do usuário
    await fetchRepos(inputValue); // Busca repositórios
  };

  return (
    <SearchButton onClick={handleClick} title="Search">
      Search
    </SearchButton>
  );
}