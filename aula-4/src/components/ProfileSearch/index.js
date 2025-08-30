import { ProfileSearch } from "./ProfileInfoComponent";
import { RepositoryComponent } from "./RepositoriesComponent";
import { ProfileSearchComponentHolder } from "./style";

export function ProfileSearchComponent(){
    return(
        <ProfileSearchComponentHolder>
            <ProfileSearch/>
            <RepositoryComponent/>
        </ProfileSearchComponentHolder>
    );
}