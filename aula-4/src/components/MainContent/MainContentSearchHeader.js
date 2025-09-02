import {MainContentSearchHeader} from "./style";
import { Search } from "../Imput";
import {SearchButtonComponent} from "../Button"


export function MainContentComponent(){
    return(
        <MainContentSearchHeader>
            <Search/>
            <SearchButtonComponent/>
        </MainContentSearchHeader>
    );
}