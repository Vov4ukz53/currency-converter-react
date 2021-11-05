import { useState } from "react";
import "./style.css";
import currencies from "../currencies";

const Form = () => {
   const [amount, setAmount] = useState("");
   // const [currency, setCurrency] = useState("USD");

   const onFormSubmit = (event) => {
      event.preventDefault();

   }

   return (
      <form
         className="form"
         onSubmit={onFormSubmit}
      >
         <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicznik walut</legend>
            <p>
               <label className="form__label"><span className="form__labelText">Podaj kwote
                  (zł): </span>
                  <input
                     value={amount}
                     onChange={({ target }) => setAmount(target.value)}
                     autoFocus
                     className="form__input"
                     type="number"
                     min="1" step="any"
                  />
               </label>
            </p>
            <p>
               <label className="form__label"><span className="form__labelText">Przelicz
                  na: </span>
                  <select className="form__select">
                     <option value={currencies.content}>{currencies.name}</option>
                     <option value={currencies.content}>{currencies.name}</option>
                     <option value={currencies.content}>{currencies.name}</option>
                  </select>
               </label>
            </p>
            <button className="form__button">Przelicz</button>
         </fieldset>
      </form>
   );
}

export default Form;