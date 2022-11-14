import './App.css';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import { useState } from 'react'

function App() {

    const [tasks, setTasks] = useState([
        { _id: 1, title: 'first' },
        { _id: 2, title: 'second' },
        { _id: 3, title: 'third' },
    ]);

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
