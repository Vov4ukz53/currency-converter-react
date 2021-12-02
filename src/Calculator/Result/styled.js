import styled from "styled-components";

export const Wrapper = styled.div`
   position: relative;
	z-index: 1;
	text-align: center;
`;

export const ResultMain = styled.p`
   font-size: 22px;
	font-weight: 700;
	margin: 0px 0px 10px 0px;
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