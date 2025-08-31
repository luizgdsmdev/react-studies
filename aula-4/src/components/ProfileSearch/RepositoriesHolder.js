import { RepositoriesInfoHolder, RepositorieTitle, RepositorieContext } from "./style";
import { useData } from '../../context/DataContext';

export const RepositoriesHolder = (props) => {
    let data = useData();
    let {title, context} =props;
    return(
        <RepositoriesInfoHolder>
            <RepositorieTitle>{title}</RepositorieTitle>
            <RepositorieContext>{context}</RepositorieContext>
        </RepositoriesInfoHolder>
    );
}