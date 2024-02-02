import React from 'react';
import classes from './todo.module.css';
import Button from '../button/Button.jsx';


const Todo = ({task, handleDelete}) => {

  return (
    <div className={classes.todo}>
        <p>{task.id} {task.task}</p>
      <Button action={()=>handleDelete(task.id)}
      text={'Delete'}
      />
    </div>
  )
};

export default Todo;