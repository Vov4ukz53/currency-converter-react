import "./style.css";

const Result = ({ result }) => {

    if (result === undefined) {
        return null;
    }

    return (
        <div className="result">
            <p className="result__main">
                {result.inputAmount.toFixed(2)} pln = {result.outputAmount.toFixed(2)} {result.selectedCurrency}
            </p>
            <p className="result__info">
                1 PLN = 
                {result.selectedCurrency}, według
                średniego
                kursu NBP z dn.30.09.2021
            </p>
        </div>
    )
};

export default Result;