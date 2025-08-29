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
        if (prev === "indefinite") return valueIn;
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
      setCurrentValue((prev) => {
        if (prev === "0" || prev === "indefinite") return prev;
        return (parseFloat(prev) * -1).toString();
      });
    }

    // Handle % (percentage)
    if (valueIn === "%") {
      setCurrentValue((prev) => {
        if (prev === "indefinite") return prev;
        const currNum = parseFloat(prev);
        if (isNaN(currNum)) return "indefinite";
        if (previousValue && operation) {
          const prevNum = parseFloat(previousValue);
          if (isNaN(prevNum)) return "indefinite";
          switch (operation) {
            case "+":
            case "-":
              return (prevNum * (currNum / 100)).toString();
            case "x":
            case "÷":
              return (currNum / 100).toString();
            default:
              return prev;
          }
        }
        return (currNum / 100).toString();
      });
    }

    // Handle operations (+, -, *, ÷)
    if (["+", "-", "x", "÷"].includes(valueIn)) {
      if (currentValue === "indefinite") return;
      if (previousValue && operation && currentValue) {
        // Perform calculation for pending operation
        const result = calculate(previousValue, currentValue, operation);
        if (result === "indefinite") {
          setCurrentValue("indefinite");
          setPreviousValue("");
          setOperation("");
        } else {
          setPreviousValue(result.toString());
          setCurrentValue("0");
          setOperation(valueIn);
        }
      } else if (currentValue && currentValue !== "indefinite") {
        // Store current value as previous if no operation pending
        setPreviousValue(currentValue);
        setCurrentValue("0");
        setOperation(valueIn);
      }
    }

    // Handle equals
    if (valueIn === "=" && previousValue && operation && currentValue) {
      if (currentValue === "indefinite") return;
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
    if (isNaN(prevNum) || isNaN(currNum)) return "indefinite";
    switch (op) {
      case "+":
        return (prevNum + currNum).toString();
      case "-":
        return (prevNum - currNum).toString();
      case "x":
        return (prevNum * currNum).toString();
      case "÷":
        if (currNum === 0) return "indefinite";
        return (prevNum / currNum).toString();
      default:
        return curr;
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Visor>
          <VisorContent>
            <VisorContentTextMin
              value={previousValue && operation ? `${previousValue} ${operation}` : ""}
            />
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