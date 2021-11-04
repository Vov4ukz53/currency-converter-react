import "./style.css";

const Calculator = ({ body, footer }) => (
   <section className="calculator">
      <div className="container">
         {body}
         {footer}
      </div>
   </section>
);

export default Calculator;