import { ImageProfile } from "./style";
import defaultProfileImage from "../../assets/aquarium-octopus.png"

export function ImageProfileSearch(){
    return(
        <ImageProfile src={defaultProfileImage}/>
    );
}