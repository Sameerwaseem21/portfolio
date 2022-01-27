import React, { useEffect, useState } from 'react'

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log(counter)
    },[counter]);
   return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ClickCount
