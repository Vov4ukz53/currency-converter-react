import { useState, useRef } from "react";
import "./style.css";
import currencies from "../../currencies";

const Form = ({ calculateResult, clock }) => {
   const [amount, setAmount] = useState("");
   const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].content);
   const [click, setClick] = useState(true);
   const inputRef = useRef();

   const onButtonClick = () => {
      setClick(click => click)
      if (click) {
         inputRef.current.focus();
      }
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(amount, selectedCurrency);
      setAmount("");
   };

   return (
      <form
         className="form"
         onSubmit={onFormSubmit}
      >
         {clock}
         <fieldset className="form__fieldset">
            <legend className="form__legend">
               Przelicznik walut
            </legend>
            <p className="form__item">
               <label className="form__label">
                  <span className="form__labelText">Podaj kwote (zł)*:</span>
                  <input
                     value={amount}
                     onChange={({ target }) => setAmount(target.value)}
                     autoFocus required
                     className={`form__input${amount.length !== 0
                        ? " form__input--active"
                        : ""}`}
                     type="number" min="1" step="any"
                     ref={inputRef}
                  />
               </label>
            </p>
            <p className="form__item">
               <label className="form__label">
                  <span className="form__labelText">
                     Przelicz na:
                  </span>
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
            <button
               className="form__button"
               onClick={onButtonClick}
            >
               Przelicz
            </button>
         </fieldset>
      </form>
   );
};

export default Form;