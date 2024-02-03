import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tasks from "../Tasks";
import { addTodo } from "../../store/todoSlices";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const title = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  console.log(todos);

  const handleAddTodo = () => {
    if (title.current.value !== "") {
      dispatch(addTodo({ id: uuidv4(), title: title.current.value }));
    }
    title.current.value = "";
  };

  return (
    <div className="todo-container">
      <h1>Doing Regular Tasks</h1>
      <div className="input-type">
        <input
          type="text"
          name="task"
          className="entering-data"
          placeholder="Enter Task"
          ref={title}
        />
        <button className="add" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      {todos.length !== 0 && (
        <ul className="tasks_filling">
          {todos.map((eachTodo) => (
            <Tasks data={eachTodo} key={eachTodo.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
