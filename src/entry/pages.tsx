import { Route, Routes } from 'react-router-dom';
import { HomePage, MemberProfileList, SingleProfile } from '../pages';

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='members'>
				<Route index element={<MemberProfileList />} />
				<Route path=':id' element={<SingleProfile />} />
			</Route>
		</Routes>
	);
}
