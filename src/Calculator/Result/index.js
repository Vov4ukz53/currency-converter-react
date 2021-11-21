import { Wrapper, ResultMain, ResultInfo, Rate } from "./styled.js";

const Result = ({ result, selectedRate }) => (
   <Wrapper>
      {result !== undefined && (
         <>
            <ResultMain>
               {result.inputAmount.toFixed(2)} PLN = {result.outputAmount.toFixed(2)}{" "}
               {result.selectedCurrency.toUpperCase()}
            </ResultMain>
            <ResultInfo className="result__info">
               1 PLN =
               <Rate>
                  {" "}{selectedRate(result.selectedCurrency)}{" "}
                  {result.selectedCurrency.toUpperCase()}{" "}
               </Rate>, według średniego kursu NBP z dn.30.09.2021
            </ResultInfo>
         </>
      )}
   </Wrapper>
);

export default Result;