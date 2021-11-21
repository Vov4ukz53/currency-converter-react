import styled from "styled-components";

export const Wrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: #fff;
`;

export const MainTitle = styled.h1`
    text-align: center;
    margin: 0;
    padding: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 24px;
        padding: 10px 0;
    }
`;