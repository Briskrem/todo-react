import './Todo.css'
const Todo = ({id, message, deleteTodo}) => {

    console.log(id,message)
    return (
        <div className='Todo'>
            <p>{message}</p>
            <span onClick={deleteTodo}>X</span>
            <button>EDIT</button>
        </div>
    )


}

export default Todo