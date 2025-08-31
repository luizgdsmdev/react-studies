import { SearchButton } from "./style";
import { useData } from '../../context/DataContext';

export function SearchButtonComponent(userName){    
    const { fetchData, inputValue } = useData();
    return(
        <SearchButton onClick={() => fetchData(inputValue)} title="Search">Search</SearchButton>
    );
}