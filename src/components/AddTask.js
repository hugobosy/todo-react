import React, {useState} from "react";

export const AddTask = () => {

    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = Number(minDate.slice(0,4)) + 1;
    maxDate += "-12-31";

    const [state, setState] = useState({
        text: '',
        check: false,
        date: minDate,
    })

    return (
        <div>
            <input type="text" placeholder="dodaj zadanie" value={state.text}/>
            <input type="checkbox" checked={state.check}/>
            <label>Priorytet</label>
            <br/>
            <label>Do kiedy zrobić</label>
            <input type="date" value={state.date} min={minDate} max={maxDate}/>
            <button>Dodaj</button>
        </div>
    )
}