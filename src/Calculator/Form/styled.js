import styled, { css } from "styled-components";

export const Wrapper = styled.form`
   position: relative;
   z-index: 1;
   background-color: rgba(231, 224, 224, 0.568);
   border-radius: 5px;
   padding: 30px;
   box-shadow: 3px 3px 5px #ffffff;
   margin-bottom: 22px;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      padding: 15px;
   }
`;

export const Fieldset = styled.fieldset`
   border: none;
   padding: 0;
   margin: 0;

   @media (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      text-align: center;
   }
`;

export const Legend = styled.legend`
   font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainColor};

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 24px;
   }
`;

export const Item = styled.p`
   margin: 20px 0px;
`;

export const Content = styled.span`
   display: inline-block;
   width: 200px;
   margin-right: 10px;
   text-align: left;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      margin-bottom: 10px;
   }
`;

export const Input = styled.input`
   padding: 10px;
   border: none;
   width: 400px;
   border-radius: 5px;
   font-weight: 700;
   transition: transform .3s;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      width: 100%;
   }

   ${({ active }) => active && css`
      transform: scale(1.05);
   `}
`;

export const Button = styled.button`
   border: none;
   padding: 10px 20px;
   background-color: ${({theme}) => theme.colors.mainColor};
   color: ${({theme}) => theme.colors.textColor};
   border-radius: 5px;
   transition: all 0.3s;
   cursor: pointer;
   width: 100%;
   margin-top: 15px;
   font-size: 18px;

   &:hover {
      background-color: hsl(135, 70%, 26%);
      box-shadow: 2px 2px 3px ${({theme}) => theme.colors.textColor};
   }

   &:active {
      background-color: hsl(135, 70%, 30%);
   }
`;

