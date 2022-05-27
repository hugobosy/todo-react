import React, {useState} from "react";

export const AddTask = props => {

    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = Number(minDate.slice(0, 4)) + 1;
    maxDate += "-12-31";

    const [text, setText] = useState('')
    const [check, setCheck] = useState(false)
    const [date, setDate] = useState(minDate)

    const handleText = e => {
        setText(e.target.value)
    }


    const handleCheckbox = e => {
        setCheck(e.target.checked)
    }

    const handleDate = e => {
        setDate(e.target.value)
    }

    const handleClick = () => {
        const add = props.add(text, date, check);

        if (add) {
            setText('');
            setDate(minDate);
            setCheck(false)
        }
    }
    return (
        <div>
            <input type="text" placeholder="dodaj zadanie" value={text} onChange={handleText}/>
            <input type="checkbox" checked={check} onChange={handleCheckbox}/>
            <label>Priorytet</label>
            <br/>
            <label>Do kiedy zrobić</label>
            <input type="date" value={date} min={minDate} max={maxDate} onChange={handleDate}/>
            <button onClick={handleClick}>Dodaj</button>
        </div>
    )
}