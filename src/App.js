import './App.css';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { useFetch } from './hooks/useFetch';
import { useTodosApi } from './hooks/useTodos'
import { TaskContext } from './context/taskContext';

function App() {

    // const [tasks, setTasks] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3030/jsonstore/todos')
    //         .then(res => res.json())
    //         .then(result => {
    //             setTasks(Object.values(result));
    //         })
    // }, [])

    const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', [])
    const { removeTodo, createTodo, updateTodo } = useTodosApi();

    const taskCreateHandler = async (newTask) => {
        const createdTask = await createTodo(newTask)
        setTasks(state => [
            ...state,
            createdTask,
        ]);
    };

    const taskDeleteHandler = async (taskId) => {
        await removeTodo(taskId)

        setTasks(state => state.filter(x => x._id != taskId))
    }

    const toggleTask = async (task) => {
        const updatedTask = { ...task, isCompleted: !task.isCompleted }

        await updateTodo(task._id, updatedTask)

        setTasks(state => state.map(x => x._id == task._id ? updatedTask : x))
    }

    const taskEditHandler = async (task, newTitle) => {
        const updatedTask = { ...task, title: newTitle };

        await updateTodo(task._id, updatedTask);

        setTasks(state => state.map(x => x._id == task._id ? updatedTask : x))

    }

    return (
        <TaskContext.Provider value={{ tasks, taskDeleteHandler, toggleTask, taskEditHandler }}>
            <div className="App">
                <header>
                    <h1>TODO App</h1>
                </header>

                <main>
                    {isLoading
                        ? <p>Loading...</p>
                        : <TaskList />}

                    <CreateTask taskCreateHandler={taskCreateHandler} />
                </main>

            </div>
        </TaskContext.Provider>
    );
}

export default App;
