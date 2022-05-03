import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonFrame } from '../../elements/button';

const StyleableHeader = function ({ className }) {
	return (
		<header className={className}>
			<nav>
				<Link to='/'>home</Link>
				<Link to='members'>members</Link>
				<Link to='groups'>groups</Link>
				<Link to='events'>events</Link>
				<ButtonFrame>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm4 10h-3v4h-2v-4h-3l4-4 4 4z' />
					</svg>
					<span>share</span>
				</ButtonFrame>
			</nav>
		</header>
	);
};

export const HeaderComponent = styled(StyleableHeader)`
	display: flex;
	justify-content: center;
	align-items: center;

	a + * {
		margin-left: 2rem;
	}
`;

export default StyleableHeader;
