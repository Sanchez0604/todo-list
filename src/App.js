import { useState } from 'react';
import './App.css';

function App() {
  let [lista,setLista] = useState(["tarefa1","tarefa2"]);
  let [novoItem, setNovoItem] = useState("");

  console.log(lista);
  return (
    <div>
      <input value={novoItem} type= "text"/>
      <ul>
        {lista.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
