import styled from 'styled-components';
import { HashRoute, useHashParams } from '../lib/routing';

const OverlayWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fffa;

	&:empty {
		display: none;
		visibility: hidden;
	}
`;

const MediaViewer = () => {
	const { id } = useHashParams();
	return <p>Displaying media item with id {id}</p>;
};

const Overlays = () => {
	return (
		<OverlayWrapper>
			<HashRoute path='hello/:id'>
				<p>hello world</p>
			</HashRoute>
			<HashRoute path='media/:id'>
				<MediaViewer />
			</HashRoute>
		</OverlayWrapper>
	);
};

export default Overlays;
