import {useState} from 'react'

const TodoForm =({addTodo})=>{

    //the property of form STATEDATA must have the same property as todoList STATEDATA.
    const initialState = {
        message: ''
    }
    const [data, setData] = useState(initialState)

    const handleChange = (e) => {
        const { name, value} = e.target
        setData(data => (
            { ...data, [name]: value}
        ))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTodo(data)
        setData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor='todo'>ENTER TODO</label>
            <input name='message' type='text' value={data.todo} onChange={handleChange}></input>
            <button>SUBMIT</button>
        </form>
    )
}

export default TodoForm