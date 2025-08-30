import { ImageProfile } from "./style";
import defaultProfileImage from "../../assets/ex-profile-img.png"

export function ImageProfileSearch(){
    return(
        <ImageProfile src={defaultProfileImage}/>
    );
}