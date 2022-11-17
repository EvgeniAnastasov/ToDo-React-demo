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
    const { removeTodo } = useTodosApi();

    const taskCreateHandler = (newTask) => {
        setTasks(state => [
            ...state,
            {
                _id: state[state.length - 1]?._id + 1 || 1,
                title: newTask
            }
        ]);
    };

    const taskDeleteHandler = async (taskId) => {
        await removeTodo(taskId)

        setTasks(state => state.filter(x => x._id != taskId))
    }

    return (
        <TaskContext.Provider value={{ tasks, taskDeleteHandler }}>
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
