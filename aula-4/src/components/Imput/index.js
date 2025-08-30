import { SearchInput } from "./style";


export function Search (){
    return(
        <SearchInput placeholder="@user" type="text" id="username" name="username" required/>
    );
}