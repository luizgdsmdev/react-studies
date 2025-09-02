import { HeaderStyles, ImageLogo } from "./style";
import logoHeader from '../../assets/aquarium-octopus.png'


export const Header = () =>{
    return(
        <HeaderStyles>
            <ImageLogo src={logoHeader} alt="Octopus logo"/>GitFinder
        </HeaderStyles>
    )
}
