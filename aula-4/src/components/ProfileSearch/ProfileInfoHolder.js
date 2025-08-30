import { ProfileInfoTitle, ProfileInfoID, ProfileInfotext } from "./style";
import { ProfileInfoTextHolder } from "./style";

export function ProfileInfoTextComponent(){
    return(
        <ProfileInfoTextHolder>
            <ProfileInfoTitle>Luiz Messias</ProfileInfoTitle>
            <ProfileInfoID>@LuizMessias</ProfileInfoID>
            <ProfileInfotext>Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.</ProfileInfotext>
        </ProfileInfoTextHolder>
    );
}