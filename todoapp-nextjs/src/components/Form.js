import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";

const Form = ({ text, setText, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.title);
    } else {
      setText("");
    }
  }, [setText, editTodo]);

  const onInputChange = (event) => {
    setText(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: text, completed: false }]);
      setText("");
    } else {
      updateTodo(text, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit} style={{marginLeft:400,marginTop:40}}>
        <div class="row g-3 align-items-center">
            <div class="col-6">
            <input
                type="text"
                placeholder="Enter Title"
                className="form-control"
                value={text}
                required
                onChange={onInputChange}
              />
            </div>
        <div class="col-auto">
        <button className="button-add" style={{background: "#a555ec",color:'white',borderRadius:10,padding:5,borderColor:"#a555ec"}} type="submit">
              ADD
        </button>
        </div>
    </div>
</form>
  );
};
export default Form;
