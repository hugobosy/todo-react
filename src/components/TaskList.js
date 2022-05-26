import React from "react";
import {Task} from "./Task";

export const TaskList = props => {

    const taskActive = props.tasks.map(task => task.active === true ?
        <Task key={task.id} id={task.id} text={task.text} date={task.date}
              important={task.important} delete={props.delete}
              done={props.done} active={task.active}/> : null)

    const taskCompleted = props.tasks.map(task => task.active === false ?
        <Task key={task.id} id={task.id} text={task.text} date={task.date}
              important={task.important}
              active={task.active} completedDate={task.finishDate}/> : null)

    const done = props.tasks.filter(task => !task.active);

    return (
        <>
            <div>
                <h1>Lista tasków do zrobienia</h1>
                {taskActive}
            </div>

            <hr/>

            <div>
                <h1>Lista zakończonych tasków {done.length}</h1>
                {taskCompleted}
            </div>

        </>
    )
}