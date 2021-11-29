import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
   position: relative;
	z-index: 1;
	text-align: center;
`;

const scale = keyframes`
	0% {
      transform: scale(1); 
   }

   50% {
      transform: scale(1.1); 
   }

   100% {
      transform: scale(1); 
   }
`;

const color = keyframes`
	0% {
      color: #fff;
   }

   50% {
      color: #105a23; 
   }

   100% {
      color: #fff;
   }
`;

export const ResultMain = styled.p`
   font-size: 22px;
	font-weight: 700;
	margin: 0px 0px 10px 0px;
   animation: ${scale} 2s linear infinite,
      ${color} 2s linear infinite;
`;

export const ResultInfo = styled.p`
   color: #dbd7d7;
	line-height: 1.5;
	margin-top: 0;
	padding: 0 15px;
`;

export const Rate = styled.strong`
   color: ${({ theme }) => theme.colors.textColor};
`;