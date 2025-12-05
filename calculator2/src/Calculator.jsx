import React, { useEffect, useState } from "react";
import "./Calculator.scss";
import { async } from "regenerator-runtime";
function Calculator() {
  const [screenValue, setScreenValue] = useState("0");
  const errorMsg = "You Hit Input Limit";
  const nine = 9;
  const eight = 8;
  const seven = 7;
  const six = 6;
  const five = 5;
  const four = 4;
  const three = 3;
  const two = 2;
  const one = 1;
  const zero = 0;
  const times = "×";
  const divide = "÷";
  /* const addNumbers = function (Digit1, Digit2) {
    return Number(Digit1) + Number(Digit2);
  };

  const minusNumbers = function (Digit1, Digit2) {
    return Number(Digit1) - Number(Digit2);
  };

  const timesNumbers = function (Digit1, Digit2) {
    return Number(Digit1) * Number(Digit2);
  };

  const divideNumbers = function (Digit1, Digit2) {
    return Number(Digit1) / Number(Digit2);
  };
  const plusBtn = () => {
    setScreenValue((lastnum) => lastnum + "+");
  }; */

  const plusBtn = () => {
    setScreenValue((lastnum) => lastnum + "+");
  };
  let Result;
  const equalBtn = function () {
    setScreenValue((lastnum) => lastnum + "=");
    /*  const [leftNum, rightNum] = expression.split(/[+/-]/);
    const [leftNum1, rightNum2] = expression.split(times);
    const [leftNum2, rightNum3] = expression.split(divide);

    const Result = addNumbers(Number(leftNum), Number(rightNum));
    const Result2 = minusNumbers(Number(leftNum), Number(rightNum));
    const Result3 = timesNumbers(Number(leftNum1), Number(rightNum2));
    const Result4 = divideNumbers(Number(leftNum2), Number(rightNum3));

    console.log(Result, Result2, Result3, Result4); */

    const expression = screenValue
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace("=", "");

    try {
      Result = eval(expression);
      console.log(Result);
    } catch {
      alert(`Math does not allow this ${screenValue}`);
      setScreenValue(() => "Math Error:");
      console.error("crashed 🔴💥");
    }
    setScreenValue(() => (Result !== 0 ? Result : screenValue));
  };
  /* const displayResult = function () {
    setScreenValue(() => (Result !== 0 ? Result : screenValue));
    screenValue.length >= 30 ? errorMsg : screenValue;
  };  */
  useEffect(() => {}, []);

  return (
    <center>
      <div className="calc-container">
        <div className="display_two">
          {Result}
          {/* {screenValue.length >= 30 ? errorMsg : screenValue} */}
        </div>
        <div className="display">
          {screenValue.length >= 30 ? errorMsg : screenValue}
        </div>
        <div className="buttons-grid">
          <button
            id="clear"
            className="btn btn-accent"
            onClick={() => setScreenValue("0")}
          >
            AC
          </button>
          <button
            id="divide"
            className="btn btn-accent btn-operator"
            onClick={() => setScreenValue((lastnum) => lastnum + divide)}
          >
            ÷
          </button>
          <button
            id="multiply"
            className="btn btn-accent btn-operator"
            onClick={() => setScreenValue((lastnum) => lastnum + times)}
          >
            ×
          </button>
          <button
            id="erase"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) =>
                lastnum.length > 1 ? lastnum.slice(0, -1) : "0"
              )
            }
          >
            ⌫
          </button>

          <button
            id="seven"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "7";
                if (lastnum !== "0") return lastnum + "7";
              })
            }
          >
            {seven}
          </button>
          <button
            id="eight"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "8";
                if (lastnum !== "0") return lastnum + "8";
              })
            }
          >
            {eight}
          </button>
          <button
            id="nine"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "9";
                if (lastnum !== "0") return lastnum + "9";
              })
            }
          >
            {nine}
          </button>
          <button
            id="add"
            className="btn btn-operator"
            onClick={() => setScreenValue((lastnum) => lastnum + "-")}
          >
            -
          </button>

          <button
            id="four"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "4";
                if (lastnum !== "0") return lastnum + "4";
              })
            }
          >
            {four}
          </button>
          <button
            id="five"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "5";
                if (lastnum !== "0") return lastnum + "5";
              })
            }
          >
            {five}
          </button>
          <button
            id="six"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "6";
                if (lastnum !== "0") return lastnum + "6";
              })
            }
          >
            {six}
          </button>
          <button id="plus" className="btn btn-operator" onClick={plusBtn}>
            +
          </button>

          <button
            id="one"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "1";
                if (lastnum !== "0") return lastnum + "1";
              })
            }
          >
            {one}
          </button>
          <button
            id="two"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "2";
                if (lastnum !== "0") return lastnum + "2";
              })
            }
          >
            {two}
          </button>
          <button
            id="three"
            className="btn"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "3";
                if (lastnum !== "0") return lastnum + "3";
              })
            }
          >
            {three}
          </button>
          <button id="equals" className="btn equals" onClick={equalBtn}>
            =
          </button>
          <button
            id="zero"
            className="btn zero"
            onClick={() =>
              setScreenValue((lastnum) => {
                if (lastnum === "0") return "0";
                if (lastnum !== "0") return lastnum + "0";
              })
            }
          >
            {zero}
          </button>
          <button
            id="decimal"
            className="btn"
            onClick={() => setScreenValue((lastnum) => lastnum + ".")}
          >
            .
          </button>
        </div>
      </div>
    </center>
  );
}

export default Calculator;
