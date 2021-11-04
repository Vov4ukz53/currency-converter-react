import "./style.css";
import Container from "../Container";

const Calculator = ({ body, footer }) => (
   <section className="calculator">
      <Container>
         {body}
         {footer}
      </Container>
   </section>
);

export default Calculator;