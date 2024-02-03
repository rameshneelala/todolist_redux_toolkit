import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, saveTodo, deleteTodo } from "../../store/todoSlices";
import "./index.css";

const Tasks = (props) => {
  const { data } = props;
  const { title, id } = data;
  const [editTitle, setEditTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(true);

  const dispatch = useDispatch();
  console.log(isEditing);

  const handleEditTodo = (id) => {
    dispatch(editTodo({ id, title: title }));
    setIsEditing(false);
  };

  const handleSaveTodo = (id) => {
    setIsEditing(true);
    dispatch(saveTodo({ id, title: editTitle }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {isEditing ? (
        <li key={id} className="remove">
          <span className="title">{title}</span>
          <div>
            <button className="edit_title" onClick={() => handleEditTodo(id)}>
              Edit
            </button>
            <button
              className="edit_delete"
              onClick={() => handleDeleteTodo(id)}
            >
              Delete
            </button>
          </div>
        </li>
      ) : (
        <div className="input_field">
          <input
            type="text"
            name="task"
            className="entering"
            placeholder="Enter Task"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button className="edit_save" onClick={() => handleSaveTodo(id)}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Tasks;
