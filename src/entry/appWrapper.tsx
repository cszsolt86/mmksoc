import styled, { createGlobalStyle } from 'styled-components';
import { HeaderComponent } from '../components/blocks/header';

const DefaultStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html {
		font-family: 'Inter', serif;
		font-size: 62.5%;
	}

	body {
		font-size: 1.4rem;
		font-weight: 300;
		color: #282828;
	}

	html, body, #root {
		height: 100%;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;

const Wrapper = styled.main`
	display: grid;
	height: 100%;
	background: #f4f4f4;
	grid-template-rows: 80px 1fr;

	${HeaderComponent} {
		background: #ffffff;
		box-shadow: 0 18px 60px #dcdcdc;
	}
`;

const AppWrapper = ({ children }) => {
	return (
		<Wrapper>
			<DefaultStyle />
			<HeaderComponent />
			{children}
		</Wrapper>
	);
};

export default AppWrapper;
