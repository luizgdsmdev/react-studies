import { RepositoryHolder, RepositoriesTitle } from "./style";
import { RepositoriesHolder } from "./RepositoriesHolder";
import { useData } from '../../context/DataContext';

export function RepositoryComponent(){
    const { data } = useData();
    return(
        <RepositoryHolder>
             {data && <RepositoriesTitle>Repositories</RepositoriesTitle>}
            <RepositoriesHolder/>
        </RepositoryHolder>
    );
}