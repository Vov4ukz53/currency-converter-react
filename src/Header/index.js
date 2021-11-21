import { Wrapper, MainTitle } from "./styled.js";


const Header = ({ title }) => (
    <Wrapper>
        <MainTitle>{title}</MainTitle>
    </Wrapper>
);

export default Header;