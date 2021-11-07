import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Calculator from "./Calculator";
import Form from "./Form";
import CalculatorFooter from "./CalculatorFooter";
import currencies from "./currencies";

function App() {

  const [result, setResult] = useState({});

  const calculateResult = (amount) => {

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
        />}
        footer=
        {<CalculatorFooter />}
      />

      <Footer />
    </div>
  );
}

export default App;
