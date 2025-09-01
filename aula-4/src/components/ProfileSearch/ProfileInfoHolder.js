import { ProfileInfoID, ProfileInfotext, ProfileInfoTextHolder } from "./style";
import { useData } from '../../context/DataContext';

export function ProfileInfoTextComponent(){
    let { data } = useData();
    return(
        <ProfileInfoTextHolder>
            <ProfileInfoID>{data ? (data.login) : ('')}</ProfileInfoID>
            <ProfileInfotext>{data ? (data.bio) : ('')}</ProfileInfotext>
        </ProfileInfoTextHolder>
    );
}