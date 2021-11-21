import styled from "styled-components";

export const Date = styled.div`
   font-family: ${({theme}) => theme.fonts.date};
   text-align: right;
   color: ${({theme}) => theme.colors.textColor};
   letter-spacing: 2px;
   text-shadow: 1px 1px 2px ${({theme}) => theme.colors.mainColor};
   margin-bottom: 15px;
`;