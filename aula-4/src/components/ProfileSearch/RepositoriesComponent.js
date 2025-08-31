import { RepositoryHolder, RepositoriesTitle } from "./style";
import { RepositoriesHolder } from "./RepositoriesHolder";

export function RepositoryComponent(){
    return(
        <RepositoryHolder>
            <RepositoriesTitle>Repositories</RepositoriesTitle>
            <RepositoriesHolder title ='Luiz' context="Software Engineer"/>
        </RepositoryHolder>
    );
}