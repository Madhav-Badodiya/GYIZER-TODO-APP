import React from "react";
import "./App.css";
import TodoList from "./components/todoList/TodoList";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="todo-app">
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
