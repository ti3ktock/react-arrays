import { useState } from "react";
import './style.css';
function App() {

  const [list, setList] = useState([])

  function add_to_list() {

    setList([...list, { label: "Task ", value: list.length }])
    
    
  }
  return <>
    <p>Not Blue</p>
  
    <main>
    
    <h1>Array Example</h1>
    <button onClick={add_to_list}>Add New Task</button>
    <ul>{list.map(item => <li key={item.label + item.value}>
      <p>{item.label} - {item.value}</p>
    </li>)}</ul>
    </main>
    </>
}

export default App