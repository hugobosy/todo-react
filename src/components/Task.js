import React from "react";

export const Task = props => {
    return (
        <div>
            <span style={props.important ? {color: 'red'} : null} className="task">Zadanie: {props.text}</span>
            <span>Data rozpoczęcia: {props.date}</span>
            <button onClick={() => props.done(props.id)}>Zadanie Wykonane</button>
            <button onClick={() => props.delete(props.id)}>X</button>
        </div>
    )
}