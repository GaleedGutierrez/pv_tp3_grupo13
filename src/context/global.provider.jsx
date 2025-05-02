import { useMemo, useState } from 'react';

import { GlobalContext } from './global.context';

/** @import { Task } from '@models/Task.model.js' */

/**
 * @description GlobalProvider component that wraps the application and provides global state.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {import('react').JSX.Element} The GlobalProvider component.
 */
const GlobalProvider = ({ children }) => {
	const [tasks, setTasks] = useState(/** @type {Task[]} */ ([]));
	const CONTEXT_VALUE = useMemo(() => ({ tasks, setTasks }), [tasks]);

	return (
		<GlobalContext.Provider value={CONTEXT_VALUE}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
