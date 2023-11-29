import React, { Component } from "react";
import "./task.css"


export default class Task extends Component {

    state = {
        completed: false,
        editing: false,
    };

    onCheckboxClick = () => {
        this.setState(({completed}) => {
            return {
                completed: !completed
            }
        })
    }

    onEditClick = () => {
        this.setState(({editing}) => {
            return {
                editing: !editing
            }
        })
    }

    render() {
        const { label, onDeleted } = this.props
        const { completed, editing } = this.state
        let classNames = "";

        if (completed) {
            classNames += "completed";
        }

        if (editing) {
            classNames += "editing";
        }




        return (
            <li className= {classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox"
                        onChange= { this.onCheckboxClick }
                    />
                    <label>
                        <span className="description">{ label }</span>
                        {/* <span className="created"></span> */}
                    </label>
                    <button className="icon icon-edit"
                        onClick={ this.onEditClick }></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
            {editing && (
            <input type="text" className="edit" value={label}/>
            )}
            </li>
        )
    }
}