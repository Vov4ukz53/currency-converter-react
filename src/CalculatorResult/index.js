import "./style.css";

const CalculatorResult = ({ result, selectedRate }) => {

    if (result === undefined) {
        return null;
    }

    return (
        <div className="calculator__footer">
            <p className="calculator__result">
                {result.inputAmount.toFixed(2)} pln = {result.outputAmount.toFixed(2)} {result.selectedCurrency}
            </p>
            <p className="calculator__info">1 PLN = {selectedRate} {result.selectedCurrency}, według
                średniego
                kursu NBP z dn.30.09.2021
            </p>
        </div>
    )
};

export default CalculatorResult;