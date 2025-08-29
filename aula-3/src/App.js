import { Container, ContentWrapper, Visor, VisorContent, NumbersButtonWrapper, OptionsButtonWrapper, ButtonWrapper } from "./styles";
import { VisorContentText, VisorContentTextMin } from "./components/Visor";
import { Button, ButtonOptionSide, ButtonOptionTop, ButtonZero } from "./components/button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [MincurrentNumber, MinsetCurrentNumber] = useState('');
  let valor = currentNumber;



  //Function for number display
  const handleClick = (valueIn) => {

    //Add the values to the main visor
    if(!isNaN(parseInt(valueIn)) || valueIn === "."){
        setCurrentNumber(previousNumber => {
          if(Number(previousNumber) !== "0"){
            return `${previousNumber}${valueIn}`;
          }
          return `${valueIn}`;
          
          
        });
    }
    
    //Check for cleaner and set main and secondary visor to empty
    if(valueIn === "AC"){
      setCurrentNumber(' ');
      MinsetCurrentNumber('');

    }

    //Sum value, add the sum to secondary visor
    if(valueIn === "+"){
      if(!isNaN(parseInt(currentNumber)) || parseInt(currentNumber) <= 0){
        setCurrentNumber(previousNumber => {
          valor = previousNumber;
          if(parseInt(valueIn)){
            return `${Number(previousNumber) + Number(valueIn)}`
          }

          return '';
        });

        //Update the secondery visor with current sum
        MinsetCurrentNumber(Number(MincurrentNumber) + Number(valor));
        
        
      }
    }

    //Subtraction funtion
    if(valueIn === "-"){

    }

    //Igual value, add the value to main visor
    if(valueIn === "="){
      setCurrentNumber((previousNumber) =>  Number(previousNumber) + Number(MincurrentNumber));
      MinsetCurrentNumber('');
      
    }
    
  }


  return (
    <Container>
      <ContentWrapper>
        <Visor>
          <VisorContent> 
            <VisorContentTextMin value={MincurrentNumber}/>
            <VisorContentText value={currentNumber}/>
          </VisorContent>
        </Visor>
        <ButtonWrapper>
          <NumbersButtonWrapper>
            <ButtonOptionTop value="AC" onClick={() => handleClick('AC')}/>
            <ButtonOptionTop value="+/-" onClick={() => handleClick('+/-')}/>
            <ButtonOptionTop value="%" onClick={() => handleClick('%')}/>
            
            <Button value="9" onClick={() => handleClick('9')}/> 
            <Button value="8" onClick={() => handleClick('8')}/> 
            <Button value="7" onClick={() => handleClick('7')}/>
            <Button value="6" onClick={() => handleClick('6')}/>
            <Button value="5" onClick={() => handleClick('5')}/>
            <Button value="4" onClick={() => handleClick('4')}/>
            <Button value="3" onClick={() => handleClick('3')}/>
            <Button value="2" onClick={() => handleClick('2')}/>
            <Button value="1" onClick={() => handleClick('1')}/>
            <ButtonZero value="0" onClick={() => handleClick('0')}/>
            <Button value="." onClick={() => handleClick('.')}/>
          </NumbersButtonWrapper>

          <OptionsButtonWrapper>
            <ButtonOptionSide value="÷" onClick={() => handleClick('÷')}/>
            <ButtonOptionSide value="x" onClick={() => handleClick('x')}/>
            <ButtonOptionSide value="-" onClick={() => handleClick('-')}/>
            <ButtonOptionSide value="+" onClick={() => handleClick('+')}/>
            <ButtonOptionSide value="=" onClick={() => handleClick('=')}/>
          </OptionsButtonWrapper>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>

  );
}
 
export default App;
