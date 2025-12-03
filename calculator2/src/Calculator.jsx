import React, { useEffect, useState } from "react";
import "./Calculator.scss";
function Calculator() {
  const [screenValue, setScreenValue] = useState("0");
  const errorMsg = "You Hit Input Limit";
  useEffect(() => {}, []);

  return (
    <center>
      <div className="calc-container">
        <div className="display_two">
          {screenValue.length >= 30 ? errorMsg : screenValue}
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
            onClick={() => setScreenValue((lastnum) => lastnum + "÷")}
          >
            ÷
          </button>
          <button
            id="multiply"
            className="btn btn-accent btn-operator"
            onClick={() => setScreenValue((lastnum) => lastnum + "×")}
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
            7
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
            8
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
            9
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
            4
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
            5
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
            6
          </button>
          <button
            id="plus"
            className="btn btn-operator"
            onClick={() => setScreenValue((lastnum) => lastnum + "+")}
          >
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
            1
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
            2
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
            3
          </button>
          <button
            id="equals"
            className="btn equals"
            onClick={() => setScreenValue((lastnum) => lastnum + "=")}
          >
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
            0
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
