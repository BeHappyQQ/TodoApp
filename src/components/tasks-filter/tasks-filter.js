import React from "react";
import "./tasks-filter.css"

const TasksFilter = () => {
    return (
        <ul className="filters">
            <li className="">
                <button className="selected">All</button>
            </li>
            <li>
                <button>Active</button>
            </li>
            <li>
                <button>Completed</button>
            </li>
        </ul>
    );
}

export default TasksFilter;