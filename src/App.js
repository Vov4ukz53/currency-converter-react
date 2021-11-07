import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Calculator from "./Calculator";
import Form from "./Form";
import CalculatorResult from "./CalculatorResult";
import currencies from "./currencies";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, selectedCurrency) => {
    const selectedRate = currencies.find(
      ({ content }) => content === selectedCurrency).rate;

    setResult({ inputAmount: +amount, outputAmount: amount * selectedRate, selectedCurrency });
  };

  return (
    <div className="App">
      <Header
        title="Kalkulator walutowy"
      />

      <Calculator
        body=
        {<Form
          calculateResult={calculateResult}
          result={result}
        />}
        result=
        {<CalculatorResult
          result={result}
        />}
      />

      <Footer />
    </div>
  );
}

export default App;
