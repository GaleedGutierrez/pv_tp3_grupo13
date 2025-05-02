import { useState } from 'react';

/**
 * @description This component is used to add a new task to the list.
 * @param {object} props - The component props.
 * @param {React.Dispatch<React.SetStateAction<import('@models/Task.model').Task[]>>} props.setTasks - The function to set the tasks.
 * @returns {import('react').JSX.Element}
 * @example <TaskInput setTasks={setTasks}/>
 */
export const TaskInput = ({ setTasks }) => {
	const [inputNewTask, setInputNewTask] = useState('');

	/**
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 */
	const handleChange = (event) => {
		const { value } = event.target;

		setInputNewTask(value);
	};

	/**
	 * @param {React.MouseEvent<HTMLButtonElement>} event
	 */
	const handleSubmit = (event) => {
		event.preventDefault();

		const INPUT_TEXT = inputNewTask.trim();

		if (INPUT_TEXT === '') {
			return;
		}

		const NEW_TASK = {
			text: INPUT_TEXT,
			completed: false,
			id: Date.now(),
		};

		setTasks((previousTasks) => [...previousTasks, NEW_TASK]);
		setInputNewTask('');
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
