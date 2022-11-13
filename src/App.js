import './App.css';
import { CtreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';

function App() {
    return (
        <div className="App">
            <header>
                <h1>TODO App</h1>
            </header>

            <main>
                <TaskList />
                <CtreateTask />
            </main>

        </div>
    );
}

export default App;
