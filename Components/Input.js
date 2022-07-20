import React from "react";
import { useState } from "react";
import axios from "axios";
const Input = () => {
  const [task, setTask] = useState();
  const onTaskHandle = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const submitTask = async () => {
    if (task === undefined) {
      alert("Task Sould not be blank.");
    } else {
      console.log("Task Enterd = ", task);
    }
    await axios
      .post("http://localhost:9001/todo", task)
      .then((res) => {
        alert("Record Saved");
        console.log("post", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="col-md-6 offset-3">
        <h1>To do List</h1>
        <hr />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter Task Here :
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={onTaskHandle}
        />
        <br />
        <label
          htmlFor="exampleInputEmail1"
          className="form-label"
          onChange={onTaskHandle}
        >
          Enter Date Here :
        </label>
        <input
          type="date"
          name="date"
          className="form-control"
          onChange={onTaskHandle}
        />
        <br />
        <button type="submit" className="btn btn-success" onClick={submitTask}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Input;
