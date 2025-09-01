import { MainContentWrapper, SearchProfile } from "./style";
import { MainContentComponent } from "./MainContentSearchHeader";
import { SearchProfileTextComponent } from "./SearchProfileText";

export function MainContent(){
    return ( 
        <MainContentWrapper>
            <SearchProfile>
                <MainContentComponent/>
                <SearchProfileTextComponent/>
            </SearchProfile>
        </MainContentWrapper>
    );
}