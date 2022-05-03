import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppState = createContext({
	state: null,
	action: null,
	dispatch: function () {}
});

export const Provider = function ({ children }) {
	const [{ state, action }, dispatch] = useReducer(reducer, reducer());
	return (
		<AppState.Provider value={{ state, action, dispatch }}>
			{children}
		</AppState.Provider>
	);
};

export const useSelector = (selector) => {
	const { state } = useContext(AppState);
	return typeof selector === 'function' ? selector(state) : state;
};

export const useDispatch = () => useContext(AppState).dispatch;
