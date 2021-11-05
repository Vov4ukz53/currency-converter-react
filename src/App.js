import Header from "./Header";
import Footer from "./Footer";
import Page from "./Page";
import Calculator from "./Calculator";
import Form from "./Form";
import CalculatorFooter from "./CalculatorFooter";

function App() {
  return (
    <div className="App">
      <Page>
        <Header
          title="Kalkulator walutowy"
        />

        <Calculator
          body=
          {<Form />}
          footer={<CalculatorFooter />}
        />

        <Footer />
      </Page>
    </div>
  );
}

export default App;
