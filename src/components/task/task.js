import React from "react";
import "./task.css"

const Task = ( {label, state} ) => {
    return (
        <li className = { state }>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>
                    <span className="description">{ label }</span>
                    {/* <span className="created"></span> */}
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            {state === "editing"} {
            <input type="text" className="edit" value= ""></input>
            }
        </li>
    )
}

export default Task;