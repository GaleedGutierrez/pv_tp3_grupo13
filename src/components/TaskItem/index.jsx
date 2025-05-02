/* eslint-disable security/detect-object-injection */
/** @import { Task } from '@models/Task.model' */

/**
 * @description This component is used to display a single task and allows the user to interact with it.
 * @param {object} props - The component props
 * @param {Task} props.task - The task object.
 * @param {Task[]} props.tasks - The tasks array.
 * @param {React.Dispatch<React.SetStateAction<Task[]>>} props.setTasks - The function to set the tasks.
 * @returns {import('react').JSX.Element}
 * @example <TaskItem setTasks={setTasks} task={task} tasks={tasks}/>
 */
export const TaskItem = ({ task, tasks, setTasks }) => {
	/**
	 * @param {number} taskId
	 */
	const handleCompleteTask = (taskId) => {
		const TASKS = structuredClone(tasks);
		const TASK_INDEX = TASKS.findIndex((task) => task.id === taskId);

		if (TASK_INDEX === -1) {
			return;
		}

		const TASK = TASKS[TASK_INDEX];

		TASK.completed = !TASK.completed;

		setTasks(TASKS);
	};

	/**
	 * @param {number} taskId
	 */
	const handleDeleteTask = (taskId) => {
		const TASKS = structuredClone(tasks);
		const TASK_INDEX = TASKS.findIndex((task) => task.id === taskId);

		if (TASK_INDEX === -1) {
			return;
		}

		TASKS.splice(TASK_INDEX, 1);

		setTasks(TASKS);
	};

	return (
		<li>
			<div>
				<input
					readOnly
					checked={task.completed}
					type="checkbox"
				/>
				{task.completed ? <s>{task.text}</s> : <span>{task.text}</span>}
				<button onClick={() => handleCompleteTask(task.id)}>
					Realizada
				</button>
				<button onClick={() => handleDeleteTask(task.id)}>
					Eliminar
				</button>
			</div>
		</li>
	);
};
