import styled from 'styled-components';
export const Container = styled.nav`
	padding: ${({ theme }) => theme.spacing.double(1, 4)};
	display: flex;
	border: 1px solid;
	justify-content: space-between;
`;

export const LeftNav = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const ThemeSwitch = styled.div`
	background: ${({ theme }) => theme.colors.background};
	display: flex;
`;