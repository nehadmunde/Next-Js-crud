import React from "react";
import Edit from "../Components/Edit";
import Input from "../Components/Input";
import Nav from "../Components/Nav";
import TodoList from "../Components/TodoList";

const home = () => {
  return (
    <div className="container ">
      <Nav />
      <TodoList />
    </div>
  );
};

export default home;
