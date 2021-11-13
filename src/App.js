import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Calculator from "./Calculator";
import Form from "./Calculator/Form";
import Result from "./Calculator/Result";
import currencies from "./currencies";
import { Clock } from "./Calculator/Form/Clock";

function App() {

  const [result, setResult] = useState();

  const selectedRate = (selectedCurrency) => currencies.find(
    ({ content }) => content === selectedCurrency).rate;

  const calculateResult = (amount, selectedCurrency) => {
    setResult({
      inputAmount: +amount,
      outputAmount: amount * selectedRate(selectedCurrency),
      selectedCurrency
    });
  };

  return (
    <div className="App">
      <Header
        title="Kalkulator walutowy"
      />

      <Calculator
        body={
          <Form
            clock={<Clock />}
            calculateResult={calculateResult}
            result={result}
          />}

        result={
          <Result
            result={result}
            selectedRate={selectedRate}
          />}
      />

      <Footer />
    </div>
  );
}

export default App;
