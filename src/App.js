import React, { useState, useEffect } from "react";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodo = async (todo) => {
    setTodos([...todos, todo]);
  };
  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container fluid>
      <h1>Todo with local storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodo={addTodo} />
    </Container>
  );
};

export default App;
