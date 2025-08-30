import { ImageProfileSearch } from "./image";
import { ProfileInfoTextComponent } from "./ProfileInfoHolder";
import { ProfileInfoHolder } from "./style";


export function ProfileSearch(){
    return(
        <ProfileInfoHolder>
            <ImageProfileSearch/>
            <ProfileInfoTextComponent/>
        </ProfileInfoHolder>

    );
}