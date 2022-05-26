import React from "react";
import {Task} from "./Task";

export const TaskList = props => {

    const tasksList = props.tasks.map(task => <Task text={task.text} date={task.date} important={task.important}/>)
    return (
        <div>
            <h1>Lista tasków</h1>
            {tasksList}
        </div>
    )
}