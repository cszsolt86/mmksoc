import React, { createContext, useContext } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

const hashParamContext = createContext({});
const { Provider } = hashParamContext;

const useHashPath = function () {
	const { hash } = useLocation();

	if (!hash || hash.length < 2) {
		return '';
	}

	return `/${hash.slice(1)}`;
};

export const useHashParams = () => {
	return useContext(hashParamContext);
};

export const HashRoute = ({ path, children }) => {
	const match = matchPath(path, useHashPath());

	if (!match) {
		return null;
	}

	return <Provider value={match?.params}>{children}</Provider>;
};
