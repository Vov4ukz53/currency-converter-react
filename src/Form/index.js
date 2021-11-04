import "./style.css";

const Form = () => (
   <form className="form js-form">
      <fieldset className="form__fieldset">
         <legend className="form__legend">Przelicznik walut</legend>
         <p>
            <label className="form__label"><span className="form__labelText">Podaj kwote
               (zł): </span>
               <input autoFocus required className="form__input js-form-input" type="number"
                  min="1" step="any" />
            </label>
         </p>
         <p>
            <label className="form__label"><span className="form__labelText">Przelicz
               na: </span>
               <select className="form__select js-form-select">
                  <option value="eur" >EUR - Euro</option>
                  <option value="usd">USD - dolar amerykański</option>
                  <option value="gbp">GBP - Funt szterling</option>
               </select>
            </label>
         </p>
         <button className="form__button">Przelicz</button>
      </fieldset>
   </form>
);

export default Form;