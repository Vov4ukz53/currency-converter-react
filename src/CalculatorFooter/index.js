import "./style.css";
import currencies from "../currencies";

const CalculatorFooter = () => (
    <div className="calculator__footer">
        <p className="calculator__result"></p>
        <p className="calculator__info">1 PLN = {currencies.value}, według
            średniego
            kursu NBP z dn.30.09.2021
        </p>
    </div>
);

export default CalculatorFooter;