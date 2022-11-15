import './App.css';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { useEffect, useState } from 'react'

function App() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(result => {
                setTasks(Object.values(result));
            })
    }, [])

    const taskCreateHandler = (newTask) => {
        setTasks(state => [
            ...state,
            {
                _id: state[state.length - 1]?._id + 1 || 1,
                title: newTask
            }
        ]);
    };

    const taskDeleteHandler = (taskId) => {
        setTasks(state => state.filter(x => x._id != taskId))
    }

    return (
        <div className="App">
            <header>
                <h1>TODO App</h1>
            </header>

            <main>
                <TaskList tasks={tasks} taskDeleteHandler={taskDeleteHandler} />
                <CreateTask taskCreateHandler={taskCreateHandler} />
            </main>

        </div>
    );
}

export default App;
