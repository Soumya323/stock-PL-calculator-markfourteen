import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import githubImage from "./images/github.png";
import instagramImage from "./images/instagram.png";
import twitterImage from "./images/twitter.png";

function App() {
  let initialPrice = 0;
  let quantity = 0;
  let currentPrice = 0;

  function onInputChanged(value, index) {
    switch (index) {
      case 0:
        initialPrice = parseFloat(value);
        break;
      case 1:
        quantity = parseFloat(value);
        break;
      case 2:
        currentPrice = parseFloat(value);
        break;
    }
  }

  function onCalcualteClicked() {
    let result;
    if (isInValidData()) result = "No pain no gain and no gain no pain.";
    else {
      const isProfit = currentPrice > initialPrice;

      const pl = Math.abs(currentPrice - initialPrice) * quantity;
      const plPercent =
        (Math.abs(currentPrice - initialPrice) / initialPrice) * quantity * 100;
      result = `Hey the ${
        isProfit ? "profit" : "loss"
      }is ${pl} and the percent is ${plPercent}%.`;
    }
    showResult(result);
  }

  function isInValidData() {
    return initialPrice == 0 || quantity == 0;
  }

  function showResult(result) {
    document.getElementById("result").innerHTML = result;
  }

  return (
    <>
      <div id="app-root">
        <h1>Stock Profit and Loss Calculator</h1>

        <h3>Initial Price</h3>
        <input
          type="number"
          placeholder="Enter initial price here"
          className="input-field"
          onChange={(e) => {
            onInputChanged(e.target.value, 0);
          }}
        />

        <h3>Quantity of Stocks</h3>
        <input
          type="number"
          placeholder="Enter number of stocks bought"
          className="input-field"
          onChange={(e) => {
            onInputChanged(e.target.value, 1);
          }}
        />

        <h3>Current Price</h3>
        <input
          type="number"
          placeholder="Enter the current price of stock"
          className="input-field"
          onChange={(e) => {
            onInputChanged(e.target.value, 2);
          }}
        />

        <br />
        <button onClick={onCalcualteClicked}>Tell me!</button>

        <p id="result"></p>

        <footer>
          <p>soumya ripan: </p>

          <ul>
            <li>
              <a href="https://github.com/Soumya323">
                <img src={githubImage} alt="github" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Ripann_?t=8IMb-TON6SKeOCqh7DyWzg&s=09">
                <img src={twitterImage} alt="twitter"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={instagramImage} alt="instagram"></img>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;

// App name

// buy price label
// buy price input

// quantity label
// quantity input

// sell price label
// sell price input

// Calculate button

// Result text
