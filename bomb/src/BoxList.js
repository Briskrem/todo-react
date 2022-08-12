import { useState } from "react";
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import {v4 as uuid} from 'uuid'
import './BoxList.css'

const BoxList = () =>{

    const [boxes , setBoxes] = useState([{
        id: uuid(),
        height: '150px',
        width: '150px',
        bg: 'red'
    }])
    

    const addBox = (newItem)=>{
        console.log(newItem)
        setBoxes(data => ([
            ...data, {...newItem, id:uuid()}
        ]))
    }

    const deleteBox = (id)=>{
        setBoxes(boxes => boxes.filter(b => b.id != id))
    }
   
    console.log(boxes)

    return (
        <div className='BoxList'>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({id, height, width, bg}) => (
                <Box 
                key={uuid()}
                id={id}
                height={height} 
                width={width}
                bg={bg} 
                deleteBox={()=>deleteBox(id)}
                />
            ))}
            
            
        </div>
    )
}

export default BoxList