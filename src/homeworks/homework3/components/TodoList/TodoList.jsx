import React from 'react';
import Todo from '../todo/Todo.jsx';
import classes from './todoList.module.css';


const TodoList = ({tasks, handleDelete}) => {
  return (
    <div className={classes.list}>
      {
        tasks.map(task =>
          <Todo task={task} handleDelete={handleDelete}/>
        )
      }
    </div>
  );
};

export default TodoList;