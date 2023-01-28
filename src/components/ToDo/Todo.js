import "./todo.scss";
import React, { useState } from "react";
import TodoForm from "../ToDoform/TodoForm";
import CloseIcon from "@mui/icons-material/Close";
import { Edit } from "@mui/icons-material";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.length > 0 ? (
    <div className="todo-container">
      {todos.map((todo, index) => (
        <div
          className={`todo-row ${todo.isComplete ? "complete" : ""}`}
          key={index}
        >
          <div
            className="todo-text"
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
          >
            {todo.text}
          </div>
          <div className="icons">
            <CloseIcon
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <Edit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="no-tasks">No Tasks</div>
  );
};

export default Todo;
