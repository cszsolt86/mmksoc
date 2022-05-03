import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppWrapper from './appWrapper';
import OverlayRoot from './overlays';
import PagesRoot from './pages';

export default function App() {
	return (
		<BrowserRouter>
			<AppWrapper>
				<Suspense fallback={'loading'}>
					<PagesRoot />
					<OverlayRoot />
				</Suspense>
			</AppWrapper>
		</BrowserRouter>
	);
}
