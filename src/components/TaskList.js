import React from "react";
import {Task} from "./Task";

export const TaskList = props => {

    const done = props.tasks.filter(task => !task.active);

    const sortActive = props.tasks.sort((a,b) => {
        if(a.text < b.text) {
            return -1
        }

        if(a.text > b.text) {
            return 1
        }

        return 0
    });

    const sortComplete = done.sort((a,b) => {
        if(a.finishDate < b.finishDate) {
            return 1
        }
        if(a.finishDate > b.finishDate) {
            return -1
        }

        return 0;
    })

    const taskActive = sortActive.map(task => task.active === true ?
        <Task key={task.id} id={task.id} text={task.text} date={task.date}
              important={task.important} delete={props.delete}
              done={props.done} active={task.active}/> : null)

    const taskCompleted = sortComplete.map(task => task.active === false ?
        <Task key={task.id} id={task.id} text={task.text} date={task.date}
              important={task.important}
              active={task.active} completedDate={task.finishDate}/> : null)




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