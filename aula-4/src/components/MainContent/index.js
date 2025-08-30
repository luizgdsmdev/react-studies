import { MainContentWrapper, MainContentSearchHeader } from "./style";
import { Search } from "../Imput";
import {SearchButtonComponent} from "../Button"

export function MainContent(){
    return ( 
        <MainContentWrapper>
            <MainContentSearchHeader>
                <Search /><SearchButtonComponent />
            </MainContentSearchHeader>
                
        </MainContentWrapper>
    );
}