import React,{useState} from './App'

let Child = (props)=>{
    return(
        <div className='child'>
            <h1>Child Component {props.key}</h1>
            <button onClick={()=>{props.set('Option '+props.key)}}></button>
        </div>
    )
}
export default Child