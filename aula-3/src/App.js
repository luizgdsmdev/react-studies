import { Container, ContentWrapper, Visor, VisorContent, NumbersButtonWrapper, OptionsButtonWrapper, ButtonWrapper } from "./styles";
import { VisorContentText, VisorContentTextMin } from "./components/Visor";
import { Button, ButtonOptionSide, ButtonOptionTop, ButtonZero } from "./components/button";
import { useState } from "react";

const App = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState("");

  const handleClick = (valueIn) => {
    // Handle number and decimal point input
    if (!isNaN(valueIn) || valueIn === ".") {
      setCurrentValue((prev) => {
        if (prev === "0" && valueIn !== ".") return valueIn;
        if (valueIn === "." && prev.includes(".")) return prev;
        return prev + valueIn;
      });
    }

    // Handle AC (reset)
    if (valueIn === "AC") {
      setCurrentValue("0");
      setPreviousValue("");
      setOperation("");
    }

    // Handle +/- (toggle sign)
    if (valueIn === "+/-") {
      setCurrentValue((prev) => (parseFloat(prev) * -1).toString());
    }

    // Handle % (percentage)
    if (valueIn === "%") {
      setCurrentValue((prev) => (parseFloat(prev) / 100).toString());
    }

    // Handle operations (+, -, *, ÷)
    if (["+", "-", "x", "÷"].includes(valueIn)) {
      if (currentValue !== "" && previousValue !== "") {
        // Perform calculation if there's a pending operation
        const result = calculate(previousValue, currentValue, operation);
        setPreviousValue(result.toString());
        setCurrentValue("0");
      } else {
        // Store current value and operation
        setPreviousValue(currentValue);
        setCurrentValue("0");
      }
      setOperation(valueIn);
    }

    // Handle equals
    if (valueIn === "=" && previousValue !== "" && operation !== "") {
      const result = calculate(previousValue, currentValue, operation);
      setCurrentValue(result.toString());
      setPreviousValue("");
      setOperation("");
    }
  };

  // Calculate result based on operation
  const calculate = (prev, curr, op) => {
    const prevNum = parseFloat(prev);
    const currNum = parseFloat(curr);
    switch (op) {
      case "+":
        return prevNum + currNum;
      case "-":
        return prevNum - currNum;
      case "x":
        return prevNum * currNum;
      case "÷":
        return currNum !== 0 ? prevNum / currNum : "Error";
      default:
        return currNum;
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Visor>
          <VisorContent>
            <VisorContentTextMin value={previousValue ? `${previousValue} ${operation}` : ""} />
            <VisorContentText value={currentValue} />
          </VisorContent>
        </Visor>
        <ButtonWrapper>
          <NumbersButtonWrapper>
            <ButtonOptionTop value="AC" onClick={() => handleClick("AC")} />
            <ButtonOptionTop value="+/-" onClick={() => handleClick("+/-")} />
            <ButtonOptionTop value="%" onClick={() => handleClick("%")} />
            <Button value="7" onClick={() => handleClick("7")} />
            <Button value="8" onClick={() => handleClick("8")} />
            <Button value="9" onClick={() => handleClick("9")} />
            <Button value="4" onClick={() => handleClick("4")} />
            <Button value="5" onClick={() => handleClick("5")} />
            <Button value="6" onClick={() => handleClick("6")} />
            <Button value="1" onClick={() => handleClick("1")} />
            <Button value="2" onClick={() => handleClick("2")} />
            <Button value="3" onClick={() => handleClick("3")} />
            <ButtonZero value="0" onClick={() => handleClick("0")} />
            <Button value="." onClick={() => handleClick(".")} />
          </NumbersButtonWrapper>
          <OptionsButtonWrapper>
            <ButtonOptionSide value="÷" onClick={() => handleClick("÷")} />
            <ButtonOptionSide value="x" onClick={() => handleClick("x")} />
            <ButtonOptionSide value="-" onClick={() => handleClick("-")} />
            <ButtonOptionSide value="+" onClick={() => handleClick("+")} />
            <ButtonOptionSide value="=" onClick={() => handleClick("=")} />
          </OptionsButtonWrapper>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default App;