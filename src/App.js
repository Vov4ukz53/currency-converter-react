import Header from "./Header";
import Footer from "./Footer";
import Page from "./Page";

function App() {
  return (
    <div className="App">
      <Header
        title="Kalkulator walutowy"
      />

      <Page>
        <section className="calculator">
          <div className="container">
            <form className="formCalculator js-form">
              <fieldset className="formCalculator__fieldset">
                <legend className="formCalculator__legend">Przelicznik walut</legend>
                <p>
                  <label className="formCalculator__label"><span className="formCalculator__labelText">Podaj kwote
                    (zł): </span>
                    <input autoFocus required className="formCalculator__input js-form-input" type="number"
                      min="1" step="any" />
                  </label>
                </p>
                <p>
                  <label className="formCalculator__label"><span className="formCalculator__labelText">Przelicz
                    na: </span>
                    <select className="formCalculator__select js-form-select">
                      <option value="eur" >EUR - Euro</option>
                      <option value="usd">USD - dolar amerykański</option>
                      <option value="gbp">GBP - Funt szterling</option>
                    </select>
                  </label>
                </p>
                <button className="formCalculator__button">Przelicz</button>
              </fieldset>
            </form>
            <div className="calculator__footer">
              <p className="calculator__result js-calculator-result"></p>
              <p className="calculator__info">1 PLN = <strong className="js-calculator-change"></strong>, według
                średniego
                kursu NBP z dn.30.09.2021
              </p>
            </div>
          </div>
        </section>
      </Page>

      <Footer />
    </div>
  );
}

export default App;
