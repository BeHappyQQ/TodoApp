import React from "react";
import Task from "../task/task";
import "./task-list.css";

const TaskList = () => {
    return (
        <ul className="todo-list">
            <Task label = "Completed task" state = "completed"></Task>
            <Task label = "Editing task" state= "editing"></Task>
            <Task label = "Active task" state = ""></Task>
        </ul>
    )
}

export default TaskList;