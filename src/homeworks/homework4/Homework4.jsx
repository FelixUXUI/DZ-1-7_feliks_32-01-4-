import './App.css';
import User from './components/user/User.jsx';
import Modal from './components/modal/Modal.jsx';
import {useEffect, useState} from 'react';
import Input from './components/input/Input.jsx';
import Button from './components/button/Button.jsx';
import Todo from './components/todo/Todo.jsx';
import TodoList from './components/TodoList/TodoList.jsx';


function Homework4() {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([])

    const handleShow = () => setShow(!show);

    const handleAdd = () => {
        setTasks([...tasks, {id: tasks.length + 1, task: input, completed: false}]);
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
    const handleCompleteTask = (id) => {
        setTasks((tasks)=>{
            return tasks.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
                return task
            })
        })
    }

    const [searchInputValue, setSearchInputValue] = useState("")

    const handleSortTasks = () => {
        const filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(searchInputValue.toLowerCase()))
        return (<TodoList tasks={filteredTasks} handleDelete={handleDelete} handleCompleteTask={handleCompleteTask}/>)
    }

    useEffect(() => {
        const tasksInStorage = JSON.parse(localStorage.getItem("tasks"))
        if (tasksInStorage.length !== 0) {
            setTasks(tasksInStorage)
        } else {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    return (
        <div>
            <div>
                <label htmlFor="filter">
                    <p>{searchInputValue}</p>
                    <input onChange={(e)=>setSearchInputValue(e.target.value)} id="filter" type="text"/>
                </label>
            </div>
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
            {handleSortTasks()}
        </div>
    );
}


export default Homework4;
