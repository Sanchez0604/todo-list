import { useState } from 'react';
import './App.css';

function App() {
  let [lista,setLista] = useState(["tarefa1","tarefa2"]);
  let [novoItem, setNovoItem] = useState("");

  function adicionarNovoItem(){
    setLista([...lista,novoItem]);
    setNovoItem("")
  }

  console.log(lista);
  return (
    <div>
      <input value={novoItem} onChange={value=> setNovoItem(value.target.value)} type= "text"/>
      <button onClick={()=> adicionarNovoItem()}>Adicionar</button>
      <ul>
        {lista.map(item => <li><button>X</button>{item}<input type='checkbox' name={item} checked='false'/></li>)}
      </ul>
    </div>
  );
}


export default App;
