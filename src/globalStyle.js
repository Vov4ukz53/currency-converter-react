import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html {
	   box-sizing: border-box;
   }

   *, ::after, ::before {
      box-sizing: inherit;
   }

   .App{
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      font-family: ${({ theme }) => theme.fonts.mainFont};
   }
`;

export default GlobalStyle;