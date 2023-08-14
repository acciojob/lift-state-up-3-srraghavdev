
import React,{useState} from "react";
import './../styles/App.css';
import { Children } from "react/cjs/react.production.min";
import Child from './Child'

const App = () => {
  let[selectedOption, SetselectedOption]=useState('')
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <Child set={SetselectedOption} k={1}/>
      <Child set={SetselectedOption} k={2}/>
      <p>Selected Option : {selectedOption}</p>
    </div>
  )
}

export default App
