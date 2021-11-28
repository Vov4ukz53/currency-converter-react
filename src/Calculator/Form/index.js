import { useState, useRef } from "react";
import {
   StyledForm,
   Fieldset,
   Legend,
   Item,
   Content,
   Input,
   Button,
   Paragraph,
   StyledStrong
} from "./styled.js";
import { useCurrencies } from "../../useCurrencies.js";

const Form = ({ calculateResult, clock }) => {
   const [amount, setAmount] = useState("");
   const [selectedCurrency, setSelectedCurrency] = useState("EUR");
   const currenciesData = useCurrencies();
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
      <StyledForm
         onSubmit={onFormSubmit}
      >
         {clock}
         <Fieldset>
            <Legend>
               Przelicznik walut
            </Legend>
            {
               (() => {
                  if (currenciesData.state === "error") {
                     return <Paragraph error >
                        Coś  poszlo nie tak. Sprawdź, czy masz polaczenie z internetem. Jeśli masz... to nasza wina. Spróbuj pózniej!
                     </Paragraph>
                  } else if (currenciesData.state !== "success") {
                     return <Paragraph download >
                        Laduje kursy walut z Europejskiego Banku Centralnego...
                     </Paragraph>
                  } else {
                     return <>
                        <Item>
                           <Content>
                              Podaj kwote (zł)*:
                           </Content>
                           <Input
                              active={amount.length !== 0}
                              value={amount}
                              onChange={({ target }) =>
                                 setAmount(target.value)}
                              autoFocus required
                              type="number" min="1" step="any"
                              ref={inputRef}
                           />
                        </Item>
                        <Item select>
                           <Content>
                              Przelicz na:
                           </Content>
                           <Input
                              as="select"
                              select
                              value={selectedCurrency}
                              onChange={({ target }) => setSelectedCurrency(target.value)}
                           >
                              {Object.keys(currenciesData.rates).map((currency) => (
                                 <option
                                    key={currency}
                                    value={currency}
                                 >
                                    {currency}
                                 </option>
                              ))}
                           </Input>
                        </Item>
                        <Paragraph info>
                           Kursy walut pobierane są z Europejskiego Banku Centralnego.
                        </Paragraph>
                        <Paragraph info>
                           Aktualne na dzień:
                           <StyledStrong>
                              {" "}{currenciesData.date}
                           </StyledStrong>
                        </Paragraph>
                        <Button
                           onClick={onButtonClick}
                        >
                           Przelicz
                        </Button>
                     </>
                  }
               })()
            }
         </Fieldset >
      </StyledForm >
   );
};

export default Form;