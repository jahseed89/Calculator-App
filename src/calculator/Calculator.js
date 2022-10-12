import React, { useState } from "react";
import Button from "../component/Button";
import "./calculator.css";

const Calculator = () => {
  const [prevAnswer, setPrevAnswe] = useState("");
  const [answer, setAnswer] = useState("0");
  const [operand, setOperand] = useState("");

  const handleOperand = (e) => {
    const value = e.target.value;

    setOperand((op) => op + value);
  };

  const handleOperator = (e) => {
    const value = e.target.value;
    // clear all filds
    if (value === "ac") {
      setOperand("");
      setAnswer(0);
      return;
    }
    let newOperand;
    // get last operand value
    if (operand.slice(-1) === value) {
      return;
    } else {
      if (!Number(operand.slice(-1))) {
        // remove the last car from operand
        newOperand = operand.slice(0, -1);

        if (Number(operand.slice(-1)) === 0) {
          setOperand(newOperand + `0` + value);
          return;
        }
        setOperand(newOperand + value);
      } else {
        setOperand(operand + value);
      }
    }
    switch (value) {
      case "=":
        setAnswer(eval(operand));
        setOperand("");

        if (answer > 0) setPrevAnswe(answer);

        break;
      case "+":
        setOperand(`${eval(operand)} ${value}`);
        break;
      case "-":
        setOperand(`${eval(operand)} ${value}`);

        break;
      case "/":
        setOperand(`${eval(operand)} ${value}`);

        break;

      case "*":
        setOperand(`${eval(operand)} ${value}`);

        break;

      case "%":
        setOperand(`${eval(operand)} ${value}`);

        break;

      default:
        return;
    }
  };

  return (
    <div className="calc-container">
      <div className="btn-wrapper">
        <Button
          btnNum="AC"
          className="cancle-btn"
          value="ac"
          clickHandler={handleOperator}
        />
        <div className="input-fild">
          <span>{operand ? operand : "0"} =</span>
          <span className="output-ans">{answer}</span>
        </div>
      </div>
      <div className="btn-wrapper">
        <Button btnNum={7} value="7" clickHandler={handleOperand} />
        <Button btnNum={8} value="8" clickHandler={handleOperand} />
        <Button btnNum={9} value="9" clickHandler={handleOperand} />
        <Button
          btnNum="÷"
          className="operator-btn"
          clickHandler={handleOperator}
          value="/"
        />
      </div>
      <div className="btn-wrapper">
        <Button btnNum={4} value="4" clickHandler={handleOperand} />
        <Button btnNum={5} value="5" clickHandler={handleOperand} />
        <Button btnNum={6} value="6" clickHandler={handleOperand} />
        <Button
          btnNum="*"
          className="operator-btn"
          clickHandler={handleOperator}
          value="*"
        />
      </div>
      <div className="btn-wrapper">
        <Button btnNum={1} value="1" clickHandler={handleOperand} />
        <Button btnNum={2} value="2" clickHandler={handleOperand} />
        <Button btnNum={3} value="3" clickHandler={handleOperand} />
        <Button
          btnNum="-"
          className="operator-btn"
          clickHandler={handleOperator}
          value="-"
        />
      </div>
      <div className="btn-wrapper">
        <Button btnNum={0} clickHandler={handleOperand} value="0" />
        <Button
          btnNum="."
          className="operator-btn"
          clickHandler={handleOperator}
          value="."
        />
        <Button
          btnNum="%"
          className="operator-btn"
          clickHandler={handleOperator}
          value="%"
        />
        <Button
          btnNum="+"
          className="operator-btn"
          clickHandler={handleOperator}
          value="+"
        />
      </div>
      <div className="submit-opetator">
        <Button
          value="="
          btnNum="="
          clickHandler={handleOperator}
          className="submition"
        />
      </div>
    </div>
  );
};

export default Calculator;
