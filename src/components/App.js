
import React,{useState} from "react";
import './../styles/App.css';
import { Children } from "react/cjs/react.production.min";
import Child from './Child'

const App = () => {
  let[selectedOption, SetselectedOption]=useState('')
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <Child set={SetselectedOption} key='1'/>
      <Child set={SetselectedOption} key='2'/>
      <div>Selected Option :{selectedOption}</div>
    </div>
  )
}

export default App
