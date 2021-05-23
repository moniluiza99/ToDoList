import React, { useState } from 'react';
import './ToDoListPage.css';
import Form from "../components/Form";
import ToDoList from "../components/ToDoList";

function ToDoListPage() {
  const [inputText, setInputText]= useState ("");
  const [todos, setTodos] = useState([]);

  const toDoRemoveHandler = (index) => {

    let newToDo = [...todos]
    newToDo.splice(index,1)
    setTodos(newToDo)
  }

  return (
    <div className="App">

      <header>
        <h1>My Pink List</h1>
      </header>
        
      <Form 
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      />

      <ToDoList todos={todos} toDoRemoveHandler={toDoRemoveHandler}/>

    </div>
  );
}

export default ToDoListPage;
