import React from "react";

export const Task = props => {
    return (
        <div>
            {props.active === true ?
                <p>
                    <strong>Zadanie: </strong>
                    <span style={props.important ? {color: 'red'} : null}>{props.text}</span>
                    &nbsp;
                    <strong>Data rozpoczęcia: </strong>
                    <span>{props.date}</span>
                    &nbsp;
                    <button onClick={() => props.done(props.id)}>Zadanie wykonane</button>
                    <button onClick={() => props.delete(props.id)}>X</button>
                </p>
                :
                <p>
                    <strong>Wykonane zadanie: </strong>
                    <span>{props.text}</span>
                    &nbsp;
                    <strong>Data zakończenia: </strong>
                    <span>{new Date(props.completedDate).toLocaleString()}</span>
                </p>}
        </div>
    )
}