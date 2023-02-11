
import React, { useState } from "react";
import Header from "@/components/Header";
import Form from "@/components/Form";
import TodoList from "@/components/TodoList";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            text={text}
            setText={setText}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
