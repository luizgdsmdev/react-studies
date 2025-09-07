import { ImageProfile } from "./style";
import { useData } from '../../context/DataContext';
import defaultImage from '../../assets/aquarium-octopus.png'

export function ImageProfileSearch(){
    let {data} = useData();

    return(
        <ImageProfile src={data ? data.avatar_url : defaultImage} alt={data ? `Image of Github profile for ${data.login}, ${data.bio}` : ''} title={data ? `Image of Github profile for ${data.login}, ${data.bio}` : ''} />
    );
}