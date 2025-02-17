import {useState} from "react";

const Test = () => {
    let someData = 2;

    const [number, setNumber] = useState(3);
  return (
    <div>
      <p> {someData} </p> 
      <button onClick={() => (someData => 45)}> Mudar State</button>

      <p> {number} </p> 
      <button onClick={() => (setNumber(23))}> Mudar State</button>
    </div>
  )
}

export default Test
