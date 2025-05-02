/** @import { Task } from '@models/Task.model' */

import { TaskItem } from '../TaskItem';

/**
 * @description This component is used to display the list of tasks and allows the user to interact with them.
 * @param {object} props - The component props
 * @param {Task[]} props.tasks - The tasks array.
 * @param {React.Dispatch<React.SetStateAction<Task[]>>} props.setTasks - The function to set the tasks.
 * @returns {import('react').JSX.Element}
 * @example <TaskList task={tasks} setTasks={setTasks}/>
 */
export const TaskList = ({ tasks, setTasks }) => (
	<ul className="task-list">
		{tasks.length > 0 &&
			tasks.map((task) => (
				<TaskItem
					key={task.id}
					setTasks={setTasks}
					task={task}
					tasks={tasks}
				/>
			))}
		{tasks.length === 0 && <p>No hay tareas</p>}
	</ul>
);
