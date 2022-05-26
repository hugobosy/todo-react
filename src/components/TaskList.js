import React from "react";
import {Task} from "./Task";

export const TaskList = () => {
    return (
        <div>
            <h1>Lista tasków</h1>
            <Task/>
            <Task/>
            <Task/>
        </div>
    )
}