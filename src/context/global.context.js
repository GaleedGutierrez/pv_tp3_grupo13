import { createContext, useContext } from 'react';

/** @import { Task } from '@models/Task.model' */
/**
 * @typedef {object} GlobalContextType
 * @property {Task[]} tasks // Changed Task to Task[]
 * @property {React.Dispatch<React.SetStateAction<Task[]>>} setTasks
 */

/** @type {React.Context<GlobalContextType>} */
export const GlobalContext = createContext({
	tasks: /** @type {Task[]} */ ([]),
	setTasks:
		/** @type {React.Dispatch<React.SetStateAction<Task[]>>} */ () => {},
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
