import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {BsCheckCircle} from "react-icons/bs"

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="row g-3 align-items-center" style={{listStyleType:'none',marginLeft:390,marginTop:20}} key={todo.id}>
            <div className="col-6">
            <input
            type="text"
            value={todo.title}
            className="form-control"
            onChange={(event) => event.preventDefault()}
          /> 
            </div>
            <div className="col-6">
            <button
            className="button-complete"
            style={{background: "#a555ec",color:'white',borderRadius:5,borderColor:"#a555ec",marginRight:5}}
            onClick={() => handleComplete(todo)}
          >
           <BsCheckCircle />
          </button>
          <button className="button-edit" 
          style={{background: "#a555ec",color:'white',borderRadius:5,borderColor:"#a555ec",marginRight:5}}
          onClick={() => handleEdit(todo)}>
            <FaEdit />
          </button>
          <button className="button-delete" 
          style={{background: "#a555ec",color:'white',borderRadius:5,borderColor:"#a555ec",marginRight:5}}
          onClick={() => handleDelete(todo)}>
            <MdDelete />
          </button>
            </div>
        </li>
      ))}
    </div>
  );
};
export default TodoList;
