import "./style.css";

const CalculatorFooter = () => (
    <div className="calculator__footer">
        <p className="calculator__result js-calculator-result"></p>
        <p className="calculator__info">1 PLN = <strong className="js-calculator-change"></strong>, według
            średniego
            kursu NBP z dn.30.09.2021
        </p>
    </div>
);

export default CalculatorFooter;