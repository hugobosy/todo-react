import React from "react";
import {Task} from "./Task";

export const TaskList = props => {

    const tasksList = props.tasks.map(task => <Task key={task.id} id={task.id} text={task.text} date={task.date}
                                                    important={task.important} delete={props.delete}
                                                    done={props.done}/>)
    return (
        <div>
            <h1>Lista tasków</h1>
            {tasksList}
        </div>
    )
}