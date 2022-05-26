import './App.css';
import {AddTask} from "./AddTask";
import {TaskList} from "./TaskList";

function App() {
    return (
        <div className="App">
            Todo App
            <AddTask/>
            <TaskList/>
        </div>
    );
}

export default App;
