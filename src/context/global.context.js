import { createContext, useContext } from 'react';

/** @import { Task } from '../types/Task.js' */
/**
 * @typedef {object} GlobalContextType
 * @property {Task[]} tasks // Changed Task to Task[]
 * @property {React.Dispatch<React.SetStateAction<Task[]>>} setTasks
 */

/** @type {React.Context<GlobalContextType>} */
export const GlobalContext = createContext({
	tasks: [],
	setTasks: () => {},
});

/**
 * @returns {GlobalContextType}
 */
export const useGlobalContext = () => {
	const CONTEXT = useContext(GlobalContext);

	if (CONTEXT === undefined) {
		throw new Error(
			'useGlobalContext must be used within a GlobalContextProvider',
		);
	}

	return CONTEXT;
};
