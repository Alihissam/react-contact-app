import React from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import List from './components/List'



const App = () => {
  
const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput]=React.useState("");
  const [todos, setTodos]=React.useState(initialState);
  const [edittodo, setEdittodo]=React.useState(null);

  React.useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <div className='container'>
      <div className="app-wrapper">
       <Header/>
       <div>
       <Form 
       todos={todos} 
       setTodos={setTodos} 
       input={input} 
       setInput={setInput}
       edittodo={edittodo}
       setEdittodo={setEdittodo}
       />
       </div>
       <div>
        <List todos={todos} setTodos={setTodos} input={setInput} setEdittodo={setEdittodo}/>
       </div>
      </div>
    </div>
  )
}

export default App


