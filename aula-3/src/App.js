import { Container, ContentWrapper, Visor, VisorContent, NumbersButtonWrapper, OptionsButtonWrapper, ButtonWrapper } from "./styles";
import { Button, ButtonOptionSide, ButtonOptionTop, ButtonZero } from "./components/button";


const App = () => {
  return (
    <Container>
      <ContentWrapper>
        <Visor>
          <VisorContent> 
            <p>hello</p>
          </VisorContent>
        </Visor>
        <ButtonWrapper>
          <NumbersButtonWrapper>
            <ButtonOptionTop value="AC"/>
            <ButtonOptionTop value="+/-"/>
            <ButtonOptionTop value="%"/>
            
            <Button value="9"/> 
            <Button value="8"/> 
            <Button value="7"/>
            <Button value="6"/>
            <Button value="5"/>
            <Button value="4"/>
            <Button value="3"/>
            <Button value="2"/>
            <Button value="1"/>
            <ButtonZero value="0"/>
            <Button value=","/>
            
          </NumbersButtonWrapper>

          <OptionsButtonWrapper>


            <ButtonOptionSide value="÷"/>
            <ButtonOptionSide value="x"/>
            <ButtonOptionSide value="-"/>
            <ButtonOptionSide value="+"/>
            <ButtonOptionSide value="="/>
          </OptionsButtonWrapper>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>

  );
}
 
export default App;
