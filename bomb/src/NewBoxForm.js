import { useState } from "react";
import './NewBoxForm.css'

const NewBoxForm =({addBox})=>{

    const initialState = {
        height:'',
        width:'',
        bg:''
    }
    const [data, setFormData] = useState(initialState)

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData(data => ({
            ...data,
            [name]:value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        addBox(data)
        setFormData(initialState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='height'>Height</label>
                <input name='height' type='text' value={data.height} onChange={handleChange}></input>

                <label htmlFor='width'>width</label>
                <input name='width' type='text' value={data.width} onChange={handleChange}></input>

                <label htmlFor='bg'>backgroundColor</label>
                <input name='bg' type='text' value={data.bg} onChange={handleChange}></input>

                <button>PRESS</button>
            </form>
            
        </div>
    )
}

export default NewBoxForm