import React,{useState} from 'react';
import './App.css';

const Counter = () =>{
//state hook
const [count, setCount] = useState(0)

const adding = () =>{
setCount(count + 1)
}
const reducing = () =>{
    setCount(count - 1)
}
if(count === 10){
    return (
    <div>
    <p className='text-p'>Count : {count}</p>
    <p className='text-p-limit'>Limit of 10 has been reached</p>
    <div id='container'>
    <button className='increament-btn' onClick={adding}>Increament</button>
    <button className='decreament-btn' onClick={reducing}>Decreament</button>
    </div> 
    </div>
    ) 
}else if(count > 10 ){
    return(
    <div>
    <p className='text-p'>Count : {count}</p>
    <p className='text-p-limit'>Limit passed!</p>
    <div id='container'>
    <button className='increament-btn' onClick={adding}>Increament</button>
    <button className='decreament-btn' onClick={reducing}>Decreament</button>
    </div>
    
    </div>
  )
}else{
    return(
        <div>
        <p className='text-p'>Count : {count}</p>
        <p className='text-p-limit'>Limit not reached</p>
        <div id='container'>
        <button className='increament-btn' onClick={adding}>Increament</button>
        <button className='decreament-btn' onClick={reducing}>Decreament</button>
        </div>
        
        </div>
      )
}
}

export default Counter


