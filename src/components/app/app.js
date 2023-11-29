import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import TasksFilter from "../tasks-filter/tasks-filter";
import "./app.css"


export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      {label: "Completed task", completed: false, editing: false, id: 1},
      {label: "Editing task", completed: false, editing: false, id: 2},
      {label: "Active task", completed: false, editing: false, id:3}
    ]
  };

  deleteItem = (id) => {
    this.setState (({ todoData }) => {
    const newData = todoData.filter((el) => el.id !== id);
    return {
      todoData: newData
    };

  });
  };

  // addItem = (text) => {
  //   text = "wwe"
  //   const newItem = {
  //     label: text,
  //     completed: false,
  //     editing: false,
  //     id: this.maxId++
  //   }

  //   this.setState(({todoData}) => {
  //       const newArr = [...todoData, newItem]
  //       return {
  //         todoData: newArr
  //       }
  //   })

  // }

  render() {
    return (
      <div>
        <section className='todoapp'>
          <header className='header'>
            <h1>todos</h1>
            <NewTaskForm addItem = { this.addItem }></NewTaskForm>
          </header>
          <section className='main'>
            <TaskList 
            todos = {this.state.todoData} 
            onDeleted = { this.deleteItem }>
            </TaskList>
            <Footer>
              <TasksFilter/>
            </Footer>
          </section>
        </section>
      </div>
      )
  }

}