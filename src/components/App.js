import './App.css';
import {AddTask} from "./AddTask";
import {TaskList} from "./TaskList";
import {useState} from "react";

function App() {

    const [state, setState] = useState([
        {id: 0, text: 'Przejść wiedźmina', date: '2022-09-11', important: true, active: true, finishDate: null},
        {id: 1, text: 'Przejść wiedźmina', date: '2022-01-14', important: false, active: true, finishDate: null},
        {id: 2, text: 'Przejść wiedźmina', date: '2022-09-11', important: true, active: true, finishDate: null},
        {id: 3, text: 'Przejść wiedźmina', date: '2022-04-11', important: false, active: true, finishDate: null},
        {id: 4, text: 'Przejść wiedźmina', date: '2022-05-11', important: true, active: true, finishDate: null},
    ])

    return (
        <div className="App">
            Todo App
            <AddTask/>
            <TaskList tasks={state}/>
        </div>
    );
}

export default App;
