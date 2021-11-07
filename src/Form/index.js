import { useState } from "react";
import "./style.css";
import currencies from "../currencies";

const Form = ({ calculateResult }) => {
   const [amount, setAmount] = useState("");
   const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].content);



   const onFormSubmit = (event) => {
      event.preventDefault();

      console.log(calculateResult(amount, selectedCurrency));
   };

   return (
      <form
         className="form"
         onSubmit={onFormSubmit}
      >
         <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicznik walut</legend>
            <p>
               <label className="form__label">
                  <span className="form__labelText">Podaj kwote (zł): </span>
                  <input
                     value={amount}
                     onChange={({ target }) => setAmount(target.value)}
                     autoFocus
                     className="form__input"
                     type="number" min="1" step="any"
                  />
               </label>
            </p>
            <p>
               <label className="form__label">
                  <span className="form__labelText">Przelicz na: </span>
                  <select
                     className="form__select"
                     value={selectedCurrency}
                     onChange={({ target }) => setSelectedCurrency(target.value)}
                  >
                     {currencies.map((currency) => (
                        <option
                           key={currency.content}
                           value={currency.content}
                        >
                           {currency.name}
                        </option>
                     ))};
                  </select>
               </label>
            </p>
            <button className="form__button">Przelicz</button>
         </fieldset>
      </form>
   );
}

export default Form;