import { useMemo, useState } from 'react';

import { GlobalContext } from './global.context';

/** @import { Task } from '../types/Task.js' */

/**
 * @description GlobalProvider component that wraps the application and provides global state.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The GlobalProvider component.
 */
const GlobalProvider = ({ children }) => {
	/** @type {[Task[], React.Dispatch<React.SetStateAction<Task[]>>]} */
	const [tasks, setTasks] = useState([]);
	/** @type {{value: number, setValue: React.Dispatch<React.SetStateAction<number>>}} */
	const CONTEXT_VALUE = useMemo(() => ({ tasks, setTasks }), [tasks]);

	return (
		<GlobalContext.Provider value={CONTEXT_VALUE}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
