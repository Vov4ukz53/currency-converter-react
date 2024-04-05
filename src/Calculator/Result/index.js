import { Wrapper, ResultMain, ResultInfo, Rate } from "./styled.js";

const Result = ({ result, selectedRate }) => (
   <Wrapper>
      {result !== undefined && (
         <>
            <ResultMain>
               {result.inputAmount.toFixed(2)} USD =
               {" "}{result.outputAmount.toFixed(2)}
               {" "}{result.selectedCurrency.toUpperCase()}
            </ResultMain>
            <ResultInfo>
               1 USD =
               <Rate>
                  {" "}{selectedRate(result.selectedCurrency).toFixed(2)}
                  {" "}{result.selectedCurrency.toUpperCase()}
               </Rate>
            </ResultInfo>
         </>
      )}
   </Wrapper>
);

export default Result;