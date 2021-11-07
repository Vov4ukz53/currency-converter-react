import "./style.css";

const CalculatorResult = ({ result, selectedRate, selectedCurrency }) => (
    <div className="calculator__footer">
        <p className="calculator__result">{result}</p>
        <p className="calculator__info">1 PLN = {selectedRate} {selectedCurrency}, według
            średniego
            kursu NBP z dn.30.09.2021
        </p>
    </div>
);

export default CalculatorResult;