import React, { useState } from "react";

const StudentState = () => {
  const [count, setCount] = useState(100);
  function Increment(){
    setCount(count+4)
  }
  function Decrement(){
    setCount(count-10)
  }
  return <div>
    <div><h2>{count}</h2>
    <button onClick={Increment}>Do Increment</button>
    <button onClick={Decrement}>Do Decrement</button>
    </div>
    
  </div>;
};
export default StudentState;