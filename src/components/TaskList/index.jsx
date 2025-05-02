import { TaskItem } from '../TaskItem';
/** @import { Task } from '@models/Task.model' */

/**
 * @param {{ tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>> }} props
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
