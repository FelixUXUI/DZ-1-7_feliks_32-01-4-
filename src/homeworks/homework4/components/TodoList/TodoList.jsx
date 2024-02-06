import React from 'react';
import Todo from '../todo/Todo.jsx';
import classes from './todoList.module.css';


const TodoList = ({tasks, handleDelete, handleCompleteTask}) => {
  return (
    <div className={classes.list}>
      {
        tasks.map(task =>
          <Todo key={task.id} task={task} handleDelete={handleDelete} handleCompleteTask={handleCompleteTask}/>
        )
      }
    </div>
  );
};

export default TodoList;