import { useState } from "react";
import GlobalStyle from "./globalStyle";
import Header from "./Header";
import Calculator from "./Calculator";
import Form from "./Calculator/Form";
import Result from "./Calculator/Result";
import Footer from "./Footer";
import currencies from "./currencies";
import { Clock } from "./Calculator/Form/Clock";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
