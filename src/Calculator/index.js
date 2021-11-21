import { Wrapper } from "./styled.js";
import Container from "./Container";

const Calculator = ({ body, result }) => (
   <Wrapper>
      <Container>
         {body}
         {result}
      </Container>
   </Wrapper>
);

export default Calculator;