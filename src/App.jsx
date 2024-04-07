import {useState} from'react';
import './App.css'

export default function App() {
// let count = 0;
const [count,setCount] = useState(0)
function increment(){
  //count = count +1;
  setCount(count+1)
  console.log(count);
}
function decriment(){
  setCount(count-1);
}
  return (
    <div>
      <h1>Welcome to my app</h1>
      <button onClick={increment}>
      +
    </button >
      <p>{count}</p>
      <button onClick={decriment}>
    -
    </button>
    </div>
  )
}
function MyButton() {
  return (
    <button>
      +
    </button>
  );
}
function Button2(){
  return(
    <button>
    -
    </button>
  );
}





