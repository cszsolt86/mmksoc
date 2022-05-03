import styled from 'styled-components';

export const ButtonFrame = styled.button`
	outline: none;
	border: none;
	padding: 7px 24px;
	border-radius: 24px;
	background-color: #f4f4f4;
	box-shadow: 0 6px 12px #0003;
	font: inherit;
	cursor: pointer;

	svg {
		display: inline;
		margin-right: 0.9rem;
		margin-left: -0.5rem;
		vertical-align: middle;
	}

	span {
		display: inline;
		vertical-align: middle;
		font-weight: 600;
	}

	&:hover {
		background-color: #fcfcfc;
	}

	&:active {
		box-shadow: 0 3px 8px #0003;
	}
`;
