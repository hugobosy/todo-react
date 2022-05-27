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

    const handleText = e => {
        setState({
            text: e.target.value,
        })
    }

    const handleCheckbox = e => {
        setState({
            check: e.target.checked,
        })
    }

    const handleDate = e => {
        setState({
            date: e.target.value,
        })
    }

    const handleClick = () => {

    }
    return (
        <div>
            <input type="text" placeholder="dodaj zadanie" value={state.text} onChange={handleText}/>
            <input type="checkbox" checked={state.check} onChange={handleCheckbox}/>
            <label>Priorytet</label>
            <br/>
            <label>Do kiedy zrobić</label>
            <input type="date" value={state.date} min={minDate} max={maxDate} onChange={handleDate}/>
            <button onClick={handleClick}>Dodaj</button>
        </div>
    )
}