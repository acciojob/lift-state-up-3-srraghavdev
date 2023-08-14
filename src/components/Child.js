import React,{useState} from 'react'

let Child = (props)=>{
    return(
        <div className='child'>
            <p>Child Component {props.key}</p>
            <button onClick={()=>{props.set('Option '+props.k)}}>{'Option '+props.k}</button>
        </div>
    )
}
export default Child