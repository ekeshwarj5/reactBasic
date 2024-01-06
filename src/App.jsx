import { useState } from "react";

function App() {
  const[title,setTitle] = useState("My name is Ekeshwar");
  function updateTitle(){
    setTitle("My name is " + Math.random());
  }
  return (
      <div>
        <button onClick={updateTitle} type="text">Update the tittle</button>
        <Header tittle={title}></Header>
        <Header tittle="Ekeshwar2"></Header>
      </div>
  )
}

function Header({tittle}){
  return <div>
    {tittle};
  </div>
}

export default App;
