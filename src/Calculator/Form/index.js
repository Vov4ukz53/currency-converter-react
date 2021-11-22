import { useState, useRef } from "react";
import {
   Wrapper, Fieldset, Legend, Item, Content, Input, Button
} from "./styled.js";
import currencies from "../../currencies";

const Form = ({ calculateResult, clock }) => {
   const [amount, setAmount] = useState("");
   const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].content);
   const inputRef = useRef();

   const onButtonClick = () => {
      inputRef.current.focus();
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(amount, selectedCurrency);
      setAmount("");
   };

   return (
      <Wrapper
         onSubmit={onFormSubmit}
      >
         {clock}
         <Fieldset>
            <Legend>
               Przelicznik walut
            </Legend>
            <Item>
               <Content>
                  Podaj kwote (zł)*:
               </Content>
               <Input
                  active={amount.length !== 0}
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  autoFocus required
                  type="number" min="1" step="any"
                  ref={inputRef}
               />
            </Item>
            <Item select>
               <Content>
                  Przelicz na:
               </Content>
               <Input as="select"
                  select
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
               </Input>
            </Item>
            <Button
               onClick={onButtonClick}
            >
               Przelicz
            </Button>
         </Fieldset>
      </Wrapper>
   );
};

export default Form;