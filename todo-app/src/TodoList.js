import {useState} from 'react'
import { v4 as uuid } from 'uuid'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList =()=>{

    const [ data, setData] = useState(  [   { id: uuid(), message: 'cut hair' }  ]   )

    const addTodo = (newTodo) => {
        setData(data => [...data, {...newTodo, id:uuid()}])
    }

    const deleteTodo = (id)=>{
        setData(data => data.filter(b => b.id != id))
    }

    const editTodo = (idx, update)=>{
        setData(data =>(
           [ ...data, 
            data[idx].message = update]
        ))
    }

    console.log(data)

    return (
        <div>
            <TodoForm  addTodo={addTodo}/>
            {data.map(({id, message}, idx)=>(
                <Todo 
                key={id}
                id={idx}
                deleteTodo={()=>deleteTodo(id)}
                message={message}
                />
            ))}
            
        </div>
    )

}

export default TodoList