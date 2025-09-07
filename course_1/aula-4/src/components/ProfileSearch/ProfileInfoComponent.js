import { ImageProfileSearch } from "./image";
import { ProfileInfoTextComponent } from "./ProfileInfoHolder";
import { ProfileInfoHolder } from "./style";
import { useData } from '../../context/DataContext';


export function ProfileSearch(){
    let { data } = useData();
    return(
        <ProfileInfoHolder>
            {data && <ImageProfileSearch/>}
            <ProfileInfoTextComponent/>
        </ProfileInfoHolder>
    );
}