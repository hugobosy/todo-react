import React, {useState} from "react";

export const AddTask = () => {

    const [state, setState] = useState({
        text: '',
        check: false,
        date: "2022-05-27"
    })

    return (
        <div>
            <input type="text" placeholder="dodaj zadanie" value={state.text}/>
            <input type="checkbox" checked={state.check}/>
            <label>Priorytet</label>
            <br/>
            <label>Do kiedy zrobić</label>
            <input type="date" value={state.date} min="2022-05-27" max="2022-12-31"/>
            <button>Dodaj</button>
        </div>
    )
}