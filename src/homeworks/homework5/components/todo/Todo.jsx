import React, {useState} from 'react';
import classes from './todo.module.css';
import Button from '../button/Button.jsx';


const Todo = ({task, handleDelete, handleCompleteTask}) => {

    const [checked, setChecked] = useState(task.completed)

    // const handleCheck = () => {
    //     setChecked(!checked)
    // }

    return (
        <div className={classes.todo}>
            {/*<input type="checkbox" onChange={handleCheck} checked={checked}/>*/}
            <p style={task.completed ? {textDecoration: "line-through", color: "green"} : {}}>{task.id} {task.task}</p>
            <Button action={() => handleCompleteTask(task.id)}
                    text={'Done'}
            />
            <Button action={() => handleDelete(task.id)}
                    text={'Delete'}
            />
        </div>
    )
};

export default Todo;