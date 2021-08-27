import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // State
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  return (
    <>
      <InputTodo
        todoText={todoText}
        setTodoText={setTodoText}
        incompleteTodos={incompleteTodos}
        setIncompleteTodos={setIncompleteTodos}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        completeTodos={completeTodos}
        setIncompleteTodos={setIncompleteTodos}
        setCompleteTodos={setCompleteTodos}
      />
      <CompleteTodos
        incompleteTodos={incompleteTodos}
        completeTodos={completeTodos}
        setIncompleteTodos={setIncompleteTodos}
        setCompleteTodos={setCompleteTodos}
      />
    </>
  );
};
