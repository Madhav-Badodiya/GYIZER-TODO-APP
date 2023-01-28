import "./TodoList.scss";
import React, { useState } from "react";
import TodoForm from "../ToDoform/TodoForm";
import Todo from "../ToDo/Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [about, setAbout] = useState("");

  const addTodo = (todo, about) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodo = {
      ...todo,
      about: about,
    };
    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} about={about} setAbout={setAbout} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
