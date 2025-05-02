import { useState } from 'react';

import { useGlobalContext } from '../../context/global.context.js';

/**
 * @returns {JSX.Element}
 * @description TaskInput component
 * @example <TaskInput />
 */
export const TaskInput = () => {
	const { setTasks } = useGlobalContext();
	/** @type {[string, React.Dispatch<React.SetStateAction<string>>]} */
	const [inputNewTask, setInputNewTask] = useState('');

	/**
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 */
	const handleChange = (event) => {
		setInputNewTask(event.target.value);
	};

	/**
	 * @param {React.FormEvent<HTMLFormElement>} event
	 */
	const handleSubmit = (event) => {
		event.preventDefault();

		if (inputNewTask.trim() === '') {
			return;
		}

		const newTask = {
			text: inputNewTask,
			completed: false,
			id: Date.now(),
		};

		setTasks((previousTasks) => [...previousTasks, newTask]);
	};

	return (
		<form>
			<input
				id="task-input"
				name="task"
				type="text"
				value={inputNewTask}
				onChange={handleChange}
			/>
			<button onClick={handleSubmit}>Agregar</button>
		</form>
	);
};
