/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
import { TaskInput } from '@components/TaskInput';
import { useState } from 'react';
// import { TaskList } from '@components/TaskList';
// Ensure the file exists or update the path if necessary
/** @import { Task } from './models/Task.model.js' */

/**
 * @description Main App component
 * @returns {import('react').JSX.Element}
 * @example <App />
 */
function App() {
	// @ts-ignore
	const [tasks, setTasks] = useState(/** @type {Task[]} */ ([]));

	return (
		<>
			<h1>Lista de tareas</h1>
			<TaskInput setTasks={setTasks} />
			{/* <TaskList
				setTasks={setTasks}
				tasks={tasks}
			/>  */}
		</>
	);
}

export default App;
