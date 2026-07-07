 import { useState } from "react";

function UseStateContent(){
  const[num,newnum]=useState (0)
    
    function increaseNum(){
    newnum(num+1)
    }
    function decreaseNum(){
    newnum(num-1);
    }

  return (
    <div className="card">
      <h1>{num}</h1>
    <button className="b1" onClick={increaseNum}>Increase</button>
    <button className="b2" onClick={decreaseNum}>Decrease</button>
    </div>
  )
}
export default UseStateContent;