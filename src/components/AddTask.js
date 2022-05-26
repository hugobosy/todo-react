import React, {useState} from "react";

export const AddTask = () => {

    const [state, setState] = useState('')

    return (
        <div>
            <p>Dodaj task</p>
            <hr/>
        </div>
    )
}