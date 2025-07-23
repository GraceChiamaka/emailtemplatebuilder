"use client";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html, body{
		width: 100%;
		background: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.text};
    	transition: background-color 0.3s ease, color 0.3s ease;
		font-family: ${({ theme }) => theme.fontFamily.geist}; 
		font-weight: 400;
		font-size: 1rem;
	}

`;
