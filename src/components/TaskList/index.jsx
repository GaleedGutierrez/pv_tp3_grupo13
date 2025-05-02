import { TaskItem } from '../TaskItem';
/** @import { Task } from '@models/Task.model' */

/**
 * @description This component is used to display the list of tasks and allows the user to interact with them.
 * @param {object} props - The component props
 * @param {Task[]} props.tasks - The tasks array.
 * @param {React.Dispatch<React.SetStateAction<Task[]>>} props.setTasks - The function to set the tasks.
 * @returns {import('react').JSX.Element}
 * @example <TaskList task={tasks} setTasks={setTasks}/>
 */
export const TaskList = ({ tasks, setTasks }) => {
	if (tasks.length === 0) {
		return <p>No hay tareas todavía.</p>;
	}

	return (
		<ul>
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					setTasks={setTasks}
					task={task}
					tasks={tasks}
				/>
			))}
		</ul>
	);
};
