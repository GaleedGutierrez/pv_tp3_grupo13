import { TaskInput } from './components/TaskInput/index.jsx';
import GlobalProvider from './context/global.provider.jsx';

function App() {
	return (
		<GlobalProvider>
			<h1>Lista de tareas</h1>
			<TaskInput />
			{/* <TaskList /> */}
		</GlobalProvider>
	);
}

export default App;
