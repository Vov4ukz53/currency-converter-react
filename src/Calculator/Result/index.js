import "./style.css";

const Result = ({ result, selectedRate }) => {

   if (result === undefined) {
      return null;
   }

   return (
      <div className="result">
         <p className="result__main">
            {result.inputAmount.toFixed(2)} PLN = {result.outputAmount.toFixed(2)}{" "}
            {result.selectedCurrency.toUpperCase()}
         </p>
         <p className="result__info">
            1 PLN =
            <strong className="result__info result__info--rate">
               {selectedRate(result.selectedCurrency)}{" "}
               {result.selectedCurrency.toUpperCase()}
            </strong>, według średniego kursu NBP z dn.30.09.2021
         </p>
      </div>
   );
};

export default Result;