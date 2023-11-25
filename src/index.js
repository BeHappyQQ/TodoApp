import React from 'react';
import ReactDOM from 'react-dom/client';
import NewTaskForm from './components/new-task-form/new-task-form';
import TaskList from './components/task-list/task-list';
import Task from './components/task/task';
import Footer from './components/footer/footer';
import TasksFilter from './components/tasks-filter/tasks-filter';
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
  <div>
  <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <NewTaskForm></NewTaskForm>
      </header>
      <section className='main'>
        <TaskList>
          <Task></Task>
          <Task></Task>
          <Task></Task>
        </TaskList>
        <Footer>
          <TasksFilter/>
        </Footer>
      </section>
    </section>
  </div>
  )
}



root.render(<App/>)

