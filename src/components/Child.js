import React,{useState} from 'react'

let Child = (props)=>{
    return(
        <div className='child'>
            <button onClick={()=>{props.set('Option '+props.k)}}>{'Option '+props.k}</button>
        </div>
    )
}
export default Child