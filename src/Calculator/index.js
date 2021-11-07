import "./style.css";
import Container from "./Container";

const Calculator = ({ body, result }) => (
   <section className="calculator">
      <Container>
         {body}
         {result}
      </Container>
   </section>
);

export default Calculator;