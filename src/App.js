import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Page from "./Page";
import Calculator from "./Calculator";
import Form from "./Form";
import CalculatorFooter from "./CalculatorFooter";
import currencies from "./currencies";

function App() {

  const [result, setResult] = useState(
    { fromCurrency: "PLN", toCurrency: "", endResult: "" }
  );

  

  const calculateResult = (amount) => {
    return amount / 2;
  };

  return (
    <div className="App">
      <Page>
        <Header
          title="Kalkulator walutowy"
        />

        <Calculator
          body=
          {<Form
            calculateResult={calculateResult}
          />}
          footer={<CalculatorFooter />}
        />

        <Footer />
      </Page>
    </div>
  );
}

export default App;
