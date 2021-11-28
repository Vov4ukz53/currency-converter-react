import styled from "styled-components";
import background from "./background.jpeg";

export const Wrapper = styled.section`
   position: relative;
	padding-top: 40px;
	color: #fff;
	background-image: url("${background}");
	background-position: center;
	background-size: cover;

   &:after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.80);
   }

   @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
		padding-top: 30px;
   }

   @media (max-width: ${({theme}) => theme.breakpoints.extraSmall}px) {
      padding-top: 20px;
   }
`;