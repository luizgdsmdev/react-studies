import { SearchInput } from './style';
import { useData } from '../../context/DataContext';

export function Search() {
  const { inputValue, setInputValue } = useData(); // Usa o Context para gerenciar o input

  return (
    <SearchInput
      placeholder="@user"
      type="text"
      id="username"
      name="username"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      required
    />
  );
}