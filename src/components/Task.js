import React from "react";

export const Task = props => {
    return (
        <div>
            <span style={props.important ? {color: 'red'} : null} className="task">Zadanie: {props.text}</span>
            <span>Data rozpoczęcia: {props.date}</span>
            <button>Zadanie Wykonane</button>
            <button>X</button>
        </div>
    )
}