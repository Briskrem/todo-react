import './Box.css'
const Box = ({height, width, bg, id, deleteBox}) =>{

    console.log(height, width, bg, id)
//     <div>
//     <div 
//     className="Box"
//     style={{backgroundColor: bg, height: height, width:width}}
//     >
//     maka
//     </div>
//     <span>X</span>
// </div>
    return (
        <div className='Box-C'>
        <div 
        className="Box"
        style={{backgroundColor: bg, height: height, width:width}}
        >
        
        </div>
        <span onClick={deleteBox}>X</span>
        </div>
     
          
       
        
    )
}

export default Box