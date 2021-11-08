import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Calculator from "./Calculator";
import Form from "./Form";
import Result from "./Result";
import currencies from "./currencies";

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
