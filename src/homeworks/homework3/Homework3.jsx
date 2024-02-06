import './App.css';
import User from './components/user/User.jsx';
import Modal from './components/modal/Modal.jsx';
import {useState} from 'react';
import Input from './components/input/Input.jsx';
import Button from './components/button/Button.jsx';
import Todo from './components/todo/Todo.jsx';
import TodoList from './components/TodoList/TodoList.jsx';


function Homework3() {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: 'coding'
        },
        {
            id: 2,
            task: 'eat'
        },
        {
            id: 3,
            task: 'sleep'
        }
    ])

    const handleShow = () => setShow(!show);

    const handleAdd = () => {
        setTasks([...tasks, {id: tasks.length + 1, task: input}]);
    };

    const onChangeInput = (event) => {
        setInput(event.target.value);
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter((item) => item.id !== id))
    }
    // const a = [1,2,3]
    // const b = [4,5,6]
    // console.log([...a,...b]);


    return (
        <div>
            {
                show &&
                <Modal
                    handleShow={handleShow}
                    onChangeInput={onChangeInput}
                    handleAdd={handleAdd}
                >
                </Modal>
            }
            <Button action={handleShow} text={'открыть'}/>
            <TodoList tasks={tasks} handleDelete={handleDelete}/>
        </div>
    );
}


export default Homework3;
